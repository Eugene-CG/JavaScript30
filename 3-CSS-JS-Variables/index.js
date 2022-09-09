const controls = document.querySelector(".controls");
const img = document.querySelector(".img");
const imgPhoto = document.querySelector(".img-photo");

const handleSpacing = ({ value }) =>
  (imgPhoto.style.transform = `translate(${value}px, ${value}px)`);
const handleBlur = ({ value }) => (imgPhoto.style.opacity = `${value}`);
const handleColor = ({ value }) => (img.style.backgroundColor = `${value}`);

controls.addEventListener("input", ({ target }) => {
  if (target.closest(".spacing-input")) handleSpacing(target);
  if (target.closest(".blur-input")) handleBlur(target);
  if (target.closest(".color-input")) handleColor(target);
});
