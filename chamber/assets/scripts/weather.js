var calculateButton = document.getElementById("calculateButton");
calculateButton.addEventListener("click", calculateWindChill);
const key="a7799dc19c21fbac507f0d66fec055f8";
const url=`https://api.openweathermap.org/data/2.5/forecast?lat=40.61&lon=-111.94&appid=${key}&units=imperial`;
const currenturl=`https://api.openweathermap.org/data/2.5/weather?lat=40.61&lon=-111.94&appid=${key}&units=imperial`;

function calculateWindChill() {
  var temperatureInput = document.getElementById("temperatureInput");
  var windSpeedInput = document.getElementById("windSpeedInput");
  var windChillElement = document.getElementById("windChill");

  var temperature = parseFloat(temperatureInput.value);
  var windSpeed = parseFloat(windSpeedInput.value);

  if (isNaN(temperature) || isNaN(windSpeed)) {
    alert(
      "Please enter valid numerical values for temperature and wind speed."
    );
    return;
  }

  if (temperature <= 50 && windSpeed > 3.0) {
    var windChill = calculateWindChillFormula(temperature, windSpeed);
    windChillElement.innerText = windChill.toFixed(1);
  } else {
    windChillElement.innerText = "N/A";
  }
}

function calculateWindChillFormula(temperature, windSpeed) {
  return (35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));
}

function displayResults(data, day) {
  const div = document.querySelector(".forecast");
  div.innerHTML = "";
  const todaydate = new Date(day.dt * 1000);
  const nameofday = todaydate.toLocaleString('en-US', { weekday: 'short' });
  let todaytemp = Math.round(day.main.temp);

  div.innerHTML += `
        <div class="card">
            <h4 class="card-header">${nameofday} (Current)</h4>
            <section class="card-body">
                <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png" alt="${day.weather[0].description}" loading="lazy">
                <p>${todaytemp}&deg;F with ${day.weather[0].description}.</p>
            </section>
        </div>
    `;

  const filteredData = data.list.filter(item => item.dt_txt.includes("21:00:00")).slice(0, 3);
  filteredData.forEach(dayData => {
    const date = new Date(dayData.dt_txt);
    const dayOfWeek = date.toLocaleString('en-US', { weekday: 'short' });

    let temp = Math.round(dayData.main.temp);
    div.innerHTML += `
        <div class="card">
            <h4 class="card-header">${dayOfWeek}</h4>
            <section class="card-body">
                <img src="https://openweathermap.org/img/wn/${dayData.weather[0].icon}.png" alt="${dayData.weather[0].description}" loading="lazy">
                <p>${temp}&deg;F with ${dayData.weather[0].description}.</p>
            </section>
        </div>
    `;
});
}

async function apiFetch(){
    try{
        const response = await fetch(url);
        const current = await fetch(currenturl);
        if (response.ok && current.ok){
            const data = await response.json();
            const day = await current.json();
            displayResults(data, day);
        }else{
            throw new Error(await response.text());
        }
    }catch(error){
        console.log(error);
    }
}

apiFetch();


//Seperate data specifically for index.html page

const banner = document.querySelector('.banner');
const closeBannerBtn = document.getElementById('closeBanner');

function isWeekday() {
    const today = new Date().getDay();
    if(today >= 1 && today <= 3){
      banner.style.display = 'block';
    }else{
      banner.style.display = 'none';
    }
}

closeBannerBtn.addEventListener('click', () => {
    banner.style.display = 'none';
});

isWeekday();