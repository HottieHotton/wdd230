const rangevalue = document.querySelector(".count");
const range = document.getElementById("page-rating");
console.log(rangevalue);

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.textContent = range.value;
}