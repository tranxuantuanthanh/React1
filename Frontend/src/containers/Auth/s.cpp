#include <std.io>
#include <string.h>
int toHop(int n, int k){
    if(k>n|| k < 0 || n <=0){
        return -1;
    }
    int n1 = 1;
    int k1 = 1;
    int nk = 1;
    for(i = n; i > 1; i--){
        n1*=i;
        if(i <= k){
            k1*=i;
        }
        if(i <= n-k){   
            nk*=i;
        }
    }
    return n1/(k1*nk);
}
int main(){
    // int k;
    // int n;
    // do{
    //     printf("nhap k: "); scanf("%d", k);
    // }while(k<0);
    // do{
    //     printf("nhap n: "); scanf("%d", n);
    // }while(n<k);
    int tohop = toHop(10,3);
    printf("%d", toHop);
    return 0;
}