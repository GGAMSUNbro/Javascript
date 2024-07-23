const arr = [1, 2, 3, 4, 5];

// map: 새롭게 바꿀게!
arr.map(() => 1);
arr.map((x) => x % 2);

// 홀수면 "🍔" 짝수면"🍤"
const a = arr.map((x) => (x % 2 == 1 ? "🍔" : "🍤"));
console.log(a);

const menu = ["toast", "sandwich", "taco", "pizza", "ramen", "cookie"];
// t로 시작하면 문자의 길이로 바꾸고, 아니면 대문자로 바꾸기

const b = menu.map((x) => (x.startsWith("t") ? x.length : x.toUpperCase()));
console.log(b);

// 첫번째 글자와 마지막 글자가 같다면 '🥚' 아니면 대문자
const c = menu.map((x) => (x[0] == x[x.length - 1] ? "🥚" : x.toUpperCase()));
console.log(c);

// filter: 걸러주기!
const arr1 = [1, 2, 3, 4, 5];

// return true 이면 남고 false 이면 사라짐
arr1.filter((x) => x < 3); // 3 미만만 남기기
arr1.filter((x) => x % 2 == 1); // 홀수만 남기기

const arr2 = [5, 3, 67, 12, 33, 6, 8, 1];
arr2.sort((x, y) => x - y); // 오름차순
