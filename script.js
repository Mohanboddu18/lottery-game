const pickNumberBtn = document.getElementById("pickNumberBtn");
const resultBtn = document.getElementById("result");
const lotterySheetContainer = document.getElementById("lotterySheetContainer");
const pickedBox = document.getElementById("pickedBox");
const tick = new Audio("tap.wav");
const win = new Audio("win.wav");

const gifts = [
  "Wireless Earbuds",
  "Coffee Mug",
  "Tote Bag",
  "Power Bank",
  "Notebook Set",
  "Candle Set",
  "USB Flash Drive",
  "Copper Bottle",
  "Portable Charger",
  "Perfume",
  "Phone Stand",
  "Laptop Sleeve",
  "Wall Art",
  "Mini Projector",
  "Keychain",
  "Desk Organizer",
  "Alarm Clock",
  "Yoga Mat",
  "Hand Cream Set",
  "Smartwatch",
  "Sunglasses",
  "Pen Set",
  "Wireless Mouse",
  "Bluetooth Tracker",
  "Art Supplies",
  "Cooking Utensil",
  "Calendar",
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
  "Essential Oil",
  "Mini Blender",
  "Action Camera",
  "Socks Gift Box",
  "Keyring",
  "Flashlight",
  "Desk Lamp",
  "Indoor Plant",
  "VR Headset",
  "Makeup Kit",
  "Travel Mug",
  "Instant Camera",
  "Subscription Box",
];

console.log(gifts);

pickNumberBtn.addEventListener("click", function () {
  for (let i = 1; i < 50; i++) {
    document.getElementById(i).classList.remove("winningBox");
  }
  resultBtn.textContent = "Please wait...";
  pickedBox.textContent = "Please wait...";
  // setTimeout(function () {
  //   let randomNum = Math.random() * gifts.length;
  //   let drawnNumber = Math.floor(randomNum) + 1;
  //   const gift = gifts[drawnNumber - 1];
  //   resultBtn.textContent = `You have got ${drawnNumber}, and you won ${gift}`;
  //   document.getElementById(drawnNumber).classList.add("winningBox");
  // }, 5000);

  let secoundsCount = 0;
  const intervalId = setInterval(function () {
    tick.pause();
    tick.currentTime = 0;
    tick.play();
    secoundsCount = secoundsCount + 1;
    const randomBox = Math.floor(Math.random() * 50) + 1;
    console.log(randomBox);
    for (let i = 1; i <= 50; i++) {
      if (i === randomBox) {
        document.getElementById(i).classList.add("highlightedBox");
      } else {
        document.getElementById(i).classList.remove("highlightedBox");
      }
    }

    if (secoundsCount === 5) {
      let randomNum = Math.random() * 50;
      let drawnNumber = Math.floor(randomNum) + 1;
      const gift = gifts[drawnNumber - 1];
      resultBtn.textContent = `You have got ${drawnNumber}, and you won ${gift}`;
      document.getElementById(randomBox).classList.remove("highlightedBox");
      document.getElementById(drawnNumber).classList.add("winningBox");
      pickedBox.textContent = `#${drawnNumber} - ${gift}`;
      result.textContent = `You got number ${drawnNumber} and won "${gift}"!`;
      win.pause();
      win.currentTime = 0;
      win.play();
      clearInterval(intervalId);
    }
  }, 1000);
});

if (lotterySheetContainer) {
  gifts.forEach(function (value, i) {
    const boxElement = `<div class="box" id=${i + 1}> ${
      i + 1
    }. ${value} </div>`;
    lotterySheetContainer.insertAdjacentHTML("beforeend", boxElement);
  });
}
