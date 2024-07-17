// 1. 영단어 입력 받고 대문자화 해서 콘솔 찍기
// const word = prompt("영단어를 입력해봐요");
// const wordUpper = word.toUpperCase();
// console.log(`${wordUpper}`);

// 2. 영문장 입력 받고 배열화 시켜서 두번째 단어 출력
// ex) I am hungry -> am
// const sentence = prompt("영문장을 입력해봐요");
// const arraySentence = sentence.split(" ");
// const result = arraySentence[1];
// console.log(`${result}`);

// 3. 유저에게 커피 음료 한 번에 3개 입력 받고 배열화
// ex) 아아 라떼 초코우유 ['아아','라떼','초코우유']

console.log(prompt("커피 음료 3가지 입력 띄어쓰기로 구분").split(" "));
