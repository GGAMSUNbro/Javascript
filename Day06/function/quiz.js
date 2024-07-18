// 영화를 구매하는 함수
// prompt로 ["범죄도시","인사이드아웃","핸섬가이즈"]
//  10000,11000,12000 돌려주는 함수

// const buyTicket = () => {
//   const movie = prompt("영화 고르세요. [범죄도시, 인사이드아웃, 핸섬가이즈]");
//   const price = {
//     범죄도시: 10000,
//     인사이드아웃: 11000,
//     핸섬가이즈: 12000,
//   };
//   return price(movie);
// };

// console.log(buyTicket());
// 팜콘을 구매하는 함수
// 음료를 구매하는 함수

// 1. 두 수를 주어졌을 때, 큰 수를 돌려주는 함수!
const bigger = (x, y) => {
  return x > y ? x : y;
};

// 2. 어떠한 단어를 주어졌을 때, 대문자면 소문자로 , 소문자면 대문자로
const change = (x) => {
  return x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase();
};

// 3. 어떠한 단어와 숫자 주어졌을 때, 단어의 숫자보다 낮은 길이만큼 돌려주기
// banana , 4 -> bana, luckybiki , 5 -> lucky

const sliceWord = (x, y) => {
  return x.slice(0, y);
};

// 4. 집퀴
// 매개변수 3개를 받고, 배열 형태로 돌려주는 함수

const changeArray = (x, y, z) => {
  return [x, y, z];
};
console.log(changeArray(1, 2, 3));
