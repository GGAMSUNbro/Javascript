//  기본: 문자열, 숫자, 불리언, null, undefined
// 참조: 배열,

//  15명의 나이 변수 담기
const age = [18, 21, 5, 55, 23, 33];
console.log(age);
console.log(age[0]); // 18
console.log(age[3]); // 5

const food = ["짜장면", "떡볶이", "마라탕", "우동", "삼계탕"];
console.log(`오늘은 복날이니 ${food[4]}`);

const paik = [
  ["아메리카노", "라떼", "바닐라라떼"],
  ["미숫가루", "빽스치노", "레몬에이드"],
];
console.log(`나는 ${paik[0][1]}와 ${paik[1][2]} 마실래`);

const coffee = ["메가리카노", "꿀아메리카노", "카라멜 마끼야토"];
const beverage = ["아이스티", "자몽에이드", "체리콕"];
const dessert = ["쿠키", "마카롱", "케이크"];

const megacoffee = [coffee, beverage, dessert];
