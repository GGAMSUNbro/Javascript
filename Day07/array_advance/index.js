const icecream = ["mint", "choco", "banana"];

const upper = (x) => {
  console.log(x.toUpperCase());
};
icecream.forEach(upper);

// (x)=> {console.log(x.toUpperCase()})

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = num.some((x) => {
  return x % 2;
});

// 아이스크림 배열에 알파벳 a가 하나라도 있는지 확인 해주는 코드

const result1 = icecream.some((x) => {
  return x.includes("a");
});

const fruits = [
  "appple",
  "peach",
  "tomato",
  "plum",
  "pear",
  "durian",
  "grape",
  "lemon",
];

// 1. 글자 개수가 4글자 이면서, 알파벳 r을 포함하는 놈 있니
const result2 = fruits.some((x) => {
  return x.length == 4 && x.includes("r");
});

console.log(result2);

// 2. 글자가 홀수이면서, p로 시작하는 단어가 있니?
const result3 = fruits.some((x) => {
  return x.length % 2 && x.startsWith("p");
});
//  const result3 = fruits.some((x) => x.length % 2 && x.startsWith("p");
console.log(result3);

const distance = (x) => x.length == 5;
// return  1줄이면 위와같이 요약 가능

// 3. 모음으로 시작하는 단어가 있니?
// const moum = ["a", "e", "i", "o", "u"];

// const result4 = fruits.some((fruits) => moum.some((x) => fruits.startsWith(x)));
// console.log(result4);

// 4. [k,b,s] 에서 하나라도 포함하는 과일단어가 있니?
// const group = [k, b, s];
// fruits.some((fruit) => group.some((word) => fruit.includes(word)));

// 5. 뉴스기사를 가져오고, 유저가 입력한 단어들 포함되는지 물어보는 코드 만들기!

// -1) 뉴스기사는 변수에 넣고
// -2) prompt로 찾고 싶은 단어들 입력: love trump party
// -3) 해당 단어는 포함합니다. 안합니다.

const newsList =
  "Requested what I think is an important design change to the front, and extra time allows us to show off a few other things.";

const FindWordList = prompt("단어들 입력하면 포함되는지 알림").split(" ");

const result5 = newsList.some((word) => findWordList.some((x) => word === x));

alert(`해당 단어들은 ${result5 ? "포함합니다" : "포함안함"}`);
