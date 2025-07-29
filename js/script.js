function openModal(modalId) {
  const visibleModals = document.getElementsByClassName("modal-visible");
  for (const modal of visibleModals) {
    if (modal.id !== modalId) {
      modal.classList.remove("modal-visible");
    }
  }
  const modal = document.getElementById(modalId);
  modal.classList.add("modal-visible");
  modal.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
}

function portfolioModal() {
  const portfolioButtons = document.getElementsByClassName(
    "open-modal-portfolio",
  );
  for (const button of portfolioButtons) {
    button.addEventListener("click", function () {
      openModal("modal-portfolio");
    });
  }
}

function aboutModal() {
  const aboutButtons = document.getElementsByClassName("open-modal-about");
  for (const button of aboutButtons) {
    button.addEventListener("click", function () {
      openModal("modal-about");
    });
  }
}

function contactsModal() {
  const contactsButtons = document.getElementsByClassName(
    "open-modal-contacts",
  );
  for (const button of contactsButtons) {
    button.addEventListener("click", function () {
      openModal("modal-contacts");
    });
  }
}

function contactsModal() {
  const contactsButtons = document.getElementsByClassName(
    "open-modal-contacts",
  );
  for (const button of contactsButtons) {
    button.addEventListener("click", function () {
      openModal("modal-contacts");
    });
  }
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

const menuClose = document.getElementById("menu-close");
menuClose.addEventListener("click", function () {
  const menu = document.getElementById("menu-open");
  menu.checked = false;
});
const menuItems = document.getElementsByClassName("menu-item");
for (const item of menuItems) {
  item.addEventListener("click", function () {
    const menu = document.getElementById("menu-open");
    menu.checked = false;
  });
}
