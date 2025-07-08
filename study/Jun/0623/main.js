// alert("Hello World!");
// console.log("Hello World!");
// document.write("<h1>Document Write</h1>");
    
// let name = prompt("당신의 이름은?");
// alert("안녕하세요, " + name + "님!");2001

// let currentYear = 2025;
// let birthYear = prompt("태어난 해를 입력하세요");
// let age = currentYear - birthYear + 1 ;
// alert("당신의 나이는 " + age + "세입니다.");

// let name = "철수";
// let age = 18;
// let isStudent = true;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isStudent);

// let price = 10000;
// let rate = 0.2;
// let discount = price * rate ;

// let finalprice = price - discount ;
// console.log ("할인된 가격은 " + finalprice + "원입니다.");

// let name = "영희";
// console.log(`안녕하세요, ${name}님!`);

// let a = 10;
// a += 5;
// a -= 3;
// a *= 2;
// a /= 4;
// console.log (`최종값은 ${a}입니다.`);

function prompttest()  {
    // 1. 이름과 나이를 입력받아 인사말 출력하기

    let name = prompt('이름을 입력하세요.');
    let age = prompt('나이를 입력하세요');

    console.log("이름: " + name + " 나이: " + age);

    // 2. 두 수를 입력받아 사칙연산 결과를 각각 출력하기

    let a = prompt("첫번째 숫자");
    let b = prompt("두번째 숫자");

    console.log("a+b= " + (a+b) );
    console.log("a-b= " + (a-b) );
    console.log("a*b= " + (a*b) );
    console.log("a/b= " + (a/b) );

    // 3. == vs === 비교 실험하기

    console.log( 1 == "1");
    console.log (1 === 1);
}

function third() {
    // 실습: 3의 배수 검사기
    let num = prompt("숫자를 입려하세요.");
    if (num % 3 === 0) {
        alert ("3의 배수 입니다.");
    } else {
        alert("3의 배수가 아니잖아.");
    }
}


function switchtest() {
    let day = prompt("요일을 입력하세요.");

    switch (day) {
        case "월요일": 
            alert("한 주의 시작!");
            break;
        case "금요일":
            alert("불타는 금요일!");
            break;
        default:
            alert("평범한 하루네요.");
    }
}

function begintest() {  //기초 실습
    let a = 5;
    let b = 3;
    console.log(a+b);

    let name = "윤찬우";
    let age = 20;
    console.log(name +"님은" + age + "살입니다.");

    let side = 4;

    console.log("정사각형 넓이: " + (side * side));
}

function conditional() {    //조건문 실습
    let number = 7;
    if (number % 2 == 0) {
        console.log("짝수입니다.");
    } else {
        console.log("홀수입니다.");
    }

    let age = 16;
    
    if (age > 19) {
        console.log("성인입니다.");
    } else {
        console.log("미성년자입니다.");
    }

    let password = "1234" 
    let input = "1234"
    if (password === input) {
        console.log("로그인 성공");
    } else {
        console.log("로그인 실패");
    }
}


