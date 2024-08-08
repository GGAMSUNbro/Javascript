// .:클래스 #:아이디

const pwIput = document.querySelector("#passwordInput");
const eyeButton = document.querySelector("#eyeButton");

const closedEye = `<i class="fa-regular fa-eye-slash"></i>`;

eyeButton.addEventListener("click", () => {
  if (pwIput.type == "password") {
    pwIput.type = "text";
    eyeButton = closedEye;
  } else {
    pwIput.type = "password";
    eyeButton = eyeButton;
  }
});

document.body.appendChild(eyeButton);
