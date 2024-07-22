// 매개변수에 함수가 들어간 것을 콜백이라 함
// f(x) -> f(g(x)) [합성함수 | 콜백함수]
// 함수 매개변수에 함수를 넣는거
// 콜백함수 개꿀인점 뭔데?

const test = (x) => {
  console.log("코리아!");
  x();
  console.log("아이티!");
};
const icecream = () => {
  alert("아이스크림 먹고픔 ㄹㅇ");
};

const cook = (recipe) => {
  console.log("요리준비!");
  recipe();
  console.log("요리 완료!");
};

const taco = () => {
  console.log("살사소스 준비");
  console.log("나초칩");
  console.log("난 준비");
};

cook(taco);

cook(() => {
  console.log("밀가루");
  console.log("고기고기");
  console.log("탕후루");
});
