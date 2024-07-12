// 1. 태어난 년도를 prompt 물어보고 만 나이 alert으로 출력하기
const birth = window.prompt("태어난 년도를 입력:");
const age = 2024 - Number(birth);
window.alert(`당신의 만 나이는 ${age}입니다.`);

// 2. 한 변의 길이를 입력 받아 정사각형의 넓이를 출력
const line = window.prompt("한 변의 길이는?");
const size = Number(line) * Number(line);
window.alert(`정사각형의 넓이는 ${size}입니다.`);

// 3. 원화를 입력하면 현재 엔화를 출력하기
const won = window.prompt("원화를 입력하면 환전해줌");
const yen = won / 8.64;
window.alert(`${yen}으로 환전!`);
