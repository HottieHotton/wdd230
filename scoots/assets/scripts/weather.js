//20.42294598332945, -86.91099951723233
//lat=20.42&lon=-86.91

const key="a7799dc19c21fbac507f0d66fec055f8";
const url=`https://api.openweathermap.org/data/2.5/forecast?lat=20.42&lon=-86.91&appid=${key}&units=imperial`;
const currenturl=`https://api.openweathermap.org/data/2.5/weather?lat=20.42&lon=-86.91&appid=${key}&units=imperial`;

function displayResults(data, day) {
    const div = document.querySelector(".weather");
    div.innerHTML = "";
    const todaydate = new Date(day.dt * 1000);
    const nameofday = todaydate.toLocaleString('en-US', { timeZone: 'America/Cancun' , weekday: 'short'});
    let todaytemp = Math.round(day.main.temp);
  
    div.innerHTML += `
          <div class="card">
              <h3 class="card-header">${nameofday} (Current)</h3>
              <section class="card-body">
                  <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png" alt="${day.weather[0].description}" loading="lazy">
                  <p>${todaytemp}&deg;F with ${day.weather[0].description}.</p>
              </section>
          </div>
      `;
  
    const filteredData = data.list.filter(item => item.dt_txt.includes("21:00:00")).slice(0, 3);
    filteredData.forEach(dayData => {
      const date = new Date(dayData.dt_txt);
      const dayOfWeek = date.toLocaleString('en-US', { timeZone: 'America/Cancun' , weekday: 'short'});
  
      let temp = Math.round(dayData.main.temp);
      div.innerHTML += `
          <div class="card">
              <h3 class="card-header">${dayOfWeek}</h3>
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