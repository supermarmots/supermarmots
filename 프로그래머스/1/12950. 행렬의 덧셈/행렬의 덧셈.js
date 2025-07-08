function solution(arr1, arr2) {
    return arr1.map((a,i) => a.map((b,j) => b + arr2[i][j]))
    
    // var answer = [[]];
    // for(let i = 0; i < arr1.length; i++) {
    //     answer[i] = [];
    //     for(let j = 0; j < arr2.length; j++) {
    //         answer[i].push(arr1[i][j] + arr2[i][j]);
    //     }
    // }
    // return answer;
}