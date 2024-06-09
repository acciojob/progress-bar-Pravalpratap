//your JS code here. If required.
const circles = document.querySelectorAll(".circle");
const progress = document.querySelector(".indicator");
const btn = document.querySelectorAll("button");

let counter = 1;
function updateStep(e) {
  if (e.target.id === "next") {
    counter++;
  } else {
    counter--;
  }

  updatecircle();
  updateButton();
  updateProgress();
}

function updatecircle() {
  circles.forEach((circle, index) => {
    if (index < counter) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
}

function updateButton() {
  if (counter == 1) {
    document.getElementById("pre").disabled = true;
  } else if (counter == circles.length) {
    document.getElementById("next").disabled = true;
  } else {
    document.getElementById("pre").disabled = false;
    document.getElementById("next").disabled = false;
  }
}

function updateProgress() {
  let pro = ((counter - 1) / (circles.length - 1)) * 100;
  progress.style.width = pro + "%";
}

btn.forEach((button) => {
  button.addEventListener("click", updateStep);
});

updatecircle();
updateButton();
updateProgress();
