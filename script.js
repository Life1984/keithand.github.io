/*
  Navigation interaction:
  This JavaScript replaces the Bootstrap navbar behavior from 04-navbar.html.
  (When a left-side label is clicked, the matching section becomes visible).
*/
const navLabels = document.querySelectorAll(".side-nav label");
const sections = document.querySelectorAll(".content-section");

/*
  Gallery filtering:
  Pen and pencil drawings use data-category="pen-pencil".
  MS Paint drawings use data-category="digital".
  The Paint category is included now so paintings can be added later.
*/
const filterButtons = document.querySelectorAll(".filter-button");
const artCards = document.querySelectorAll(".art-card");
const emptyGalleryMessage = document.querySelector("#empty-gallery-message");
const workRadio = document.querySelector("#work-radio");

/*
  Artwork preview interaction:
  Click behavior is handled with JavaScript.
*/
const artImages = document.querySelectorAll(".art-card img");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const closeLightboxButton = document.querySelector("#close-lightbox");

/*
  Contact form interaction:
  Checks whether the user filled out the form before showing a status message.
  NEED TO UPDATE
*/
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

function showSection(sectionId) {
  sections.forEach((section) => {
    if (section.id === sectionId) {
      section.classList.add("active-section");
    } else {
      section.classList.remove("active-section");
    }
  });
}

navLabels.forEach((label) => {
  label.addEventListener("click", () => {
    const sectionId = label.dataset.section;
    showSection(sectionId);
  });
});

function filterGallery(selectedCategory) {
  let visibleCount = 0;

  artCards.forEach((card) => {
    const cardCategory = card.dataset.category;

    if (selectedCategory === "all" || cardCategory === selectedCategory) {
      card.classList.remove("is-hidden");
      visibleCount += 1;
    } else {
      card.classList.add("is-hidden");
    }
  });

  if (visibleCount === 0) {
    emptyGalleryMessage.classList.add("visible");
  } else {
    emptyGalleryMessage.classList.remove("visible");
  }
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    workRadio.checked = true;
    showSection("work");

    filterButtons.forEach((currentButton) => {
      currentButton.classList.remove("active-filter");
    });

    button.classList.add("active-filter");
    filterGallery(selectedCategory);
  });
});

artImages.forEach((image) => {
  image.addEventListener("click", () => {
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add("visible");
    lightbox.setAttribute("aria-hidden", "false");
  });
});

function closeLightbox() {
  lightbox.classList.remove("visible");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  lightboxImage.alt = "";
}

closeLightboxButton.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("visible")) {
    closeLightbox();
  }
});

function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (name === "" || email === "" || message === "") {
    formStatus.textContent = "Please complete all fields before submitting.";
    return;
  }

  if (!isValidEmail(email)) {
    formStatus.textContent = "Please enter a valid email address.";
    return;
  }

  formStatus.textContent =
    "Thank you. This form is working, but it is not connected to a server yet.";

  contactForm.reset();
});
