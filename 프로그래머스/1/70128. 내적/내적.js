function solution(a, b) {

    return a.reduce((acc, cur, idx) => acc + cur * b[idx], 0);
    // 성공
    // let sum = 0;
    // for (let i = 0; i < a.length; i++) {
    //     sum += a[i] * b[i] 
    // }
    // return sum
    // 실패
    // let answer = 0;
    // for(let i = 0; i < a.length; i++) {
    //     for(let j = 0;  j< b.length; j++) {
    //         answer += a[i] * b[j]
    //     }
    // }
    // return answer;
}