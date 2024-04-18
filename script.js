const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const questionPrompt = document.querySelector(".question-prompt");

let noButtonClickCount = 0; // Variable to track the number of times "no" button is clicked

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Em bé chạ iu anh 🥺<br>dỗiiii x10000000";
  gif.src = "https://media.giphy.com/media/vvc1dJPLEU2QOw9cXy/giphy.gif";
  hideElements();
});

noBtn.addEventListener("click", () => {
  noButtonClickCount++; // Increment the count each time "no" button is clicked
  if (noButtonClickCount > 3) { // Check if the count is more than 3
    question.innerHTML = "Em bé của anh là đáng iu nhất. Iu em 😘😘😘"; // Change the inner HTML of the question
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW9kM296MzNld2dyeXMzdGppYnVxeHAxbTN4ZG1keWIweXAwNjNneiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VXWyVyHi66NhTtpX2S/giphy.gif"; // Set a new source for the GIF
    hideElements();
  }
});

function hideElements() {
  yesBtn.style.display = "none"; // Hide both buttons and question prompt
  noBtn.style.display = "none";
  questionPrompt.style.display = "none";
}

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
