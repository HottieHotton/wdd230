const key="a7799dc19c21fbac507f0d66fec055f8";
const url=`https://api.openweathermap.org/data/2.5/weather?lat=40.61&lon=-111.94&appid=${key}&units=imperial`;

function displayResults(data){
    const div = document.querySelector(".weather");
    let temp = Math.round(data.main.temp);
    div.innerHTML = `
    <img src="${`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}" alt="${data.weather[0].description}}" loading="lazy"></img>
    <p> - ${temp}&deg;F with ${data.weather[0].description}.</p>
    `
}

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