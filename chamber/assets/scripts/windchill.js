var calculateButton = document.getElementById("calculateButton");
calculateButton.addEventListener("click", calculateWindChill);

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
