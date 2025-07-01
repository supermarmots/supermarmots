function solution(n) {
    let newN = n + "";
    const newArr = newN
    .split("").sort().reverse().join("");
    
    return +newArr
}