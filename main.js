const buttons = document.querySelectorAll(".button-rate");
const submitBtn = document.getElementById("submitBtn");
const rateNumber = document.querySelector(".rate-number");
const ratingContainer = document.querySelector(".rating-container");
const thankYouContainer = document.querySelector(".thank-you-container");

let buttonValue = 0;
let hasClicked = false;

const ResetUI = () => {
	buttons.forEach((btn) => {
		btn.classList.remove("selected");
	});
};
buttons.forEach((btn) => {
	btn.addEventListener("click", () => {
		hasClicked = true;
		ResetUI();
		btn.classList.add("selected");
		const value = Number(btn.value);
		buttonValue = value;
	});
});

submitBtn.addEventListener("click", () => {
	if (!hasClicked) return;
	hasClicked = true;
	rateNumber.textContent = buttonValue;
	ratingContainer.classList.add("hidden");
	thankYouContainer.classList.remove("hidden");
});
