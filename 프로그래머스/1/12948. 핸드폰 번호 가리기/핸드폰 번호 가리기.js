function solution(phone_number) {
    let answer = ''
    answer = phone_number.slice(0, -4).replace(/[0-9]/g,'*') + phone_number.slice(-4);
    return answer;
}