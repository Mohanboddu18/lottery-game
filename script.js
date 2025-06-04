const pick = document.getElementById("pick");
const result = document.getElementById("result");
const lotterySheetContainer = document.getElementById("lotterySheetContainer");
const pickedBox = document.getElementById("pickedBox");
const tick = new Audio("tap.wav");
const game = new Audio("Gamecompleted.wav");

const gifts = [
  "Wireless Earbuds",
  "Coffee Mug",
  "Tote Bag",
  "Power Bank",
  "Notebook Set",
  "Candle Set",
  "USB Flash Drive",
  "Reusable Water Bottle",
  "Portable Charger",
  "Perfume",
  "Phone Stand",
  "Laptop Sleeve",
  "Wall Art",
  "Mini Projector",
  "Keychain",
  "Desk Organizer",
  "Digital Alarm Clock",
  "Yoga Mat",
  "Hand Cream Set",
  "Smartwatch",
  "Sunglasses",
  "Pen Set",
  "Wireless Mouse",
  "Bluetooth Tracker",
  "Art Supplies",
  "Cooking Utensil Set",
  "Personalized Calendar",
  "Chocolate Box",
  "Backpack",
  "Face Mask Set",
  "Slippers",
  "Puzzle",
  "Wireless Keyboard",
  "PopSocket",
  "Travel Pillow",
  "Journal",
  "Phone Tripod",
  "Essential Oil Diffuser",
  "Mini Blender",
  "Action Camera",
  "Socks Gift Box",
  "Personalized Keyring",
  "Flashlight",
  "Desk Lamp",
  "Indoor Plant",
  "VR Headset",
  "Makeup Kit",
  "Travel Mug",
  "Instant Camera",
  "Subscription Box",
];

const boxElements = [];

gifts.forEach((gift, i) => {
  const div = document.createElement("div");
  div.className = "box";
  div.textContent = `${i + 1}. ${gift}`;
  lotterySheetContainer.appendChild(div);
  boxElements.push(div);
});

let previousHighlightedBox = null;
let flashInterval;

pick.addEventListener("click", () => {
  pickedBox.textContent = "Please wait...";
  result.textContent = "";

  if (previousHighlightedBox) {
    previousHighlightedBox.classList.remove("highlight");
  }

  // Remove all previous flashing borders
  boxElements.forEach((box) => box.classList.remove("flashing-border"));

  // Start flashing random boxes every second
  flashInterval = setInterval(() => {
    // Clear all flashing borders
    boxElements.forEach((box) => box.classList.remove("flashing-border"));
    tick.pause();
    tick.currentTime = 0;
    tick.play();
    // Add flashing to one random box
    const randomIndex = Math.floor(Math.random() * gifts.length);
    boxElements[randomIndex].classList.add("flashing-border");
  }, 1000);

  // After 5 seconds, stop flashing and show result
  setTimeout(() => {
    clearInterval(flashInterval);
    boxElements.forEach((box) => box.classList.remove("flashing-border"));
    const drawnNumber = Math.floor(Math.random() * gifts.length) + 1;
    const gift = gifts[drawnNumber - 1];
    game.pause();
    game.currentTime = 0;
    game.play();
    pickedBox.textContent = `#${drawnNumber} - ${gift}`;
    result.textContent = `You got number ${drawnNumber} and won "${gift}"!`;

    const selectedBox = boxElements[drawnNumber - 1];
    selectedBox.classList.add("highlight");
    previousHighlightedBox = selectedBox;
  }, 5000);
});
