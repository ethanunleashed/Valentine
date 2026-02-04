const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Updated runaway logic to stay within bounds
const moveNoButton = (e) => {
  if (e.type === 'touchstart') e.preventDefault();

  // 1. Use the window size instead of container size for full freedom
  // 2. Subtract button size so it never peeks off the edge
  const padding = 20; 
  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  // 3. Ensure the coordinates are at least 'padding' distance from the top/left
  const newX = Math.max(padding, Math.floor(Math.random() * maxX));
  const newY = Math.max(padding, Math.floor(Math.random() * maxY));

  // 4. Use 'fixed' so it ignores the parent container's boundaries
  noBtn.style.position = "fixed";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
};

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

// Yes button functionality remains the same
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "block"; // Changed 'inherit' to 'block' for better support

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "block";
    if (gifResult) gifResult.play();
  }, 3000);
});
