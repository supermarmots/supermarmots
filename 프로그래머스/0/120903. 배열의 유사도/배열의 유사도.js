function solution(s1, s2) {
    return s1.filter(eq => s2.includes(eq)).length;
}