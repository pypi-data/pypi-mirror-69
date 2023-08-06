#include <curl/curl.h>
#include <curl/easy.h>

#ifdef __cplusplus
extern "C"
{
#endif
int send_post(char *full_url,char *json_data);
#ifdef __cplusplus
}
#endif

//模仿post请求，传入端口用于拼接url，调用php接口时使用（需要传递的参数按格式拼接好后，调用curl_easy_setopt(pCurl, CURLOPT_POSTFIELDS, json_data)设置即可）
//返回接口调用状态，即php-api函数的执行情况//0-已备案，请求执行成功；1-未备案，请求执行失败
//传入参数：服务器ip  通信端口  相对路径uri  需要传输的参数（以按照格式拼接完成）
int send_post(char *full_url,char *json_data){
    CURLcode res = curl_global_init(CURL_GLOBAL_ALL);
    if(res != CURLE_OK)
    {
        printf("curl init failed\n");
        return -1;
    }

    CURL *pCurl = NULL;
    pCurl = curl_easy_init();

    if( NULL == pCurl)
    {
        printf("Init CURL failed...\n");
        curl_global_cleanup();
        return -1;
    }

    //请求的url地址
    curl_easy_setopt(pCurl, CURLOPT_URL, full_url); //需要获取的URL地址
    //post方式发送请求不设置的话默认使用get方法发送请求
    curl_easy_setopt(pCurl, CURLOPT_POST, 1);
    //post请求参数设置，get方法的参数可以在url中体现，post的参数必须在此处设置，参数格式如下"name=daniel&project=curl"
    curl_easy_setopt(pCurl, CURLOPT_POSTFIELDS, json_data);
    // https请求 不验证证书和hosts
    curl_easy_setopt(pCurl, CURLOPT_SSL_VERIFYPEER, 0);
    curl_easy_setopt(pCurl, CURLOPT_SSL_VERIFYHOST, 0);
    //请求超时时长（秒）
    curl_easy_setopt(pCurl, CURLOPT_TIMEOUT, 3L);
    //设置连接超时时长（秒）
    curl_easy_setopt(pCurl, CURLOPT_CONNECTTIMEOUT, 10L);
    //允许URL地址的重定向
    curl_easy_setopt(pCurl, CURLOPT_FOLLOWLOCATION, 1L);//允许重定向
    //告诉libcurl在输出请求体时包含头部信息
    curl_easy_setopt(pCurl, CURLOPT_HEADER, 0L);
    //关闭中断信号响应，如果是多线程，请将该参数置为1。这个选项用于unix环境下的多线程应用仍然可以使用各种timeout选项，而不会引发信号中断致使程序退出。
    curl_easy_setopt(pCurl, CURLOPT_NOSIGNAL, 1L);

    struct curl_slist *pList = NULL;
    /* 缺省的头信息 */
    pList = curl_slist_append(pList,"User-Agent:Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12");
    pList = curl_slist_append(pList,"Accept:text/html,application/xhtml+xml,application/xml,application/json;q=0.9,*/*;q=0.8");
    pList = curl_slist_append(pList,"Accept-language: zh-cn,zh;q=0.5");
    pList = curl_slist_append(pList,"Content-Type: application/json");
    pList = curl_slist_append(pList,"Accept-Charset: utf-8;q=0.7,*;q=0.7");
    //使用模拟的header头设置HTTP请求的头信息
    curl_easy_setopt(pCurl, CURLOPT_HTTPHEADER, pList);

    //用于执行CURL对象，是一个阻塞类型的操作
    res = curl_easy_perform(pCurl);  //执行post请求
    if( res != CURLE_OK ){ //curl_easy_perform执行失败
    	printf("curl_easy_perform error,err_msg:[%d]\n",res);
    }

    int ret_flag=-1;
    long res_code=-1;
    res=curl_easy_getinfo(pCurl, CURLINFO_RESPONSE_CODE, &res_code); // 获取返回码
    //正确响应后，请求转写成本地文件的文件
    if( res == CURLE_OK && res_code == 200){
        ret_flag = 1;
    }

    curl_slist_free_all(pList);
    curl_easy_cleanup(pCurl);
    curl_global_cleanup();
    return ret_flag;
}
