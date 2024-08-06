// 유저에게 3개의 품목과 3개의 가격을 입력 받고
const [fName, sName, tName, fPrice, sPrice, tPrice] =
  prompt("3개의 품목과 가격 입력").split(" ");
// 수량에 따라서 총 가격이 바뀌는 프로그램 만들기!
const makeItem = (name, price) => {
  const itemName = document.createElement("span");
  const itemPrice = document.createElement("span");
  const minus = document.createElement("button");
  const num = document.createElement("span");
  const plus = document.createElement("button");
  itemName.innerText = name;
  itemPrice.innerText = price;
  minus.innerText = "-";
  num.innerText = "0";
  plus.innerText = "+";
  plus.addEventListener("click", () => {
    num.innerText = Number(num.innerText) + 1;
    total.innerText = Number(total.innerText) + Number(itemPrice.innerText);
  });
  minus.addEventListener("click", () => {
    const quantity = Number(num.innerText);
    if (quantity === 0) {
      num.innerText = "0";
    } else {
      num.innerText = Number(num.innerText) - 1;
      total.innerText = Number(total.innerText) - Number(itemPrice.innerText);
    }
  });
  const box = document.createElement("div");
  box.appendChild(itemName);
  box.appendChild(itemPrice);
  box.appendChild(minus);
  box.appendChild(num);
  box.appendChild(plus);
  document.body.appendChild(box);
};

makeItem(fName, fPrice);
makeItem(sName, sPrice);
makeItem(tName, tPrice);

const total = document.createElement("span");
total.innerText = "0";
document.body.appendChild(total);
// 아아 라떼 초코 2000 3000 4000

// 아아 2000 - 0+
// 라뗴 3000 - 0+
// 초코 4000 - 0+

// 총 가격: 0 ->
