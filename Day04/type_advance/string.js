const coffee = "americano";

// 포함 유무
coffee.includes("ri"); //true;

// 몇 번째 알려줌 없으면 -1
coffee.indexOf("r"); // 3

//"a" -> "z" 바꿔줌
coffee.replace("a", "z");

//"ameri" 시작하니? true
coffee.startsWith("ameri");

//"cano" 끝나니?
coffee.endsWith("cano");

//"ameri" 0~5 잘라서 주기
coffee.slice(0, 5);

// 대문자화
coffee.toUpperCase();

// 소문자화
coffee.toLowerCase();

// i 기준으로 배열화[타입변환]
coffee.split("i");

// americanoamericanoamericano
coffee.repeat(3);
