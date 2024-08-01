// 비행기 좌석
// 열은 A,B,C,D,E,F 행은 1~16
// GRID  6, 좌석별 색 적용

// const planeSeats = document.createElement("section");
// planeSeats.style.display = "grid";
// planeSeats.style.gridTemplateColumns = "repeat(7,1fr)";

// const row = [..."ABCQDEF"];
// const col = [..."123456789"];

// const seats = col.map((num) => row.map((alpha) => alpha + num));

// seats.forEach((arr) =>
//   arr.forEach((v) => {
//     const chair = document.createElement("div");
//     chair.style.width = "50px";
//     chair.style.height = "50px";
//     chair.style.display = "flex";
//     chair.style.alignItems = "center";
//     chair.style.justifyContent = "center";
//     if (["1"].some((x) => v.includes(x))) {
//       chair.style.border = "1px solid red";
//     } else if ([..."2345"].some((x) => v.includes(x))) {
//       chair.style.border = "1px solid blue";
//     } else {
//       chair.style.border = "1px solid green";
//     }
//     if (chair.includes("Q")){

//     }
//         chair.innerText = v;
//     planeSeats.appendChild(chair);
//   })
// );
// document.body.appendChild(planeSeats);

import { makeSeats } from "./func.js";

const airplane = document.createElement("div");
airplane.style.display = "grid";
airplane.style.gridTemplateColumns = "repeat(6, 1fr)";
airplane.style.gap = "5px";

const seats = makeSeats();
seats.forEach((v) => {
  const div = document.createElement("div");
  div.style.border = `1px solid ${v.state}`;
  div.innerText = v.col + v.row;
  airplane.appendChild(div);
});

document.body.appendChild(airplane);
