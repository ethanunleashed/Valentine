const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Function to move the "No" button
const moveNoButton = (e) => {
  // Prevent mobile phones from "clicking" the button while it moves
  if (e.type === 'touchstart') e.preventDefault();

  // Calculate the max available space on the screen
  const padding = 20;
  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  // Generate random coordinates within the screen bounds
  const newX = Math.max(padding, Math.floor(Math.random() * maxX));
  const newY = Math.max(padding, Math.floor(Math.random() * maxY));

  // Use 'fixed' positioning so it can move anywhere relative to the window
  noBtn.style.position = "fixed";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
};

// Add listeners for both mouse (Desktop) and touch (Mobile)
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

// Yes button functionality
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "block";

  // Trigger confetti if the library is loaded
  if (window.confetti) {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "block";
    if (gifResult) gifResult.play();
  }, 3000);
});
