// operator[연산자]
// 연산: something을 가공함
// token: +,-,*,/,!,~,`,''
// 사칙 연산: +,-,*,/[나누기]

// 수리 연산[+,-,*,/]
const a = 1 + 2; //3
const a1 = 1 - 2; //-1
const a2 = 1 * 3; //3
const a3 = 3 / 2; //1.5
const a4 = 2 ** 2; //2의 2제곱
const a5 = 3 % 2; // (나머지 연산) 1
// 문자열 연결 연산
const a6 = 10 + "10"; //1010
// 단항 덧셈 연산
const a7 = +"100"; // 숫자 100
// 단항 뺄셈 연산
const a8 = -1; // 부호 반대

// 대입 연산[=, +=, -=, *=,**=,/=,%=]
const b = "joshua";
const b1 = 100;
const b2 = 100 + b1; // 200

//  비교 연산[>,>=,<,<=,==,!=] -> boolean type
const c = 5 > 3; // true
const c1 = 5 >= 6; //false
const c2 = 5 < 6; //true
const c3 = 5 <= 6; // true
const c4 = 5 == 4; //false
const c5 = "아아" != "아메리카노"; // true
const c6 = "1" == 1; // true
const c7 = "1" === 1; // type까지 같니? false
const c8 = 1 === 1; //true

// 논리 연산(집합) [&&,||,!]
//  &&[and] :  하나라도 조건이 틀리면 false
const d = 5 > 3 && 5 > 7; // false
const d1 = true && true && true && true && false; // false
const d2 = false && true && true && true && true; // false

// ||[or] : 하나라도 조건이 맞으면 true
const d3 = 5 > 10 || 5 > 7 || 5 > 3; //true
const d4 = 5 != 1 || 5 > 8 || "아아" !== "아아"; // true !==: 타입 다름

// ![not]: 반대
const d5 = !true; // false
const d6 = !(5 > 3 && 5 > 4); //false
// 드모르간 법칙
const d9 = 5 <= 3 || 5 <= 4; //false
const d10 = !(5 > 3 && 5 > 4);

const d7 = !!""; //
const d8 = !!1; //

// 삼항 연산자
// 조건 ? 참 : 거짓
const e = 5 > 3 ? "장원영" : "안유진";
const e1 = 5 > 7 ? "아이유" : "비비";

// typeof 연산자
const f = typeof 1; // Number
const f1 = typeof !false; // Boolean
