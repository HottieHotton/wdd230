const jsonPath = "./data/rentals.json";

async function getData() {
    const response = await fetch(jsonPath);
    const data = await response.json();
    console.log(data)
    displayData(data)
  }



  function displayData(data){
    const rentalsContainer = document.querySelector('.rentals');
    
    for (const rentalType in data) {
        const rental = data[rentalType];

        const rentalDiv = document.createElement('div');
        rentalDiv.classList.add('rental');

        let html = `<h2>${rentalType}</h2>`;
        html += `<img src="${rental.image_url}"  alt="${rentalType}" loading="lazy"">`
        html += `<p>Max Persons: ${rental["Max Persons"]}</p>`;
        html += '<ul>';
        html += `<li>Reservation - Half Day (3 hrs): $${rental.Reservation["Half Day (3 hrs)"].Price}</li>`;
        html += `<li>Reservation - Full Day: $${rental.Reservation["Full Day"].Price}</li>`;
        html += `<li>Walk-In - Half Day (3 hrs): $${rental["Walk-In"]["Half Day (3 hrs)"].Price}</li>`;
        html += `<li>Walk-In - Full Day: $${rental["Walk-In"]["Full Day"].Price}</li>`;
        html += '</ul>';

        rentalDiv.innerHTML = html;
        rentalsContainer.appendChild(rentalDiv);
    }

  }
getData();