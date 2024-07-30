// 1. 컨테이너 새로 만들어서 넣기
// document.createElement("div")
// 2. 저 만들어진 컨테이너를 가져와서 넣기
// document.querySelector(".container");

// const colors = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e"];

// colors.forEach((x) => {
//   const div = document.createElement("div");
//   div.className = "box";
//   div.style.backgroundColor = x;
//   container.appendChild(div);
// });

// Quiz 200개
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
hexNumber = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
// const container = document.querySelector(".container")
// const hexcode = Array(6)
//   .fill()
//   .map((x) => x == "#" + hexNumber.indexof(getRandomInt(0, 16)))
//   .join();

// const hexcodeZip = Array(200).fill(hexcode);

// hexcodeZip.forEach((x) => {
//   const box = document.createElement("div");
//   box.style.width = "100px";
//   box.style.height = "100px";
//   box.style.backgroundColor = x;
//   container.appendChild(box);
// });

// document.body.appendChild(container);

const container = document.querySelector(".container");
const hex = [..."abcdef0123456789"];
const makeColor = () =>
  "#" +
  Array(6)
    .fill()
    .map((v) => hex[getRandomInt(0, hex.length)])
    .join("");

const colors = Array(200)
  .fill()
  .map((v) => makeColor());

colors.forEach((v) => {
  const div = document.createElement("div");
  div.className = "box";
  div.style.backgroundColor = v;
  container.appendChild(div);
});
