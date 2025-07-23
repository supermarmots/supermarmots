function solution(A,B){
    let answer = 0;
    A.sort((a, b) =>  a -b);
    B.sort((a, b) => b - a);
    for( let i = 0; i < A.length; i++) {
        answer += A[i] * B[i];
    }
    return answer;
    // 실패 (무한루프)
    //     var answer = 0;

//     for(let i = 0 ; i < A.length; i++) {
//         for(let j = i + 1; j<B.length; j--) {            //계산 식은 맞음
//             answer += A[i]*B[j];
//         }
//     }
//     return answer;
}