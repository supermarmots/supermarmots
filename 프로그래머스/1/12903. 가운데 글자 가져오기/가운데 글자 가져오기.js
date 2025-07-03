function solution(s) {
    let mid = Math.floor(s.length / 2)
    for(let i = 0; i < s.length; i++) {
        if(s.length % 2 == 0) {
            return s.slice(mid - 1, mid + 1)
        } else {
            return s.slice(mid, mid + 1)
        }
    }
}