// 1. 각도 구하기
// [1. 예각 2. 둔각 3. 직각 4. 평각]

// const angle = Number(
//   prompt("각도를 입력하면 1. 예각 2. 둔각 3. 직각 4. 평각 표현됨")
// );

// if (angle === 180) {
//   alert("평각");
// } else if (180 > angle && angle > 90) {
//   alert("둔각");
// } else if (angle === 90) {
//   alert("직각");
// } else if (90 > angle && angle > 0) {
//   alert("예각");
// } else {
//   alert("오류");
// }
// 2. 유저에게 비밀번호 설정을 물어보고
// -1) !,@,#,* 중 하나라도 없으면 특수문자를 넣으세요!
// -2) 비밀번호 시작이 IT로 시작안하면 IT로 시작하세요!
// -3) 비밀번호 길이가 6글자 이하이면 6글자 보다 길어야해요!
// 위 설정이 모두 통과되면 비밀번호 설정완료!

const passWord = prompt("비밀번호 설정해주세요");

if (!passWord.includes("!" && "@" && "#" && "*")) {
  alert("특수문자를 넣으세요!");
} else if (!passWord.startsWith("IT")) {
  alert("IT로 시작하세요!");
} else if (passWord.length <= 6) {
  alert("6글자보다 길어야해요!");
} else {
  alert("비밀번호 설정 완료!");
}
