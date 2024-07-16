// const array = [];
// array.push(1); // [1]
// array.push(2); // [1,2]
// array.push(3); // [1,2,3]
// console.log(array);

// 유저에게 커피메뉴 영어로 3번 물어보고
// 배열로 대문자화된 커피메뉴 출력하기

// ex) americano, latte, mint
// [AMERICANO, LATTE, MINT]

const order = [];
const firstCoffee = prompt("첫 번째 커피를 골라요").toUpperCase();
const secondCoffee = prompt("두 번째 커피를 골라요").toUpperCase();
const thirdCoffee = prompt("세 번째 커피를 골라요").toUpperCase();

order.push(firstCoffee);
order.push(secondCoffee);
order.push(thirdCoffee);
console.log(order);
