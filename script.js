const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Function to move the "No" button
const moveNoButton = (e) => {
  // Prevent the button from actually being clicked on mobile
  if (e && e.type === 'touchstart') e.preventDefault();

  // 1. Calculate the available screen space
  // Subtracting the button size and a 20px margin to keep it on screen
  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;

  // 2. Generate random coordinates
  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  // 3. Make the button jump anywhere on the screen
  noBtn.style.position = "fixed"; // This allows it to leave the 'container'
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
};

// Listen for both desktop mouse hover and mobile finger touch
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

// "Yes" button functionality
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "block";

  // Fire confetti if you included the library in your HTML
  if (typeof confetti === "function") {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
  }

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "block";
    if (gifResult) gifResult.play();
  }, 3000);
});
