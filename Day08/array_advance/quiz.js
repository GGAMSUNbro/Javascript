const products = [
  { name: "apple", price: 200 },
  { name: "banana", price: 300 },
  { name: "peach", price: 350 },
];

const a = products.map((x) => {
  x.priceWithTax = x.price * 1.1;
  return x;
});

console.log(a);

const starbucks = [
  { name: "아메리카노", price: 4500, kcal: 1 },
  { name: "카페 라떼", price: 5500, kcal: 180 },
  { name: "카페 모카", price: 6000, kcal: 290 },
  { name: "프라푸치노", price: 6000, kcal: 145 },
  { name: "자바 칩 프라푸치노", price: 5500, kcal: 340 },
];

// 프라푸치노 또는 라떼가 포함되면 hasMilk 여부 항목에 True를 넣어주세요

const b = starbucks.map((x) => {
  x.hasMilk = x.name.includes("프라푸치노") || x.name.includes("라떼");
  return x;
});

console.log(b);
