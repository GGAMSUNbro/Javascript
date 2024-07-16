// megacoffee
// 커피 메뉴: 아아, 라떼, 아이스티
// 아아: 2000, 5kcal
// 라떼: 3000, 150
// 아이스티: 2500, 200

// 쿠키 메뉴: 초코, 녹차, 마카다미아
// 초코: 2500, 300
// 녹차: 2500, 300
// 마카다미아: 3000, 400

// 유저에게 커피 메뉴(셋 중 하나 고르고), 쿠키 메뉴(셋중 하나 고르고)
// 구매한 메뉴: 아아와 녹차,
// 구매한 가격: 4500
// 총 칼로리: 305

const coffee = window.prompt("커피 메뉴를 고르세요 아아, 라떼, 아이스티");
const cookie = window.prompt("쿠키 메뉴를 고르세요 초코, 녹차, 마카다미아");

megaCoffee = {
  아아: { price: 2000, kacl: 5 },
  라떼: { price: 3000, kacl: 150 },
  아이스티: { price: 2500, kacl: 200 },
};

megaCookie = {
  초코: { price: 2500, kacl: 300 },
  녹차: { price: 2500, kacl: 300 },
  마카다미아: { price: 3000, kacl: 400 },
};

window.alert(
  `구매한 메뉴는 ${coffee}와 ${cookie}이고, 구매한 가격은 ${
    megaCoffee[coffee]["price"] + megaCookie[cookie]["price"]
  }원, 칼로리는 ${megaCoffee[coffee]["kacl"] + megaCookie[cookie]["kacl"]}Kcal`
);
