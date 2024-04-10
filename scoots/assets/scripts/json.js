const jsonPath = "./data/rentals.json";

async function getData() {
  // const response = await fetch(jsonPath);
  // const data = await response.json();
  // console.log(data)
  // displayData(data)
  return fetch(jsonPath)
    .then((response) => response.json())
    .then((data) => data);
}

function displayData(data) {
  const rentalsContainer = document.querySelector(".rentals");

  for (const rentalType in data) {
    const rental = data[rentalType];

    const rentalDiv = document.createElement("div");
    rentalDiv.classList.add("rental");

    let html = `<h2>${rentalType}</h2>`;
    html += `<img src="${rental.image_url}"  alt="${rentalType}" loading="lazy"">`;
    html += `<p>Max Persons: ${rental["Max Persons"]}</p>`;
    html += "<ul>";
    html += `<li>Reservation - Half Day (3 hrs): $${rental.Reservation["Half Day (3 hrs)"].Price}</li>`;
    html += `<li>Reservation - Full Day: $${rental.Reservation["Full Day"].Price}</li>`;
    html += `<li>Walk-In - Half Day (3 hrs): $${rental["Walk-In"]["Half Day (3 hrs)"].Price}</li>`;
    html += `<li>Walk-In - Full Day: $${rental["Walk-In"]["Full Day"].Price}</li>`;
    html += "</ul>";

    rentalDiv.innerHTML = html;
    rentalsContainer.appendChild(rentalDiv);
  }
}

function spotlight(data) {
  const rentalsContainer = document.querySelector(".sneak-rental");
  const rentalTypes = Object.keys(data);
  const numRentals = rentalTypes.length;
  const displayedRentals = new Set();

  for (let i = 0; i < 2; i++) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * numRentals);
    } while (displayedRentals.has(randomIndex));
    const rentalType = rentalTypes[randomIndex];
    const rental = data[rentalType];

    const rentalDiv = document.createElement("div");

    let html = `<h2>${rentalType}</h2>`;
    html += `<img src="${rental.image_url}" alt="${rentalType}" loading="lazy" width=75% height=75%>`;

    rentalDiv.innerHTML = html;
    rentalsContainer.appendChild(rentalDiv);
    displayedRentals.add(randomIndex);
  }
}

if (document.querySelector(".sneak-rental") != null) {
  getData().then(spotlight);
}else if (document.querySelector(".rentals") != null) {
  getData().then(displayData);
}
