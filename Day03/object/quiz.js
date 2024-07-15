// 유저에게 책 제목, 책 가격, 책 출판사를 물어보고
// 책을 콘솔로 오브젝트 타입으로 출력하기!

// const title = window.prompt("책 제목");
// const prices = window.prompt("책 가격");
// const public = window.prompt("책 출판사");

// const book = {
//   title: title,
//   prices: prices,
//   public: public,
// };

// const book = {};
// book.title = title;
// book.prices = prices;
// book.public = public;

// console.log(book);

// 2. mz퀴즈
// 유저에게 mbti를 물어봐서 성향을 알려주는 코드
// ex) e에요? i에요? e
// ex) n에요? s에요? n
// ex) t에요? f에요? t
// ex) j에요? p에요? j
//  > 외향적이고, 상상력이 풍부하고계획적이네요!

// const mbti1 = window.prompt("e에요 i에요?");
// const mbti2 = window.prompt("n에요 s에요?");
// const mbti3 = window.prompt("t에요 f에요?");
// const mbti4 = window.prompt("j에요 p에요?");

// mbti = {
//   i: "내향적",
//   e: "외향적",
//   n: "직관적",
//   s: "감각적",
//   f: "감정형",
//   t: "사고형",
//   p: "인식형",
//   j: "판단형",
// };

// console.log(
//   `${mbti[mbti1]}이고,${mbti[mbti2]}이며,${mbti[mbti2]}와 ${mbti[mbti3]}이군요 `
// );

// 태어난 년도 입력하면 띠 나오는 프로그램

const year = window.prompt("태어난 년도를 입력하세요");

animals = {
  1: "닭",
  2: "개",
  0: "원숭이",
  11: "양",
  10: "말",
  9: "뱀",
  8: "용",
  7: "토끼",
  6: "호랑이",
  5: "소",
  4: "쥐",
  3: "돼지",
};

console.log(`당신의 띠는 ${animals[year % 12]}`);
