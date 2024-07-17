// 코드 치면 위에서 아래로 감
// 제어문[코드 컨트롤] - 조건문

// const num = Number(prompt("숫자 입력"));

// if (num % 2 == 0) {
//   alert(`${num}은 짝수입니다.`);
// }else{
//     alert(`${num}은 홀수입니다.`)
// }

// 숫자 입력받고, 양수인지 아니면 양수가 아닌지
// const num = Number(prompt("숫자 입력"));
// if (num > 0) {
//   alert(`${num}는/은 양수다`);
// } else {
//   alert(`${num}는/은 양수 아님`);
// }

// 마포,강남,신사,압구정,신촌,노원,화곡
// 사는 곳이 어디에요 묻고 위의 동네 중 하나라도 해당되면
//  맞다면 )사는 곳이 서울이군요!
//  아니면 ) 촌사람이군요!

// const lives = prompt("사는 곳이 어딘가요?");

// const region = ["마포", "강남", "신사", "압구정", "신촌", "노원", "화곡"];

// if (region.includes(lives)) {
//   alert("사는 곳이 서울이군요!@");
// } else {
//   alert("촌사람이군!요");
// }

// if (true) {
// } else if (true) {
// } else if (ture) {
// } else {
// }

// 정수를 입력받고, 양의 홀수, 양의 짝수, 0, 음의 홀수, 음의 짝수

// const numInt = Number(prompt("정수를 입력하세요"));

// if (numInt > 0 && numInt % 2 == 1) {
//   alert("양의 홀수");
// } else if (numInt > 0 && numInt % 2 == 0) {
//   alert("양의 짝수");
// } else if (numInt < 0 && numInt % 2 == -1) {
//   alert("음의 홀수");
// } else if (numInt < 0 && numInt % 2 == -0) {
//   alert("음의 짝수");
// } else {
//   alert("00000");
// }

//  영어 점수를 입력 받고, 100이면 만접입니다!
//  90점 이상이면 A입니다.
//  80점 이상이면 B입니다.
//  70점 이상이면 C입니다.
//  그 외 F입니다.

// const score = Number(prompt("영어 점수 입력하세요"));

// const scoreS = score == 100;
// const scoreA = score >= 90;
// const scoreB = score >= 80;
// const scoreC = score >= 70;

// if (scoreS) {
//   alert("만점입니다.");
// } else if (scoreA) {
//   alert("A입니다.");
// } else if (scoreB) {
//   alert("B입니다.");
// } else if (scoreC) {
//   alert("C입니다.");
// } else {
//   alert("F입니다.");
// }

// 1. 각도 물어보고, 평각, 둔각, 예각, 직각을 알려주는 프로그램 만들기
// 예각은 0 보다 크고90보다 작음
// 직각은 90도
// 둔각 90보다 크고 180
// 평각 180도

const angle = Number(prompt("각도를 입력하면 정의함"));

acuteAngle = 0 < angle < 90;
rightAngle = angle == 90;
obtuseAngle = 90 < angle < 180;
straightAngle = angle == 180;

if (acuteAngle) {
  alert("예각입니다.");
} else if (rightAngle) {
  alert("직각입니다.");
} else if (obtuseAngle) {
  alert("둔각입니다.");
} else if (straightAngle) {
  alert("평각입니다.");
} else {
  alert("정의되지 않음");
}

// 2. 키와 몸무게를 물어보고, [몸무게/ 키(m)의 제곱] BMI를 한 결과
//  25를 넘으면 비만, 25~23이면 과체중, 18.5~23 정상, 18.5 저체중을 알려주는 프로그램

const height = Number(prompt("키를 알려주세요"));
const weight = Number(prompt("몸무게를 알려주세요"));

const bmi = weight / height ** 2;

const obesityWeight = bmi > 25;
const overWeight = 23 < bmi < 25;
const normalWeight = 18.5 < bmi < 23;
const lowWeight = bmi < 18.5;

if (obesityWeight) {
  alert("비만입니다.");
} else if (overWeight) {
  alert("과체중입니다.");
} else if (normalWeight) {
  alert("정상입니다.");
} else if (lowWeight) {
  alert("저체중입니다.");
} else {
  alert("측정 불가!!!!!!!!");
}
