#include "public.h"
#include "cJSON.h"
#include "base64.h"
#include "http.h"
#include "utils.h"
#include <stdio.h>
#include <iostream>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <iconv.h>

#ifdef __cplusplus
extern "C"
{
#endif
int init(int log_level);
int clean();
int login_v40(char* ip, int port, char* user_name, char* password,void *p);
int logout(int lUserId);
int start_remote_control(int lUserID, int action, char* card_no);
int end_remote_control(int lHandle);
int handle_one_card(int m_lSetCardCfgHandle, char* card_no, void *p);
int get_all_card(int m_lSetCardCfgHandle, void *p);
int set_one_card(int m_lSetCardCfgHandle, char* card_no, int eno, char* name);
int get_face(int m_lSetCardCfgHandle, void *p);
int set_one_face(int m_lSetCardCfgHandle, char* card_no, int dwFaceLen, char* pFaceBuffer);
int delete_face(int lUserID,char* card_no);
int set_call_back_fun(int index, char* user_data_json);
int setup_alarm(int lUserID, int byLevel);
int close_alarm(int alarm_handle);
void show_sdk_version();
int get_err_code();
char* get_err_msg(int err_code);
#ifdef __cplusplus
}
#endif

// 模块初始化与释放资源
int init(int log_level){
    // 初始化 HCNetSDK
    NET_DVR_LOCAL_SDK_PATH sd_path = {0};
    strncpy(sd_path.sPath, "/usr/lib", NET_SDK_MAX_FILE_PATH);
    NET_DVR_SetSDKInitCfg(NET_SDK_INIT_CFG_SDK_PATH, &sd_path);
    //NET_DVR_SetSDKInitCfg(NET_SDK_INIT_CFG_LIBEAY_PATH, "/usr/lib")
    //NET_DVR_SetSDKInitCfg(NET_SDK_INIT_CFG_SSLEAY_PATH, "/usr/lib")
    int init_flag = NET_DVR_Init();
    char* log_path = new char[50];
    strcpy(log_path,"/home/sdkLog");
    NET_DVR_SetLogToFile(log_level, log_path);
    return init_flag;
}

int clean(){
    // 释放资源，用完sdk后应该释放资源，对应init，有init，程序结束后就必须执行 clean
    int clean_flag = NET_DVR_Cleanup();
    return clean_flag;
}

// 登录设备与登出设备
int login_v40(char* ip, int port, char* user_name, char* password,void *p){
    NET_DVR_USER_LOGIN_INFO struLoginInfo = {0};
    NET_DVR_DEVICEINFO_V40 *point = (NET_DVR_DEVICEINFO_V40 *)p;
    struLoginInfo.bUseAsynLogin = false;
    struLoginInfo.wPort = port;
    strncpy(struLoginInfo.sDeviceAddress, ip, NET_DVR_DEV_ADDRESS_MAX_LEN);
    strncpy(struLoginInfo.sUserName, user_name, NET_DVR_LOGIN_USERNAME_MAX_LEN);
    strncpy(struLoginInfo.sPassword, password, NET_DVR_LOGIN_PASSWD_MAX_LEN);
    int lUserID = NET_DVR_Login_V40(&struLoginInfo, point);
    return lUserID;
}

int logout(int lUserId){
    int logout_flag = NET_DVR_Logout(lUserId);
    return logout_flag;
}

// 开启远程控制与关闭远程控制
int start_remote_control(int lUserID, int action, char* card_no){
    int command = 0;
    int lHandle = -1;
    int n = get_first_n(action);
    if (n==1){
        NET_DVR_CARD_COND cardCond = {0};
        cardCond.dwSize = sizeof(cardCond);
        cardCond.dwCardNum = 1;
        if (action==1011){ // action，1 开头为卡，2 开头为指纹（预留），3开头为人脸
            command = NET_DVR_SET_CARD;
        } else if (action==1021){
            command = NET_DVR_GET_CARD;
        } else if (action==1022){
            command = NET_DVR_GET_CARD;
            cardCond.dwCardNum = 0xffffffff;
        } else if (action==1031){
            command = NET_DVR_DEL_CARD;
        }
        lHandle = NET_DVR_StartRemoteConfig(lUserID, command, &cardCond, sizeof(cardCond),NULL,NULL);
    } else if (n==2){
    } else if (n==3){
        NET_DVR_FACE_COND faceCond = {0};
        faceCond.dwSize = sizeof(faceCond);
        faceCond.dwFaceNum = 1;
        if (action==3011){
            command = NET_DVR_SET_FACE;
            faceCond.dwEnableReaderNo = 1;
        } else if(action==3021) {
            command = NET_DVR_GET_FACE;
            strncpy((char *)faceCond.byCardNo, card_no, ACS_CARD_NO_LEN);//卡号
        }
        lHandle = NET_DVR_StartRemoteConfig(lUserID, command, &faceCond, sizeof(faceCond),NULL,NULL);
    }
    return lHandle;
}

int end_remote_control(int lHandle){
    int end_flag = NET_DVR_StopRemoteConfig(lHandle);
    return end_flag;
}

// 实际功能

// 获取或删除卡
int handle_one_card(int m_lSetCardCfgHandle, char* card_no, void *p){
	// 根据上一步的操作指令，完成对该卡号的获取或删除
	NET_DVR_CARD_SEND_DATA struCardNo;
	struCardNo.dwSize = sizeof(struCardNo);
    strncpy((char *)struCardNo.byCardNo, card_no, ACS_CARD_NO_LEN);//卡号
	NET_DVR_CARD_RECORD *point = (NET_DVR_CARD_RECORD *)p;

	(*point).dwSize = sizeof(*point);
	DWORD pInt = 0;
	int dwState;
    while (true){
		dwState = NET_DVR_SendWithRecvRemoteConfig(m_lSetCardCfgHandle, &struCardNo, sizeof(struCardNo), point, sizeof(*point), &pInt);
        if (dwState == NET_SDK_CONFIG_STATUS_NEEDWAIT || dwState == NET_SDK_CONFIG_STATUS_SUCCESS) { // 1001
            usleep(100);
            continue;
        } else  {
            break;
        }
	}
    return dwState;
}

// 获取所有卡
int get_all_card(int m_lSetCardCfgHandle, void *p){
	NET_DVR_CARD_RECORD *point = (NET_DVR_CARD_RECORD *)p;
	(*point).dwSize = sizeof(*point);

    int dwState;
    while (true){
        dwState = NET_DVR_GetNextRemoteConfig(m_lSetCardCfgHandle, point, sizeof(*point));
        if (dwState == NET_SDK_CONFIG_STATUS_NEEDWAIT) { // 1001
            usleep(1000);
            continue;
        } else  {
            break;
        }
	}
    return dwState;
}

//下发一张卡
int set_one_card(int m_lSetCardCfgHandle, char* card_no, int eno, char* name){
    NET_DVR_CARD_RECORD struCardRecord = {};
    struCardRecord.dwSize = sizeof(struCardRecord);
    struCardRecord.byCardType = 1;//普通卡
    struCardRecord.byLeaderCard = 0; //是否为首卡，0-否，1-是
    struCardRecord.byUserType = 0;
    struCardRecord.byDoorRight[0] = 1; //门1有权限
    struCardRecord.wCardRightPlan[0] = 1;//卡计划模板1有效

    strncpy((char *)struCardRecord.byCardNo, card_no, ACS_CARD_NO_LEN);//卡号
    struCardRecord.dwEmployeeNo = eno; //工号
    strncpy((char *)struCardRecord.byName, name, NAME_LEN);

	NET_DVR_CARD_STATUS struCardStatus;
	struCardStatus.dwSize = sizeof(struCardStatus);
	DWORD pInt = 0;
	int dwState = NET_DVR_SendWithRecvRemoteConfig(m_lSetCardCfgHandle, &struCardRecord, sizeof(struCardRecord),
			&struCardStatus, sizeof(struCardStatus), &pInt);

	int dwErrorCode = struCardStatus.dwErrorCode;
	if (dwErrorCode != 0){
	    dwState = HPR_ERROR;
	}
	return dwState;
}

// 获取人脸
int get_face(int m_lSetCardCfgHandle, void *p){
    NET_DVR_FACE_RECORD struFaceRecord = {0};
	struFaceRecord.dwSize = sizeof(struFaceRecord);
    int dwState;
    while (true){
        dwState = NET_DVR_GetNextRemoteConfig(m_lSetCardCfgHandle, &struFaceRecord, sizeof(struFaceRecord));
        if (dwState == NET_SDK_CONFIG_STATUS_NEEDWAIT) { // 1001
            usleep(1000);
            continue;
        } else  {
            break;
        }
	}
	if (dwState==NET_SDK_CONFIG_STATUS_SUCCESS || dwState==NET_SDK_CONFIG_STATUS_FINISH){
		NET_DVR_FACE_RECORD *point = (NET_DVR_FACE_RECORD *)p;
        strncpy((char *)(*point).byCardNo, (char *)struFaceRecord.byCardNo, ACS_CARD_NO_LEN);//卡号
        (*point).dwFaceLen = struFaceRecord.dwFaceLen;

        int dwFaceLen = struFaceRecord.dwFaceLen;
        if (dwFaceLen>0){
            unsigned char* pFaceBuffer = (unsigned char*)struFaceRecord.pFaceBuffer;
            unsigned char* pic = new unsigned char[dwFaceLen*2];
            b64_encode(pFaceBuffer,dwFaceLen,pic);
            (*point).pFaceBuffer = (BYTE*)pic;
        }
	}
    return dwState;
}

//下发一张人脸图片
int set_one_face(int m_lSetCardCfgHandle, char* card_no, int dwFaceLen, char* pFaceBuffer){
    NET_DVR_FACE_RECORD struFaceRecord = {0};
    struFaceRecord.dwSize = sizeof(struFaceRecord);
    strncpy((char *)struFaceRecord.byCardNo, card_no, ACS_CARD_NO_LEN);//卡号
    struFaceRecord.dwFaceLen = dwFaceLen; //长度
    struFaceRecord.pFaceBuffer = (BYTE*)pFaceBuffer; //指针，实际上是人脸的二进制数据
	NET_DVR_FACE_STATUS struFaceStatus;
	struFaceStatus.dwSize = sizeof(struFaceStatus);
	DWORD pInt = 0;
	int dwState = NET_DVR_SendWithRecvRemoteConfig(m_lSetCardCfgHandle, &struFaceRecord, sizeof(struFaceRecord),
			&struFaceStatus, sizeof(struFaceStatus), &pInt);

	int byRecvStatus = struFaceStatus.byRecvStatus;
	if (byRecvStatus != 1){
	    dwState = -byRecvStatus;
	}
	return dwState;
}

// 删除人脸
int delete_face(int lUserID,char* card_no){
    NET_DVR_FACE_PARAM_CTRL face_param = {0};
    face_param.dwSize = sizeof(face_param);
    face_param.byMode = 0;
    strncpy((char *)face_param.struProcessMode.struByCard.byCardNo, card_no, ACS_CARD_NO_LEN);//卡号
	face_param.struProcessMode.struByCard.byEnableCardReader[0] = 1; //读卡器
	face_param.struProcessMode.struByCard.byFaceID[0] = 1; //人脸ID
    return NET_DVR_RemoteControl(lUserID, NET_DVR_DEL_FACE_PARAM_CFG, &face_param, sizeof(face_param));
}



// 设置布放回调方法，需要自定义
void CALLBACK post_msg(LONG lCommand, NET_DVR_ALARMER *pAlarmer, char *pAlarmInfo, DWORD dwBufLen, void* pUser){
    printf("-----------------start------------------\n");
    printf("lCommand:%d\n", lCommand);
    char* user_data_json = (char*)pUser;
    cJSON *json= cJSON_Parse(user_data_json);
    char* url = cJSON_GetObjectItem(json, "url")->valuestring;

    cJSON *send_data =  cJSON_CreateObject();
    cJSON_AddNumberToObject(send_data, "lCommand", lCommand);
//    cJSON_AddNumberToObject(send_data, "byUserIDValid", int((*pAlarmer).byUserIDValid));
//    cJSON_AddNumberToObject(send_data, "lUserID", (*pAlarmer).lUserID);
    cJSON_AddNumberToObject(send_data, "bySerialValid", int((*pAlarmer).bySerialValid));
    cJSON_AddStringToObject(send_data, "sSerialNumber", (char*)(*pAlarmer).sSerialNumber);
//    cJSON_AddNumberToObject(send_data, "byDeviceNameValid", int((*pAlarmer).byDeviceNameValid));
//    cJSON_AddStringToObject(send_data, "sDeviceName", (*pAlarmer).sDeviceName);
//    cJSON_AddNumberToObject(send_data, "byMacAddrValid", int((*pAlarmer).byMacAddrValid));
//    cJSON_AddStringToObject(send_data, "byMacAddr", (char*)(*pAlarmer).byMacAddr);
//    cJSON_AddNumberToObject(send_data, "byLinkPortValid", int((*pAlarmer).byLinkPortValid));
//    cJSON_AddNumberToObject(send_data, "wLinkPort", int((*pAlarmer).wLinkPort));
    cJSON_AddNumberToObject(send_data, "byDeviceIPValid", int((*pAlarmer).byDeviceIPValid));
    cJSON_AddStringToObject(send_data, "sDeviceIP", (*pAlarmer).sDeviceIP);
//    cJSON_AddNumberToObject(send_data, "bySocketIPValid", int((*pAlarmer).bySocketIPValid));
//    cJSON_AddStringToObject(send_data, "sSocketIP", (*pAlarmer).sSocketIP);
//    cJSON_AddNumberToObject(send_data, "byIpProtocol", int((*pAlarmer).byIpProtocol));
//    cJSON_AddNumberToObject(send_data, "bJSONBroken", int((*pAlarmer).bJSONBroken));

    if (lCommand == COMM_ALARM_ACS){
        NET_DVR_ACS_ALARM_INFO *point = (NET_DVR_ACS_ALARM_INFO *)pAlarmInfo;
        cJSON_AddNumberToObject(send_data, "dwMajor", int((*point).dwMajor));
        cJSON_AddNumberToObject(send_data, "dwMinor", int((*point).dwMinor));
        cJSON_AddStringToObject(send_data, "sNetUser", (char*)(*point).sNetUser);

        // 刷人脸信息
        int dwPicDataLen = int((*point).dwPicDataLen);
        cJSON_AddNumberToObject(send_data, "dwPicDataLen", dwPicDataLen);
        if (dwPicDataLen>0) {
            unsigned char* pPicData = (unsigned char*)(*point).pPicData;
            unsigned char* pic = new unsigned char[dwPicDataLen*2];
            b64_encode(pPicData,dwPicDataLen,pic);
            cJSON_AddStringToObject(send_data, "pPicData", (char *)pic);
        }
        cJSON_AddNumberToObject(send_data, "wInductiveEventType", int((*point).wInductiveEventType));
        cJSON_AddNumberToObject(send_data, "byPicTransType", int((*point).byPicTransType));
        cJSON_AddNumberToObject(send_data, "byAcsEventInfoExtend", int((*point).byAcsEventInfoExtend));

        // 刷卡信息
        cJSON_AddStringToObject(send_data, "byCardNo", (char*)(*point).struAcsEventInfo.byCardNo);
        cJSON_AddNumberToObject(send_data, "byCardType", int((*point).struAcsEventInfo.byCardType));
        cJSON_AddNumberToObject(send_data, "byCardReaderKind", int((*point).struAcsEventInfo.byCardReaderKind));
        cJSON_AddNumberToObject(send_data, "dwCardReaderNo", int((*point).struAcsEventInfo.dwCardReaderNo));
        cJSON_AddNumberToObject(send_data, "dwDoorNo", int((*point).struAcsEventInfo.dwDoorNo));
        cJSON_AddNumberToObject(send_data, "dwVerifyNo", int((*point).struAcsEventInfo.dwVerifyNo));
        cJSON_AddNumberToObject(send_data, "dwCaseSensorNo", int((*point).struAcsEventInfo.dwCaseSensorNo));
        cJSON_AddNumberToObject(send_data, "dwEmployeeNo", int((*point).struAcsEventInfo.dwEmployeeNo));
        cJSON_AddNumberToObject(send_data, "bySwipeCardType", int((*point).struAcsEventInfo.bySwipeCardType));
        cJSON_AddNumberToObject(send_data, "dwSerialNo", int((*point).struAcsEventInfo.dwSerialNo));

        // 额外信息
        NET_DVR_ACS_EVENT_INFO_EXTEND *point2 = (NET_DVR_ACS_EVENT_INFO_EXTEND *)(*point).pAcsEventInfoExtend;
        cJSON_AddNumberToObject(send_data, "dwFrontSerialNo", int((*point2).dwFrontSerialNo));
        cJSON_AddNumberToObject(send_data, "byUserType", int((*point2).byUserType));
        cJSON_AddNumberToObject(send_data, "byCurrentVerifyMode", int((*point2).byCurrentVerifyMode));
        cJSON_AddNumberToObject(send_data, "byCurrentEvent", int((*point2).byCurrentEvent));
        cJSON_AddStringToObject(send_data, "byEmployeeNo", (char*)(*point2).byEmployeeNo);

    } else if (lCommand == COMM_ID_INFO_ALARM){
        NET_DVR_ID_CARD_INFO_ALARM *point = (NET_DVR_ID_CARD_INFO_ALARM *)pAlarmInfo;
        // 事件
        cJSON_AddNumberToObject(send_data, "dwMajor", int((*point).dwMajor));
        cJSON_AddNumberToObject(send_data, "dwMinor", int((*point).dwMinor));
        cJSON_AddStringToObject(send_data, "sNetUser", (char*)(*point).byNetUser);

        // 设备
        cJSON_AddNumberToObject(send_data, "dwCardReaderNo", int((*point).dwCardReaderNo));
        cJSON_AddNumberToObject(send_data, "dwDoorNo", int((*point).dwDoorNo));

        // 人脸
        int dwPicDataLen = int((*point).dwPicDataLen);
        cJSON_AddNumberToObject(send_data, "dwPicDataLen", dwPicDataLen);
        if (dwPicDataLen>0) {
            unsigned char* pPicData = (unsigned char*)(*point).pPicData;
            unsigned char* pic = new unsigned char[dwPicDataLen*2];
            b64_encode(pPicData,dwPicDataLen,pic);
            cJSON_AddStringToObject(send_data, "pPicData", (char *)pic);
        }

        int dwCapturePicDataLen = int((*point).dwCapturePicDataLen);
        cJSON_AddNumberToObject(send_data, "dwCapturePicDataLen", dwCapturePicDataLen);
        if (dwCapturePicDataLen>0) {
            unsigned char* pCapturePicData = (unsigned char*)(*point).pCapturePicData;
            unsigned char* pic = new unsigned char[dwCapturePicDataLen*2];
            b64_encode(pCapturePicData,dwCapturePicDataLen,pic);
            cJSON_AddStringToObject(send_data, "pCapturePicData", (char *)pic);
        }
        // 读卡器和身份证
        cJSON_AddNumberToObject(send_data, "byCardType", int((*point).byCardType));
        cJSON_AddNumberToObject(send_data, "byDeviceNo", int((*point).byDeviceNo));

        // 身份证
        cJSON_AddStringToObject(send_data, "byName", (char*)(*point).struIDCardCfg.byName);
        cJSON_AddStringToObject(send_data, "byAddr", (char*)(*point).struIDCardCfg.byAddr);
        cJSON_AddStringToObject(send_data, "byIDNum", (char*)(*point).struIDCardCfg.byIDNum);
        cJSON_AddStringToObject(send_data, "byIssuingAuthority", (char*)(*point).struIDCardCfg.byIssuingAuthority);
        cJSON_AddNumberToObject(send_data, "bySex", int((*point).struIDCardCfg.bySex));
        cJSON_AddNumberToObject(send_data, "byNation", int((*point).struIDCardCfg.byNation));
    }
    printf("send_data_str:%s", cJSON_Print(send_data));
    int send_flag = send_post(url, cJSON_PrintUnformatted(send_data));
    printf("\nsend_flag:%d\n", send_flag);
    cJSON_Delete(send_data);
    cJSON_Delete(json);
    printf("-----------------end------------------\n");
}

// 设置布防
int set_call_back_fun(int index, char* user_data_json){
    int set_flag = NET_DVR_SetDVRMessageCallBack_V50(index, post_msg, user_data_json);
    return set_flag;
}

// 启用布防
int setup_alarm(int lUserID, int byLevel){
    NET_DVR_SETUPALARM_PARAM_V50 alarm_param = {0};
    alarm_param.dwSize = sizeof(alarm_param);
    alarm_param.byLevel = byLevel; // 优先级高
    alarm_param.byRetVQDAlarmType = 1;
    alarm_param.byRetAlarmTypeV40 = 1;
    alarm_param.byFaceAlarmDetection =1;
    alarm_param.byRetDevInfoVersion = 1;
    alarm_param.byAlarmInfoType = 1;
    alarm_param.byDeployType = 1;
    alarm_param.bySupport = 4;


    int alarm_handle =  NET_DVR_SetupAlarmChan_V50(lUserID, &alarm_param,NULL,0);
    return alarm_handle;
}


// 撤销布防
int close_alarm(int alarm_handle){
    int close_flag = NET_DVR_CloseAlarmChan_V30(alarm_handle);
    return close_flag;
}


// 其他功能
void show_sdk_version(){
    unsigned int uiVersion = NET_DVR_GetSDKBuildVersion();
    char strTemp[1024] = {0};
    sprintf(strTemp, "HCNetSDK V%d.%d.%d.%d\n", \
        (0xff000000 & uiVersion)>>24, \
        (0x00ff0000 & uiVersion)>>16, \
        (0x0000ff00 & uiVersion)>>8, \
        (0x000000ff & uiVersion));
    printf(strTemp);
}

int get_err_code(){
    int err_code = NET_DVR_GetLastError();
    return err_code;
}

char* get_err_msg(int err_code){
    char* err_msg = NET_DVR_GetErrorMsg(&err_code);
    return err_msg;
}






