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
  const contactsButton = document.getElementById("c1-button");
  contactsButton.addEventListener("click", function () {
    const modal = document.getElementById("modal-portfolio");
    modal.classList.add("modal-visible");
  });
}

async function loadDuckpondSvg() {
  const response = await fetch("./images/duckpond.svg");
  const svg = await response.text();
  const container = document.getElementById("duckpond-container");
  container.innerHTML = svg;
  document.body.classList.remove("loading");

  addButtonClicks();
}

loadDuckpondSvg();

const closeModalButtons = document.querySelectorAll(".modal .close");
for (const button of closeModalButtons) {
  button.addEventListener("click", function () {
    const modal = button.parentElement;
    modal.classList.remove("modal-visible");
  });
}
