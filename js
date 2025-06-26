const galleryItems = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const filterButtons = document.querySelectorAll(".filter-btn");

let currentIndex = 0;
let currentImages = [];

// Open lightbox
galleryItems.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentImages = Array.from(document.querySelectorAll(".gallery-item:not(.hidden) img"));
    currentIndex = currentImages.indexOf(img);
    openLightbox(currentIndex);
  });
});

function openLightbox(index) {
  lightbox.style.display = "flex";
  lightboxImg.src = currentImages[index].src;
}

// Navigation
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % currentImages.length;
  openLightbox(currentIndex);
});
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  openLightbox(currentIndex);
});
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Filter functionality
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    document.querySelectorAll(".gallery-item").forEach(item => {
      item.classList.remove("hidden");
      if (filter !== "all" && !item.classList.contains(filter)) {
        item.classList.add("hidden");
      }
    });
  });
});
