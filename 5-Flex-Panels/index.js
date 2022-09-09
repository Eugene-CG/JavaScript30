const wrapper = document.querySelector(".wrapper");
wrapper.addEventListener("click", ({ target }) => {
  target.closest(".panel").classList.toggle("panel-flexible");
});
