function sol1() {
    for(let i=0; i<100; i++)
    {
        if(i % 3 == 0 && i % 5 == 0 ) {
            console.log(i);
        }
    }
}
map()

function sol2() {
    const input = prompt("문자열을 입력하세요:");
    const reversed = input.split('').reverse().join('');
    alert(input === reversed ? "회문입니다." : "회문이 아닙니다.");
}


function sol3() {
    let num = Number(prompt("숫자 입력"));
    let res = 0;
    for(let i=1; i <= num; i++) {
        res += i;
    }
    console.log("1부터 10까지의 합: " + res);
}


function sol4() {
    const arr = [1, 2, 3, 4, 5, 6];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
    }
}

function sol5() {
    const max = Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    const min = Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

    console.log("Max: " + max);
    console.log("Min: " + min);
}

function sol6() {
    const str = prompt("문자열을 입력하세요:");
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const count = str.toLowerCase().split('').filter(char => vowels.includes(char)).length;
    console.log("모음 개수:", count);
}

function sol7() {
    for (let i = 2; i<10; i++) {
        console.log(`${i}단`);
        for ( let j = 1; j < 10; j++) {
             console.log(`${i} * ${j} = ${i * j}\n`);
        }
    }
}

function sol8() {
    let arr = [1, 2, 3, 4, 5]
    let sum = 0;
    for(let i=0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log("배열의 합: "+ sum );
}

function sol9() {
    const hello = "hello";
    rev = hello.split("").reverse().join("");
    console.log(rev);   
}

function sol10() {
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
