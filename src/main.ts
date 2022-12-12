import "./tailwind.css";

// const declarations
const pianoKeys = Array.from(document.querySelectorAll("ul li") as NodeListOf<HTMLElement>);
const keysLetters = Array.from(
  document.querySelectorAll(".keys-letters") as NodeListOf<HTMLElement>
);
const volumeSlider = document.querySelector("#volume-slider");
const keysCheckbox = document.querySelector("#keys-checkbox");

// audio constructor
let allKeys: (string | undefined)[] = [],
  audio = new Audio();

// PIANO logic
const playTune = async (key: string | undefined) => {
  audio.src = `sounds/${key}.wav`;
  audio.play();
};
pianoKeys.forEach((key) => {
  allKeys.push(key.dataset.key);
  key.addEventListener("click", () => playTune(key.dataset.key));
  console.log();
});

// input handling for volume, keys letters show-hide checkbox and user keyboard functionality
const pressedKey = (e: { key: string | undefined }) => {
  if (allKeys.includes(e.key)) playTune(e.key);
};
const volumeHandler = (e: any) => {
  audio.volume = e.target.value;
};
const showKeysHandler = () => {
  keysLetters?.forEach((key) => key.classList.toggle("hide"));
};

document?.addEventListener("keydown", pressedKey);
volumeSlider?.addEventListener("input", volumeHandler);
keysCheckbox?.addEventListener("input", showKeysHandler);

// footer creation with up-to-date year
const footer = document.querySelector("#footer");
const footerPara = document.createElement("p");
const footerText = document.createTextNode(`
© ${new Date().getFullYear()} Giacomo Gualtieri. All rights reserved.`);
footer?.appendChild(footerPara);
footerPara?.appendChild(footerText);

export {};
