// 1. 밑변과 높이를 입력받고, 정삼각형 넓이 alert으로 출력
// const belowSide = Number(window.prompt("밑변을 입력:"));
// const heightSide = Number(window.prompt("윗변을 입력:"));

// window.alert(`${(belowSide * heightSide) / 2}`);
// 2. 정수 입력하고 양수 입력하면, 양수! 아니면 0 또는 음수 출력
// const num = window.prompt("정수를 입력하세요");

// const result = num > 0 ? "양수!" : "0 또는 음수";

// window.alert(`입력한 수는 ${result}`);
// 3. 10000~99999 중 아무 숫자 입력하면 만천백십 붙혀서 출력
// ex) 12345 > 1만2천 3백 4십 5
// ex) 23232 > 2만3천2백3십2

// const num1 = window.prompt("10000~99999 중 아무 숫자 입력");

// const tenthousand = parseInt(num1 / 10000);
// const thousand = parseInt((num1 % 10000) / 1000);
// const hundred = parseInt((num1 % 1000) / 100);
// const ten = parseInt((num1 % 100) / 10);
// const one = parseInt(num1 % 10);

// window.alert(`위 수는 ${tenthousand}만${thousand}천${hundred}백${ten}십${one}`);

// 정수 10000~99999 입력 받고, 100의 자리만 출력하기!
//  ex) 12735 > 700, 74636 > 600

const num2 = window.prompt(
  "정수 10000~99999 입력 받고, 100의 자리만 출력하기!"
);

const hundreds = parseInt((num2 % 1000) / 100);
window.alert(`100의 자리 숫자는 ${hundreds * 100}`);
