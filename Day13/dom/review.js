// document html을 조작하는 타입/ html + js 중간다리

// document.createElement() 태그
// 만들기
const div = document.createElement("div");

// 찾기
document.querySelector(".box");

div.innerHTML = "<button>버튼</button>";
div.style.backgroundColor = "red";
