const originPrice = document.createElement("input");
const discountRatio = document.createElement("input");
originPrice.innerText = "원";
discountRatio.innerText = "%";

const confirmBtn = document.createElement("button");
confirmBtn.innerText = "할인 가격 계산하기";

const describtion = document.createElement("div");

confirmBtn.addEventListener("click", (e) => {
  if (originPrice.type == "text") {
    describtion.innerText = `상품의 원래 가격은 원이고,할인율은 %입니다.  을 절약한 원에 살 수 있습니다. `;
  } else {
    describtion.innerText = `상품의 원래 가격은 ${originPrice}원이고,할인율은 ${discountRatio}%입니다.${
      (originPrice * discountRatio) / 100
    }을 절약한 ${originPrice - discountRatio / 100}원에 살 수 있습니다. `;
    originPrice.style.color = "blue";
    discountRatio.style.color = "red";
  }
});

document.body.appendChild(originPrice);
document.body.appendChild(discountRatio);
document.body.appendChild(describtion);
document.body.appendChild(confirmBtn);
