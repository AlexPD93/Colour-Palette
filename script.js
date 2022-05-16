function generateColour(event) {
  let letters = "0123456789ABCDEF";
  let colour = "#";
  for (let i = 0; i < 6; i++) {
    colour += letters[Math.floor(Math.random() * 16)];
  }
  return colour;
}

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  if (event.code === "Space") {
    generateColour();
  }
});
