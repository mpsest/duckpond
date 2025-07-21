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

function portfolioModal() {
  const portfButton = document.getElementById("c1-button");
  portfButton.addEventListener("click", function () {
    const modal = document.getElementById("modal-portfolio");
    modal.classList.add("modal-visible");
  });
}
function aboutModal() {
  const aboutButton = document.getElementById("b1-button");
  aboutButton.addEventListener("click", function () {
    const modal = document.getElementById("modal-about");
    modal.classList.add("modal-visible");
  });
}

function contactsModal() {
  const contactsButton = document.getElementById("d2-button");
  contactsButton.addEventListener("click", function () {
    const modal = document.getElementById("modal-contacts");
    modal.classList.add("modal-visible");
  });
}

async function loadDuckpondSvg() {
  const response = await fetch("./images/duckpond.svg");
  const svg = await response.text();
  const container = document.getElementById("duckpond-container");
  container.innerHTML = svg;
  document.body.classList.remove("loading");

  portfolioModal();
  aboutModal();
  contactsModal();
}

loadDuckpondSvg();

const closeModalButtons = document.querySelectorAll(".modal .close");
for (const button of closeModalButtons) {
  button.addEventListener("click", function () {
    const modal = button.parentElement;
    modal.classList.remove("modal-visible");
  });
}