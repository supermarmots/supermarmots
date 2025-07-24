function solution(s) {
    var answer = '';
    let arr = s.split(' ')
    
    let camel = arr.map(x=> x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());
    answer = camel.join(' ')
    return answer;
}