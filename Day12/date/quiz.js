const date = new Date();

const isWeekDay = date.getDay() != 0 && date.getDay() != 6;
const isClassTime = [19, 20].some((v) => v == date.getHours());
const isBreakTime = [50, 51, 52, 53, 54, 55, 56, 57, 59, 58].some(
  (v) => v == date.getMinutes()
);

const isValid = isWeekDay && isClassTime && isBreakTime;
const msg = isValid ? "쉬는시간" : "수업시간";

alert(msg);
