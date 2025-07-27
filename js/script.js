function portfolioModal() {
  const portfButton = document.getElementById("c1-button");
  portfButton.addEventListener("click", function () {
    const modal = document.getElementById("modal-portfolio");
    modal.classList.add("modal-visible");
    modal.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
}
function aboutModal() {
  const aboutButton = document.getElementById("b1-button");
  aboutButton.addEventListener("click", function () {
    const modal = document.getElementById("modal-about");
    modal.classList.add("modal-visible");
    modal.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
}

function contactsModal() {
  const contactsButton = document.getElementById("d2-button");
  contactsButton.addEventListener("click", function () {
    const modal = document.getElementById("modal-contacts");
    modal.classList.add("modal-visible");
    modal.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
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

const modalBackdrops = document.querySelectorAll(".modal-backdrop");
for (const backdrop of modalBackdrops) {
  backdrop.addEventListener("click", function (e) {
    const modal = backdrop.previousElementSibling;
    modal.classList.remove("modal-visible");
  });
}

const slider = document.querySelector(".sections-container");
const scrollSpeed = 1.5;
// Variables to track dragging state
let isDown = false;
let startX, scrollLeft, startY, scrollTop;

// Mouse down event
slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("drag");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  startY = e.pageY - slider.offsetTop;
  scrollTop = slider.scrollTop;
});

// Mouse leave and up event
["mouseleave", "mouseup"].forEach((event) =>
  slider.addEventListener(event, () => {
    isDown = false;
    slider.classList.remove("drag");
  }),
);

// Mouse move event
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const y = e.pageY - slider.offsetTop;
  const walkX = (x - startX) * scrollSpeed;
  const walkY = (y - startY) * scrollSpeed;
  slider.scrollLeft = scrollLeft - walkX;
  slider.scrollTop = scrollTop - walkY;
});

const btnDark = document.getElementById("darkMode");
btnDark.addEventListener("click", function () {
  document.body.classList.add("dark");
  document.body.classList.remove("light");
});

const btnLight = document.getElementById("lightMode");
btnLight.addEventListener("click", function () {
  document.body.classList.add("light");
  document.body.classList.remove("dark");
});
