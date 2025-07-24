function solution(common) {
    let comp1 = common[1] - common[0]
    let comp2 = common[2] - common[1]
    
    return comp1 === comp2 ? common.at(-1) + comp1 : common.at(-1) * (common[1]/common[0])
}