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

// ģ���ʼ�����ͷ���Դ
int init(int log_level){
    // ��ʼ�� HCNetSDK
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
    // �ͷ���Դ������sdk��Ӧ���ͷ���Դ����Ӧinit����init�����������ͱ���ִ�� clean
    int clean_flag = NET_DVR_Cleanup();
    return clean_flag;
}

// ��¼�豸��ǳ��豸
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

// ����Զ�̿�����ر�Զ�̿���
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

// ʵ�ʹ���

// ��ȡ��ɾ����
int handle_one_card(int m_lSetCardCfgHandle, char* card_no, void *p){
	// ������һ���Ĳ���ָ���ɶԸÿ��ŵĻ�ȡ��ɾ��
	NET_DVR_CARD_SEND_DATA struCardNo;
	struCardNo.dwSize = sizeof(struCardNo);
    strncpy((char *)struCardNo.byCardNo, card_no, ACS_CARD_NO_LEN);//����
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
// ��ȡ���п�
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

//�·�һ�ſ�
int set_one_card(int m_lSetCardCfgHandle, char* card_no, int eno, char* name){
    NET_DVR_CARD_RECORD struCardRecord = {};
    struCardRecord.dwSize = sizeof(struCardRecord);
    struCardRecord.byCardType = 1;//��ͨ��
    struCardRecord.byLeaderCard = 0; //�Ƿ�Ϊ�׿���0-��1-��
    struCardRecord.byUserType = 0;
    struCardRecord.byDoorRight[0] = 1; //��1��Ȩ��
    struCardRecord.wCardRightPlan[0] = 1;//���ƻ�ģ��1��Ч

    strncpy((char *)struCardRecord.byCardNo, card_no, ACS_CARD_NO_LEN);//����
    struCardRecord.dwEmployeeNo = eno; //����
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

// ���ò��Żص�����
void CALLBACK post_msg(LONG lCommand, NET_DVR_ALARMER *pAlarmer, char *pAlarmInfo, DWORD dwBufLen, void* pUser){
    printf("lCommand:%d\n", lCommand);
}

// ���ò���
int set_call_back_fun(int index){
    int set_flag = NET_DVR_SetDVRMessageCallBack_V50(index, post_msg, NULL);
    return set_flag;
}

// ���ò���
int setup_alarm(int lUserID){
    NET_DVR_SETUPALARM_PARAM alarm_param = {0};
    alarm_param.dwSize = sizeof(alarm_param);
    alarm_param.byLevel = 0; // ���ȼ���
    alarm_param.byAlarmInfoType = 1;
    alarm_param.byRetAlarmTypeV40 = 1;
    alarm_param.byDeployType = 1;

    int alarm_handle =  NET_DVR_SetupAlarmChan_V41(lUserID, &alarm_param);
    return alarm_handle;
}


// ��������
int close_alarm(int alarm_handle){
    int close_flag = NET_DVR_CloseAlarmChan_V30(alarm_handle);
    return close_flag;
}


// ��������
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




