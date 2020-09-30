const contactBtn = document.querySelector(".contactMe");
const contactForm = document.querySelector(".contactInfo");

contactBtn.addEventListener("click", () => {
  contactForm.scrollIntoView();
});
