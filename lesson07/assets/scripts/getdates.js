//Current Year
const currentYear = new Date().getFullYear();

//Collect modified date/time
const lastModified = document.lastModified;

//Apply Copyright symbol and current year
document.getElementById('copyright').innerHTML = `&copy; ${currentYear}<br>Braxton Hotton<br>Utah, USA`;

//Apply last modified to website
document.getElementById('lastModified').innerHTML = `Last Modified: ${lastModified}`