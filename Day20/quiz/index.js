const input = document.createElement("input");
const eye = document.createElement("button");

const openEye = `<i class="fa-regular fa-eye"></i>`;
const closedEye = `<i class="fa-regular fa-eye-slash"></i>`;
eye.innerHTML = openEye;
input.type = "password";

eye.addEventListener("click", (e) => {
  if (input.type === "password") {
    eye.innerHTML = closedEye;
    input.type = "text";
  } else {
    eye.innerHTML = openEye;
    input.type = "password";
  }
});

document.body.appendChild(input);
document.body.appendChild(eye);
