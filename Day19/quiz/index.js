// input 태그 만들어서 특수문자 !,#,@,$,*가 하나라도 들어가면 빨간색 만들기

const filterInput = document.createElement("input");

filterInput.addEventListener("input", (e) => {
  e.target.style.color = [..."!#@$*"].some((v) => e.target.value.includes(v))
    ? "red"
    : "black";
});

document.body.appendChild(filterInput);
