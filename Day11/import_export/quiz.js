// 1. 모카루 데이터 여기로 import하기
import { datas } from "./data.js";
// 2. full_name을 대소문자 바꿔서 나타내고,
// 달러를 엔화로 바꿔서 다 보여주기

// 3. credit_card -> 앞에 4자리만 살리고 나머지는 ***로 바꾸기
datas.map((x) => {
  const credit_card = [...x.credit_card]
    .map((v, i) => (i < 4 ? v : "*"))
    .join("");
  return { ...x, credit_card };
});
