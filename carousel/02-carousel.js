const btns = Array.from(document.querySelectorAll(".btn"));
const dots = Array.from(document.querySelectorAll(".dot"));
const authorName = document.querySelector(".testimonial-author");
const authorJob = document.querySelector(".testimonial-job");
const image = document.querySelector(".image");
const maxDots = dots.length - 1;
let curDot = 0;
const author = [
  {
    name: "Maria de Almeida",
    job: "Senior Product Manager at EDP Comercial",
  },
  {
    name: "Frank B. Baker",
    job: "Insulation worker at Omni Realty",
  },
  {
    name: "Darrell K. Tompkins",
    job: "Custom inspector at Crazy Tiger",
  },
  {
    name: "Ned P. Perrone",
    job: "Direct care worker at Funtown toys",
  },
];

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("btn--left")) {
      if (curDot > 0) {
        editDot(curDot);
        editDot(curDot - 1);
        curDot--;
        changeAuthor(curDot);
      }
    } else {
      if (curDot < maxDots) {
        editDot(curDot);
        editDot(curDot + 1);
        curDot++;
        changeAuthor(curDot);
      }
    }
  });
});
const changeAuthor = function (position) {
  authorName.textContent = author[position].name;
  authorJob.textContent = author[position].job;
  image.src = `./${position}.jpg`;
};
const editDot = function (position) {
  dots[position].classList.toggle("dot-fill");
};
