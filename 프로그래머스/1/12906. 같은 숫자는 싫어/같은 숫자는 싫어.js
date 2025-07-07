function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
    // 테스트 1 실패 2 성공
    // return arr.reduce((acc, cur) => {
    //     if(acc.includes(cur)) {
    //         return acc
    //     } else {
    //         return [...acc, cur]
    //     }
    // }, [])
}