const expandButton = Array.from(document.querySelectorAll(".icon"));
const items = Array.from(document.querySelectorAll(".accordion"));
const itemContainer = Array.from(document.querySelectorAll(".item-container"));
expandButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    // If the item is already expanded
    if (btn.classList.contains("icon-down")) {
      closeItem(btn);
    }
    //if the item is not expanded
    if (btn.classList.contains("icon-right")) {
      expandItem(btn);
    }
  });
});
const closeItem = function (btn) {
  btn.classList.add("hidden");
  items[btn.dataset.id - 1].classList.toggle("active");
  itemContainer[btn.dataset.id - 1].classList.toggle("hidden");
  btn.nextElementSibling.classList.remove("hidden");
};
const expandItem = function (btn) {
  btn.classList.add("hidden");
  items[btn.dataset.id - 1].classList.toggle("active");
  itemContainer[btn.dataset.id - 1].classList.toggle("hidden");
  btn.previousElementSibling.classList.remove("hidden");
};
