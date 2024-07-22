// 1. 두 매개변수를 받고 큰 수를 돌려주는 화살표 함수 만들기
const firstNumber = prompt("첫 매개변수 입력:");
const secondNumber = prompt("두 번째 매개변수 입력:");

const bigger = (x, y) => {
  return x > y ? x : y;
};
console.log(`${bigger(firstNumber, secondNumber)}`);

// 2. 하나의 매개변수를 받고 홀수 or 짝수 알려주는 함수
const num1 = prompt("숫자 입력!");

const oddEven = (x) => {
  return x % 2 == 1 ? "홀수" : "짝수";
};

alert(`${oddEven(num1)}`);

// 3. 하나의 매개변수를 받고 홀수이면 제곱해서 돌려주고, 짝수이면 두배해서 돌려주기
const num2 = prompt("숫자 입력!");
const gamble = (x) => {
  return x % 2 == 1 ? x ** 2 : x * 2;
};

alert(`${gamble(num2)}`);

// 4. 하나의 매개변수를 받고 문자의 길이가 6글자 보다 크면 🤦‍♂️🤦돌려주기, 아니면 👌 돌려주기
const num3 = prompt("숫자 입력!");

const long = (x) => {
  return x.length > 6 ? "🤦‍♂️" : "👌";
};

alert(`${long(num3)}`);
