function solution(money, ) {
    let count = Math.floor(money / 5500, 1) 
    let arr = [count, money - 5500*count]
    return arr
}