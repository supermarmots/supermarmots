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
    let arr = prompt("문자열 입력");

    for(let i=0; i < arr.length; i++) {
        if (arr[0]===arr[i]){
            alert("앞뒤가 똑같네");
        }
    }
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