function generateColour() {
  let characters = "0123456789ABCDEF";
  let colourOne = "#";
  let colourTwo = "#";
  let colourThree = "#";
  let colourFour = "#";
  let colourFive = "#";

  for (let i = 0; i < 6; i++) {
    colourOne += characters[Math.floor(Math.random() * 16)];
    colourTwo += characters[Math.floor(Math.random() * 16)];
    colourThree += characters[Math.floor(Math.random() * 16)];
    colourFour += characters[Math.floor(Math.random() * 16)];
    colourFive += characters[Math.floor(Math.random() * 16)];
  }
  displayColour(colourOne, colourTwo, colourThree, colourFour, colourFive);
}

function displayColour(
  colourOne,
  colourTwo,
  colourThree,
  colourFour,
  colourFive
) {
  let box = document.getElementsByClassName("colour-box");
  let boxArray = Array.from(box);

  let colourHex = document.getElementsByClassName("hex-text");
  let colourHexArray = Array.from(colourHex);

  let boxOne = boxArray[0];
  boxOne.style.backgroundColor = colourOne;
  let boxOneText = colourHexArray[0];
  boxOneText.innerHTML = colourOne;
  boxOneText.style.backgroundColor = "#ffffff";

  let boxTwo = boxArray[1];
  boxTwo.style.backgroundColor = colourTwo;
  let boxTwoText = colourHexArray[1];
  boxTwoText.innerHTML = colourTwo;
  boxTwoText.style.backgroundColor = "#ffffff";

  let boxThree = boxArray[2];
  boxThree.style.backgroundColor = colourThree;
  let boxThreeText = colourHexArray[2];
  boxThreeText.innerHTML = colourThree;
  boxThreeText.style.backgroundColor = "#ffffff";

  let boxFour = boxArray[3];
  boxFour.style.backgroundColor = colourFour;
  let boxFourText = colourHexArray[3];
  boxFourText.innerHTML = colourFour;
  boxFourText.style.backgroundColor = "#ffffff";

  let boxFive = boxArray[4];
  boxFive.style.backgroundColor = colourFive;
  let boxFiveText = colourHexArray[4];
  boxFiveText.innerHTML = colourFive;
  boxFiveText.style.backgroundColor = "#ffffff";
}

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  if (event.code === "Space") {
    generateColour();
  }
});

generateColour();

console.log("hello");
