// todo, select the right things
const shrinkBtn = document.querySelector("#shrinkBtn"); // Selecting the shrink button element using its ID
const expandBtn = document.querySelector("#expandBtn"); // Selecting the expand button element using its ID
const photo = document.querySelector("#photo"); // Selecting the photo element using its ID

shrinkBtn.addEventListener("click", () => {
    photo.style.transform = "scale(0.5)"; // Applying the scale transformation of 0.5 to shrink the photo
});

expandBtn.addEventListener("click", () => {
    photo.style.transform = "scale(1)"; // Applying the scale transformation of 1 to restore the original size of the photo
});
