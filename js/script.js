// window.addEventListener("DOMContentLoaded", function () {
//   const container = document.querySelector(".sections-container");
//   if (container) {
//     // Scroll to the center cell (center section)
//     container.scrollTo({
//       left: container.scrollWidth / 3,
//       top: container.scrollHeight / 3,
//       behavior: "auto",
//     });
//   }
// });

function addButtonClicks() {
  const button = document.getElementById("buttonLP");
  button.addEventListener("click", function () {
    alert("OLA");
});
}

async function loadDuckpondSvg() {
  const response = await fetch("./images/duckpond.svg")
  const svg = await response.text();
  const container = document.getElementById("duckpond-container");
  container.innerHTML = svg;
  document.body.classList.remove("loading");

  addButtonClicks();
}

loadDuckpondSvg();

