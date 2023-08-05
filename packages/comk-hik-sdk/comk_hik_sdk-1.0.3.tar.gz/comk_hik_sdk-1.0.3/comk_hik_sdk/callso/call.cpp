#include "public.h"
#include <stdio.h>
#include <iostream>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

extern "C" {
int init(int log_level);
int clean();
int login_v40(char* ip, int port, char* user_name, char* password,void *p);
int logout(int lUserId);
int start_remote_control(int lUserID, int action);
int end_remote_control(int lHandle);
int handle_one_card(int m_lSetCardCfgHandle, char* card_no, void *p);
int get_all_card(int m_lSetCardCfgHandle, void *p);
int set_one_card(int m_lSetCardCfgHandle, char* card_no, int eno, char* name);
int set_call_back_fun(int index);
int setup_alarm(int lUserID);
int close_alarm(int alarm_handle);
void show_sdk_version();
int get_err_code();
char* get_err_msg(int err_code);
}

// 模块初始化与释放资源
int init(int log_level){
    // 初始化 HCNetSDK
    NET_DVR_LOCAL_SDK_PATH sd_path = {0};
    memcpy(sd_path.sPath, "/usr/lib", NET_SDK_MAX_FILE_PATH);
    NET_DVR_SetSDKInitCfg(NET_SDK_INIT_CFG_SDK_PATH, &sd_path);
    //NET_DVR_SetSDKInitCfg(NET_SDK_INIT_CFG_LIBEAY_PATH, "/usr/lib")
    //NET_DVR_SetSDKInitCfg(NET_SDK_INIT_CFG_SSLEAY_PATH, "/usr/lib")
    int init_flag = NET_DVR_Init();
    NET_DVR_SetLogToFile(log_level, "/home/sdkLog");
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
    strcpy(struLoginInfo.sDeviceAddress, ip);
    strcpy(struLoginInfo.sUserName, user_name);
    strcpy(struLoginInfo.sPassword, password);
//    memcpy(struLoginInfo.sDeviceAddress, ip, NET_DVR_DEV_ADDRESS_MAX_LEN);
//    memcpy(struLoginInfo.sUserName, user_name, NAME_LEN);
//    memcpy(struLoginInfo.sPassword, password, NAME_LEN);
    int lUserID = NET_DVR_Login_V40(&struLoginInfo, point);
    return lUserID;
}

int logout(int lUserId){
    int logout_flag = NET_DVR_Logout(lUserId);
    return logout_flag;
}

// 开启远程控制与关闭远程控制
int start_remote_control(int lUserID, int action){
    NET_DVR_CARD_COND cardCond = {0};
    cardCond.dwSize = sizeof(cardCond);
    cardCond.dwCardNum = 1;
    int command = 0;

    if (action==101){
        command = NET_DVR_SET_CARD;
    } else if (action==201){
        command = NET_DVR_GET_CARD;
    } else if (action==202){
        command = NET_DVR_GET_CARD;
        cardCond.dwCardNum = 0xffffffff;
    } else if (action==301){
        command = NET_DVR_DEL_CARD;
    }

    int lHandle = NET_DVR_StartRemoteConfig(lUserID, command, &cardCond, sizeof(cardCond),NULL,NULL);
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
	NET_DVR_CARD_RECORD struCardRecord;
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

// 设置布放回调方法
void CALLBACK post_msg(LONG lCommand, NET_DVR_ALARMER *pAlarmer, char *pAlarmInfo, DWORD dwBufLen, void* pUser){
    printf("lCommand:%d\n", lCommand);
}

// 设置布防
int set_call_back_fun(int index){
    int set_flag = NET_DVR_SetDVRMessageCallBack_V50(index, post_msg, NULL);
    return set_flag;
}

// 启用布防
int setup_alarm(int lUserID){
    NET_DVR_SETUPALARM_PARAM alarm_param = {0};
    alarm_param.dwSize = sizeof(alarm_param);
    alarm_param.byLevel = 0; // 优先级高
    alarm_param.byAlarmInfoType = 1;
    alarm_param.byRetAlarmTypeV40 = 1;
    alarm_param.byDeployType = 1;

    int alarm_handle =  NET_DVR_SetupAlarmChan_V41(lUserID, &alarm_param);
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




