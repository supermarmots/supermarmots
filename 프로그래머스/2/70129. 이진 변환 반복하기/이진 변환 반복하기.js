function solution(s) {
    let round = 0; // 총 변환 횟수
    let deleteCount = 0; // 제거된 0의 총 개수

    while (s !== "1") {
        let originalLength = s.length; // 0 제거 전 길이
        
        // 1. 모든 0을 제거합니다.
        s = s.replace(/0/g, ''); 
        
        // 2. 제거된 0의 개수를 셉니다.
        deleteCount += (originalLength - s.length); 
        
        // 3. 남은 길이(0이 없는 길이)를 2진수로 변환합니다.
        s = s.length.toString(2);
        
        // 4. 변환 횟수를 1 증가시킵니다.
        round++;
    }

    return [round, deleteCount];
}