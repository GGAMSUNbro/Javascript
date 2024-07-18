// 함수 f(x) - function

// 함수 정의
// function icecream(x) {
//   console.log(`${x}맛 아이스크림 꿀맛!`);
// }

// 함수 실행
// icecream("빨간");
// icecream("녹차");
// icecream("초코");

//  x 를 넣으면 홀수 짝수인지 콘솔로 알려주는 함수

function oddEvenGame(x) {
  if (x % 2 == 0) {
    alert("짝수입니다.");
  } else {
    alert("홀수입니다.");
  }
}
// oddEvenGame(1526161);

function makeDouble(x) {
  //  return 함수의 결과를 돌려주는 키워드
  return x * 2;
}

const a = makeDouble(10);
console.log(a);

// x를 입력하면 안녕하세요! ~~님! 을 돌려주는 함수

// function hello(x) {
//   return `안녕하세요! ${x || "Guest"}님!`;
// }

// const b = hello("성민");

// console.log(b);

function minus(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function square(x, y) {
  return x ** y;
}

const c = minus(30, 2);
const d = multiply(30, 2);
const e = square(30, 2);

console.log(c);
console.log(d);
console.log(e);
