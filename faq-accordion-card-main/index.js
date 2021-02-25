const arrows = document.querySelectorAll(".faq-question > span");
arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    const arrow = e.currentTarget.lastChild.querySelector("img");
    if (arrow.style.transform !== "rotate(180deg)") {
      arrow.style.transform = "rotate(180deg)";
    } else {
      arrow.style.transform = "rotate(0deg)";
    }

    const content = e.currentTarget.parentNode.querySelector("p");
    const heading = e.currentTarget.firstElementChild;

    document.querySelectorAll(".faq-question p").forEach((el) => {
      if (!el.classList.contains("hide") && el !== content) {
        el.classList.toggle("hide");
      }
    });

    document.querySelectorAll(".faq-question").forEach((el) => {
      if (
        el.firstElementChild.firstElementChild.classList.contains("bold") &&
        el.firstElementChild.firstElementChild !== heading
      ) {
        el.firstElementChild.firstElementChild.classList.toggle("bold");
      }
    });

    heading.classList.toggle("bold");

    console.log(content);
    content.classList.toggle("hide");
  });
});
