const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

//Current Year
const currentYear = new Date().getFullYear();

//Collect modified date/time
const lastModified = document.lastModified;

//Apply Copyright symbol and current year
document.getElementById('copyright').innerHTML = `&copy; ${currentYear}<br>Braxton Hotton<br>Utah, USA
<br>Questions? Email me: <a href="mailto:bhotton25@gmail.com">bhotton25@gmail.com</a>`;

//Apply last modified to website
document.getElementById('lastModified').innerHTML = `Last Modified: ${lastModified}<br>This website is a project for my WDD230 BYU-Idaho Class`