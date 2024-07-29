import { data } from "./dummy.js";

// 1. credit_card: 뒤의 네자리는 남기고 나머지 *, file_name 확장자만 남기고
// money -> 반올림 첫번째자리 $290

const newData = data.map((x) => {
  const card = [...x.credit_card].map((v, i) =>
    i < x.credit_card.length - 5 ? "*" : v
  ).join;
  const [_, extension] = x.file_name.split(".");
  const dollar = "$" + Math.round(Number(x.money.replace("$", "")) / 10) * 10;
  return { ...x, credit_card: card, file_name: extension, money: dollar };
});

console.log(newData);

// 2. 위도, 경도 ->
// 유럽 : 위도[10~70] and 경도[-30~60]
// 아시아 : 위도[10~80] and 경도[60~180]
// 아메리카: 위도 [-60~60] and 경도 [-170~-30]
// 그외는 몰라

const newData2 = data.map((x) => {
  if (10 <= x.longitude <= 70 && -30 <= x.latitude <= 60) {
    [...x, region];
  } else if (10 <= x.longitude <= 80 && 60 <= x.latitude <= 180) {
    region: asia;
  } else if (-60 <= x.longitude <= 60 && -170 <= x.latitude <= -30) {
    region: america;
  } else {
    ("No DATA");
  }
  return;
  newData2;
});
