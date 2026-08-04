function handleClick(selector) {
  const buttonElement = document.querySelector(`.btn-${selector}`);
  let isToggle = buttonElement.classList.contains("is-toggled");

  if (!isToggle) {
    turnOffPreviousButton();
    buttonElement.classList.add("is-toggled");
  } else {
    buttonElement.classList.remove("is-toggled");
  }
}

function turnOffPreviousButton() {
  const prevButton = document.querySelector(".is-toggled");
  console.log(prevButton);
  if (prevButton) {
    prevButton.classList.remove("is-toggled");
  }
}
