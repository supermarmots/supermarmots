function solution(k, tangerine) {
    let res = 0;
    const tDict = {};
    
    // 중복 개수
    tangerine.forEach((t) => (tDict[t] = (tDict[t] || 0) + 1));
    
    // 내림차순 정렬
    const tArr = Object.values(tDict).sort((a, b) => b - a);
    
    // 필요 귤만큼 가짓수 더하기
    for (const t of tArr) {
        res++;
        if(k > t) k -=t;
        else break;
    }
    return res;
}