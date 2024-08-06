const pallete = document.createElement("div");
pallete.style.display = "grid";
pallete.style.gridTemplateColumns = "repeat(4,1fr)";

const colors = "black gray red blue green yellow brown white".split(" ");
colors.forEach((v) => {
  const box = document.createElement("div");
  box.style.width = "50px";
  box.style.height = "50px";
  box.style.backgroundColor = v;
  box.addEventListener("mouseenter", () => {
    choiceBox.style.backgroundColor = v;
  });
  pallete.appendChild(box);
});

const choiceBox = document.createElement("div");
choiceBox.style.width = "300px";
choiceBox.style.height = "300px";
choiceBox.style.border = "1px solid black";



  const minus = document.createElement("button");
  const plus = document.createElement("button");
  minus.innerText = "-";
  plus.innerText = "+";

  minus.addEventListener("click", () => {
   choiceBox.style.width =(parseInt(choiceBox.style.width)-10) +'px'
   choiceBox.style.height =(parseInt(choiceBox.style.height)-10) +'p)')
  };



  const box = document.createElement("div");
  box.appendChild(minus);
  box.appendChild(num);
  box.appendChild(plus);
  document.body.appendChild(box);


document.body.appendChild(pallete);
document.body.appendChild(choiceBox);