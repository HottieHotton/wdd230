const key="a7799dc19c21fbac507f0d66fec055f8";
const url=`https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=${key}&units=imperial`;

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

function displayResults(data){
    let temp = Math.round(data.main.temp);
    currentTemp.innerHTML = `${temp}&deg;F`;
    let desc = data.weather[0].description.toUpperCase();
    captionDesc.textContent = `${desc}`;
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    weatherIcon.setAttribute('alt', `${desc}`);
    weatherIcon.setAttribute('loading', 'lazy');
};

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            displayResults(data);
            console.log(data);
        }else{
            throw new Error(await response.text());
        }
    }catch(error){
        console.log(error);
    }
}

apiFetch();