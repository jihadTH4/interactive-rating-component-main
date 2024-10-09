let submitBtn = document.getElementById('submit');
let numsButton = document.querySelectorAll('.numbers button');
let ratingCard = document.querySelector('.rating-state');
let thanksCard = document.querySelector('.thanks-state');
let rate = document.querySelector('.rate');

let activeIndex = -1; // No button is active initially

for (let i = 0; i < numsButton.length; i++) {
    numsButton[i].onclick = () => {
        // Reset the previously active button, if any
        if (activeIndex !== -1) {
            numsButton[activeIndex].style.backgroundColor = "hsl(213, 19%, 18%)"; // Default background color
            numsButton[activeIndex].style.color = "hsl(0, 0%, 100%)"; // Default text color
        }

        // Set the new active button
        activeIndex = i;
        numsButton[activeIndex].style.backgroundColor = "hsl(0, 0%, 100%)"; // Active background color
        numsButton[activeIndex].style.color = "hsl(216, 12%, 8%)"; // Active text color

        // Update the selected rate text
        rate.innerHTML = `You selected ${numsButton[activeIndex].textContent} out of 5`;
    };
}

submitBtn.onclick = function () {
    // Only proceed if a rating was selected
    if (activeIndex !== -1) {
        ratingCard.style.display = "none";
        thanksCard.style.display = "flex";
    } else {
        alert("Please select a rating before submitting!");
    }
};
