const dropdown = document.querySelectorAll(".projects-dropdown-container");

dropdown.forEach((drop) => {
  drop.addEventListener("click", () => {
    drop.classList.toggle("active");
  });
});
