// 기본 타입: Number, String, Boolean, Undefined, Null
// 참조 타입: Object -> {}, Array -> [], math
const book = Object();

const cookies = Array(10).fill("🍕");
const arr = Array(10)
  .fill("")
  .map((x) => !!x); // [false,false,false,false,false,false,]

// [0,1,2,3,4,5,6...1000]
const hundred = Array(1001)
  .fill(0)
  .map((x, i) => i);
console.log(hundred);

// [0,1000] -> 홀수는 그대로 나오고, 짝수는 🍕
const thousand = Array(1001)
  .fill("0")
  .map((x, i) => (i % 2 ? "🍕" : i));

console.log(thousand);

// 3 6 9 -> [1,1000] -> '👏'

const kungkungdda = Array(1001)
  .fill("")
  .map((v, i) => String(i + 1))
  .map((v) =>
    v.includes("3") || v.includes("6") || v.includes("9") ? "👏" : v
  )
  .map((v) => (v == "👏" ? "👏" : Number(v)));

console.log(kungkungdda);
