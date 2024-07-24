// String -> Array
const a = "coffee".split("");
const b = [..."coffee"];

// "abCdeFGHiJklm" -> 소문자만 있는 배열로 바꿈셈

//  "abCdeFGHiJklm"
// const arrWord = [...word]

// "abCdeFGHiJklm" -> ["A","B,"c",D...]
[..."abCdeFGHiJklm"].map((x) =>
  x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()
);
// 2. ...배열은 찢다.
const fruits = ["tomato", "mango", "melon", "apple"];

const a0 = fruits;
const [a1, b1] = fruits;
const [a2, ...rest] = fruits;
console.log(rest[2]);
