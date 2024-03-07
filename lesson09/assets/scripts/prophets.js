const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    const card = document.createElement("section");
    card.innerHTML = `
        <h2>${prophet.name} ${prophet.lastname}</h2>
        <h3>Date/Place of Birth: ${prophet.birthdate} in ${prophet.birthplace}</h3>
        <img src=${prophet.imageurl} alt="Image of ${prophet.name} ${prophet.lastname}" loading="lazy" width=340 height=440>
        `;
    cards.append(card);
  });
};

getData();
