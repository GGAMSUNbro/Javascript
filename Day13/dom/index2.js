// quiz2

// red blue yellow black vertical 100 100

// 컬러 4개, 세로형, 넓이,높이,
const container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "column";

["Red", "blue", "black", "white"].forEach((x) => {
  const box = document.createElement("div");
  box.style.width = "100px";
  box.style.height = "100px";
  box.style.backgroundColor = x;
  container.appendChild(box);
});

document.body.appendChild(container);
