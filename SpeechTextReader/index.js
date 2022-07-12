console.log("moc nečum!");

const main = document.querySelector("main");
const voicesSelect = document.getElementById("voices");
const textarea = document.getElementById("text");
const readBtn = document.getElementById("read");
const toggleBtn = document.getElementById("toggle");
const closeBtn = document.getElementById("close");

const data = [
  {
    image: "./SpeechTextReader/Pictures/auto.png",
    text: "Auto",
  },
  {
    image: "./Pictures/autobus.png",
    text: "Autobus",
  },
  {
    image: "./Pictures/vysavac.png",
    text: "To je vysavač",
  },
  {
    image: "./Pictures/fanta.png",
    text: "fanta",
  },
  {
    image: "./Pictures/food.png",
    text: "food",
  },
  {
    image: "./Pictures/hurt.png",
    text: "It is hurt",
  },
  {
    image: " /SpeechTextReader/Pictures/food.jpg",
    text: "It is hurt",
  },
];

data.forEach(createBox);

//Create speech boxes
function createBox(item) {
  const box = document.createElement("div");

  const { image, text } = item;

  box.classList.add("box");
  box.innerHTML = `
 <img src="${image} alt="${text}" />
 <p class="info"> ${text}</p> 
 `;

  // TODO -speak event

  main.appendChild(box);
}
