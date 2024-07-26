// reduce: 누적시키다

// accumulation: 누적
// current :원래 x
// 0: 스타트 값
// [1, 2, 3, 4].reduce((acc, cur) => {
//   console.log({ acc, cur });
//   return acc + cur;
// }, 0);

// [0~100]까지의 합을 나타내시오
const result = Array(101)
  .fill("")
  .map((v, i) => i)
  .reduce((acc, cur) => {
    console.log({ acc, cur });
    return acc + cur;
  }, 0);

console.log(result);

// const a = [..."hello"].join();
// const b = [..."hello"].join("");

// ["AAA","BBB","CCC","DDD"] => ["aaa","bbb","ccc","ddd"]
// const alpabet = ["AAA", "BBB", "CCC", "DDD"];

// "abstract algebra" -> "AbstrAct AlgebrA"
const word = "abstract algebra";

const result1 = [...word]
  .map((x) =>
    [..."aA"].some((x) => x === x) ? x.toUpperCase() : x.toLowerCase()
  )
  .reduce((a, c) => {
    console.log({ a, c });
    return a + c;
  }, 0);

console.log(result1);
