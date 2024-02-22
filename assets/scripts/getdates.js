const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');
const visitsCounter = document.querySelector(".visits");

let counter = Number(window.localStorage.getItem("counter")) || 1;

if (counter > 2) {
	visitsCounter.textContent = counter;
} else if(counter < 2) {
	visitsCounter.innerHTML = `<br>This is your first visit. 🥳 Welcome!`;
}

counter++;

localStorage.setItem("counter", counter);

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

//Current Year
const currentYear = new Date().getFullYear();

//Collect modified date/time
const lastModified = document.lastModified;

//Apply Copyright symbol and current year
document.getElementById('copyright').innerHTML = `&copy; ${currentYear}<br>Braxton Hotton<br>Utah, USA`;

//Apply last modified to website
document.getElementById('lastModified').innerHTML = `Last Modified: ${lastModified}`