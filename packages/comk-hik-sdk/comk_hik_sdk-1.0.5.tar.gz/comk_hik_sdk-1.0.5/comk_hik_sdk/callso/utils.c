#include <stdlib.h>

#ifdef __cplusplus
extern "C"
{
#endif
int get_first_n(int num);
#ifdef __cplusplus
}
#endif

int get_first_n(int num){
    int n = abs(num);
    while (n >= 10) {
        n = (n - (n % 10)) / 10;
    }
    return n;
}