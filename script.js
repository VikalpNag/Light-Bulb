let isOpen = false;
let btn = document.querySelector(".switch");
btn.addEventListener("click", function () {
  if (isOpen) {
    btn.classList.remove("switch-on");
  } else {
    btn.classList.add("switch-on");
  }
  isOpen = !isOpen;
});
