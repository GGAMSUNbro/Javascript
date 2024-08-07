// const button = document.createElement("button");
// button.innerText = "신지";
// button.addEventListener("click", (e) => {
//   console.log(e.target.innerText);
// });
// document.body.appendChild(button);

// input -> 10글자 이상이면 빨간색

// const inputButton = document.createElement("input");
// inputButton.addEventListener("input", (e) => {
//   inputButton.style.color = e.target.value.length >= 10 ? "red" : "black";
//   console.log(e.target.value);
// });

// document.body.appendChild(inputButton);

// 10글자 이상 못적도록!!!@#!@#!

// const eraseButton = document.createElement("input");
// eraseButton.addEventListener("input", (e) => {
//   e.target.value =
//     e.target.value.length > 10 ? e.target.value.slice(0, 10) : e.target.value;
//   console.log(e.target.value);
// });

// document.body.appendChild(eraseButton);

const idInput = document.createElement("input");
const duplicationId = document.createElement("button");
const checkId = document.createElement("button");

duplicationId.innerText = "중복확인";

idInput.addEventListener("input", (e) => {
  const { length } = e.target.value;
  e.target.value = length > 19 ? e.target.value.slice(0, 20) : e.target.value;

  duplicationId.style.backgroundColor =
    length >= 6 && length <= 21 ? "red" : "white";

  checkId.innerText = length - 1 + "/20";
});

document.body.appendChild(idInput);
document.body.appendChild(duplicationId);
document.body.appendChild(checkId);
