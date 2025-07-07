function solution(s) {
    var regex = /^\d{6}$|^\d{4}$/;

  return regex.test(s);
    
    // 테스트케이스 실패 내 풀이
   //  let arr = s.split("").sort().join("");
   // if(s.includes(`[a-zA-Z]`))
   //     return false
   //  else 
   //      return (arr.length === 4&&6)? s % 1 === 0 : true
}