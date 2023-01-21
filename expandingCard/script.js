const container = document.querySelector(".container");
const panels = document.querySelectorAll(".panel");
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("panel")) {
    panels.forEach((panel) => panel.classList.remove("active"));
    e.target.classList.add("active");
  }
});
