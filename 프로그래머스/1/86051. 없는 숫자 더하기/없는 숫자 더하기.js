function solution(numbers) {
    let j = 0;
    for (let i = 1; i <=9; i++) {
        if(!numbers.includes(i)) {
            j += i;
        }
    }
    return j;
}