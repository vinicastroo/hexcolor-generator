window.addEventListener("load", event => {
  for (a = 0; a < 24; a++) {
    let sHex = getHex();
    let oCard = getCard(sHex);
    oCard.style.background = sHex;
  }

  document.querySelector("#menu").style.background = getHex();
});

function rand(iMin, iMax) {
  return Math.round(Math.random() * (iMax - iMin)) + iMin;
}

function randomIndex(aHex) {
  return rand(0, aHex.length - 1);
}

function getHex() {
  const aHex = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F"
  ];

  let sHex = "#";
  for (i = 0; i < 6; i++) {
    let iIndex = randomIndex(aHex);
    sHex += aHex[iIndex];
  }

  return sHex;
}

function getCard(sHex) {
  let oCard = document.createElement("div");
  oCard.setAttribute("class", "card");

  let oCardContainer = document.createElement("div");
  oCardContainer.setAttribute("class", "card-container");

  let oCardContent = document.createElement("div");
  oCardContent.setAttribute("class", "card-content");

  oCardContent.innerText = sHex;
  oCard.appendChild(oCardContainer);
  oCardContainer.appendChild(oCardContent);

  document.querySelector("#content").appendChild(oCard);
  return oCard;
}
