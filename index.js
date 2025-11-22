const container = document.querySelector(".container");
const description = document.querySelectorAll(".description");

container.addEventListener("click", (e) => {
  if (e.target.nodeName === "IMG") {
    if (e.target.classList.contains("minus-image")) {
      e.target.style.display = "none";
      e.target.nextElementSibling.style.display = "block";
      e.target.parentElement.parentElement.nextElementSibling.style.display ="none";
    } else {
      e.target.style.display = "none";
      e.target.previousElementSibling.style.display = "block";
      e.target.parentElement.parentElement.nextElementSibling.style.display ="block";
    }
  }
});
