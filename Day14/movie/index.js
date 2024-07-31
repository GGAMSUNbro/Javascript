// 조건 열은 A~L, 행은 1~10
// 진행 > 하나의 컨테이너 > 각 행과 열에 해당하는 박스 생성 > 열에 따른 색 변경
//  필요한 것

// const [height, width, bg] = prompt(
//     "높이, 넓이, 배경색 "
//   ).split(" ");

// const container = document.createElement("section");
// container.style.display = "grid";
// container.style.gridTemplateColumns = `repeat(${Number(seat.length)},${Number(row.length)}fr]`;
// container.style.gap = gap + "px";

// const seat = [..."abcdefghijkl"];
// const row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Array(Number(column.length * row.length))
//   .fill()
//   .forEach((x, i) => {
//     const box = document.createElement("div");
//     box.textContent = i % 10 <
//     box.style.height = height + "px";
//     box.style.backgroundColor = bg;
//     container.appendChild(box);
//   });

// document.body.appendChild(container);

const seatsBox = document.createElement("section");
seatsBox.style.display = "grid";
seatsBox.style.gridTemplateColumns = "repeat(10, 1fr)";

const col = [..."ABCDEFGHIJKL"];
const row = [..."123456789"];
row.push("10");
const seats = col.map((alpha) => row.map((num) => alpha + num));

seats.forEach((arr) =>
  arr.forEach((v) => {
    const box = document.createElement("div");
    box.style.width = "50px";
    box.style.height = "50px";
    box.style.display = "flex";
    box.style.alignItems = "center";
    box.style.justifyContent = "center";
    if ([..."ABCD"].some((x) => v.includes(x))) {
      box.style.border = "1px solid yellow";
    } else if ([..."EFGHI"].some((x) => v.includes(x))) {
      box.style.border = "1px solid red";
    } else {
      box.style.border = "1px solid black";
    }
    box.innerText = v;
    seatsBox.appendChild(box);
  })
);
document.body.appendChild(seatsBox);

// 요약 버전
const theater = document.createElement("section");
theater.className = "theater";

const seats = [..."ABCDEFGHIJKL"].map((col) =>
  [..."123456789"].map((row) => col + row)
);
