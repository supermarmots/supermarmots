// 1. 계단 모양 별 출력
function printStair (n) {
    for(let i = 0; i < n; i++){
        console.log("*".padStart(i+1));
    }
}
// printStair(4);

// 2. 마름모 만들기 (대칭)
function printDiamond(n) {
  for (let i = 1; i <= n; i++) {
    const stars = '*'.repeat(2 * i - 1);
    console.log(stars.padStart(n + i - 1));
  }
  for (let i = n - 1; i >= 1; i--) {
    const stars = '*'.repeat(2 * i - 1);
    console.log(stars.padStart(n + i - 1));
  }
}
printDiamond(3);

// 3. 가운데 비워진 다이아몬드
function printHollowDiamond(n) {
  const drawLine = (i) => {
    const spaces = ' '.repeat(n - i);
    if (i === 1) return spaces + '*';
    const inside = ' '.repeat(2 * i - 3);
    return spaces + '*' + inside + '*';
  };

  for (let i = 1; i <= n; i++) {
    console.log(drawLine(i));
  }
  for (let i = n - 1; i >= 1; i--) {
    console.log(drawLine(i));
  }
}
// printHollowDiamond(3);

// 4. 피라미드 숫자 출력
function printNumberPyramid(n) {
  for (let i = 1; i <= n; i++) {
    const left = Array.from({ length: i }, (_, k) => k + 1).join('');
    const right = Array.from({ length: i - 1 }, (_, k) => i - k - 1).join('');
    console.log((left + right).padStart(n + i - 1));
  }
}

// printNumberPyramid(4);