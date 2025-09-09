function solution(n)
{
    var ans = 0;
    
    while(n !== 0) {
        if(n % 2 === 1) {
            ans++;
            n -= 1; //점프
        } else {
            n /= 2; // 순간이동
        }
    }

    return ans;
}