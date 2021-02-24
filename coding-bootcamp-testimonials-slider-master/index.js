const toggleSlide = () => {
  const images = document.querySelectorAll(".carousel-image > img");
  images.forEach((image) => {
    image.classList.toggle("hide");
  });

  const paragraphs = document.querySelectorAll(".carousel-text p");
  paragraphs.forEach((p) => {
    p.classList.toggle("hide");
  });

  const headings = document.querySelectorAll(".carousel-text h4");
  headings.forEach((heading) => {
    heading.classList.toggle("hide");
  });
};

const carouselButtons = document.querySelectorAll(".btn-container div");
carouselButtons.forEach((button) => {
  button.addEventListener("click", toggleSlide);
});
