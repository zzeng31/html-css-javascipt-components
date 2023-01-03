const numbers = Array.from(document.querySelectorAll(".number"));
const endNumber = document.querySelector(".total-number");
const numberBox = Array.from(document.querySelectorAll(".number-box"));
const btn = Array.from(document.querySelectorAll(".icon-box"));
const pagination = document.querySelector(".pagination");
let curNumber = 5;
let curMin = 1;
const numberPerRow = 6; // Can not be changed
const maxNumber = 12;
endNumber.textContent = maxNumber; //Update total page number
pagination.addEventListener("click", (event) => {
  // If empty space is clicked
  if (event.target.classList.contains("pagination")) {
    return;
  }
  // If left buttons are clicked
  if (event.target.classList[0].includes("left")) {
    // Decrease page number
    if (curNumber > 1) {
      updateButton(curNumber);
      curNumber--;
      updateButton(curNumber);
    } else {
      if (curNumber === 1 && curMin === 1) return;
      // Update row number
      curMin -= numberPerRow;
      updateRow(curMin);
      updateButton(curNumber);
      curNumber = numberPerRow;
      updateButton(curNumber);
    }
    return;
  }
  // If right buttons are clicked
  if (event.target.classList[0].includes("right")) {
    // Boundary check
    if (+numberBox[curNumber - 1].textContent === maxNumber) return;
    // Increase page number
    if (curNumber < numberPerRow) {
      updateButton(curNumber);
      curNumber++;
      updateButton(curNumber);
    } else {
      // Update row number
      updateButton(curNumber);
      curMin += numberPerRow;
      updateRow(curMin);
      updateButton(1);
      curNumber = 1;
    }
    return;
  }

  //if numbers are clicked
  if (
    event.target.className === "number" ||
    event.target.classList[0] === "number-box"
  ) {
    // Update position of active button
    updateButton(curNumber);
    curNumber = +event.target.textContent - curMin + 1;
    updateButton(curNumber);
    return;
  }
  // If max number is clicked
  if (event.target.classList[0].includes("total")) {
    updateButton(curNumber);
    // Calculate current position in last page row
    curNumber =
      maxNumber % numberPerRow === 0 ? numberPerRow : maxNumber % numberPerRow;
    // Update position of active button and update row number
    updateButton(curNumber);
    curMin = maxNumber - curNumber + 1;
    updateRow(curMin);
    return;
  }
});
const updateButton = function (position) {
  numberBox[position - 1].classList.toggle("active");
};
const updateRow = function (startNumber) {
  for (let i = 0, j = startNumber; i < numberPerRow; i++, j++) {
    j >= maxNumber + 1
      ? (numbers[i].textContent = "")
      : (numbers[i].textContent = j);
  }
};
