// 유저에게 숫자 6개 물어보고,

// 그 숫자 중 0~3개 꽝, 4개 3등, 5개 2등, 6개 1등

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

// const richMansPath = prompt("로또 6개의 숫자를 입력하세요(띄어쓰기)");

lottoNumber = Array(6)
  .fill()
  .map((x) => getRandomInt(1, 46));
const answer = [...prompt("숫자 6개 입력").split(" ")].map((v) => Number(v));
const not = answer.filter((x) => lottoNumber.some((v) => v == x));

const prize = {
  0: "1등",
  1: "2등",
  2: "3등",
};

console.log(`${prize[not.length] || "꽝"} 입니다.`);
// inputNumber = richMansPath.split("");

// console.log(inputNumber.filter((v) => lottoNumber.includes(v)));

// if (length(inputNumber.filter((v) => lottoNumber.includes(v))) == 4) {
//   console.log("3등");
// } else if (length(inputNumber.filter((v) => lottoNumber.includes(v))) == 5) {
//   console.log("2등");
// } else if (length(inputNumber.filter((v) => lottoNumber.includes(v))) == 6) {
//   console.log("1등");
// } else {
//   console.log("꽝");
// }
