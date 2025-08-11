function solution(n, m) {
    let greatest = (a, b) => {
        if (b === 0) return a
        return greatest(b, a%b) 
    } // 최대공약수
    let least = (a,b) => (a*b) / greatest(a,b) // 최소공배수
    return [greatest(n, m), least(n, m)]
}