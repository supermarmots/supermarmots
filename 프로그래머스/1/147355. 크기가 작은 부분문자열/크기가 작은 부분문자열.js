function solution(t, p) {
    var answer = 0;
    for(let i = 0; i<= t.length - p.length; i++) {
        let min = t.substr(i, p.length);
        if(Number(min) <= Number(p))
            answer ++
    }
    return answer;
}