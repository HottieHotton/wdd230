const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.querySelector("body");
const head = document.querySelector("header");
const footer = document.querySelector("footer");
const boxes = document.querySelector(".boxes");
const coa = document.querySelector(".coa");
const events = document.querySelector(".events");
const block = document.querySelector(".block");

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
document.getElementById('lastModified').innerHTML = `Last Modified: ${lastModified}<br>This website is a project for my WDD230 BYU-Idaho Class`;




modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "grey";
		body.style.background = "#000";
		navigation.style.background = "darkgrey";
		head.style.background = "black";
		footer.style.background = "black";
		main.style.color = "#fff";
		body.style.color = "#fff";
		modeButton.textContent = "🔆";

		block.style.background = "grey";
		block.style.color = "white";
		coa.style.background = "black";
        coa.style.color = "#fff";
		coa.style.border = "solid 1px white";
        events.style.background = "black";
        events.style.color = "#fff";
        document.querySelectorAll('.boxes > div').forEach(box => {
            box.style.background = "black";
            box.style.color = "#fff";
			box.style.border = "solid 1px white";
        })
	} else {
		modeButton.textContent = "🕶️";
		main.style.background = "#06ADEF";
		main.style.color = "#000";
		body.style.background = "white";
		body.style.color = "black";
		navigation.style.background = "white";
		head.style.background = "#03254E";
		footer.style.background = "#03254E";

		block.style.background = "";
		block.style.color = "";
		coa.style.background = "";
        coa.style.color = "";
		coa.style.border = "";
        events.style.background = "";
        events.style.color = "";
        document.querySelectorAll('.boxes > div').forEach(box => {
            box.style.background = "";
            box.style.color = "";
			box.style.border = "";
        })
	}
});