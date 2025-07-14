function solution(data, col, row_begin, row_end) {
    return data
        .sort((a, b) => a[col - 1] === b[col - 1]
            ? b[0] - a[0]
            : a[col - 1] - b[col - 1]
        )
        .slice(row_begin - 1, row_end)
        .map((row, index) => row.reduce((acc, v) => acc + v % (index + row_begin), 0))
        .reduce((acc, si) => acc ^ si);
    // let answer = 0;
    // // col번째 컬럼의 값을 기준으로 오름차순 정렬
    // const sort_data = data.sort((a, b) => {
    //     if(a[col-1] > b[col-1]) {
    //         return a[col - 1] - b[col - 1];
    //         // 동일하면 첫 번째 컬럼 기준 내림차순 정렬
    //     } else if (a[col - 1] === b[col - 1]) {
    //         return b[0] - a[0];
    //     } else {
    //         return -1;
    //     }
    // });
    // // i 번째 행의 튜플에 대해 각 컬럼의 값을 i 로 나눈 나머지들의 합으로 정의
    // for (let i = row_begin; i <= row_end; i++) {
    //     const temp = sort_data[i - 1].reduce((acc, cur) => acc + (cur % i), 0);
    //     // ^ xor 연산자, 정답 변수에 결과값 저장
    //     answer ^= temp;
    // }
    // return answer;
}