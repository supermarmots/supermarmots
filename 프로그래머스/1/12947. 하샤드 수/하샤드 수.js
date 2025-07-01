function solution(x) {
    let h = String(x).split("").reduce((acc, cur) => acc + Number(cur),0);
    return x % h === 0;
}