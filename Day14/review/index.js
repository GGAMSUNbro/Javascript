// 유저에게 박스 갯수 물어보고
// 넓이와 높이 물어보고,
// 배경색 물어보고,
// 그리드 형태로 컬럼 몇개로 할건지도 물어보고
// 갭도 물어보고
// 결과 나타내기

const [boxcount, width, height, bg, column, gap] = prompt(
  "박스개수, 넓이, 높이, 배경색, 컬럼개수, 갭 "
).split(" ");
const container = document.createElement("section");
container.style.display = "grid";
container.style.gridTemplateColumns = `repeat(${Number(column)},1fr]`;
container.style.gap = gap + "px";

Array(Number(boxcount))
  .fill()
  .forEach((x) => {
    const box = document.createElement("div");
    box.style.width = width + "px";
    box.style.height = height + "px";
    box.style.backgroundColor = bg;
    container.appendChild(box);
  });
document.body.appendChild(container);
// Array(boxNumber)
//   .fill("")
//   .forEach((x) => {
//     const box = document.createElement("div");
//     div.style.width = width + "px";
//     div.style.height = height + "px";
//     div.style.backgroundColor = background;
//     div.style.gap = gap;
//     document.body.appendChild(box);
//   });
