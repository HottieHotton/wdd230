const baseURL = "https://HottieHotton.github.io/wdd230/";
const linksURL = "https://HottieHotton.github.io/wdd230/data/links.json";

async function getData() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

function displayLinks(data){
    const ul = document.querySelector('.ul');
    data.lessons.forEach(lessonNum => {
        const li = document.createElement('li');
        li.innerHTML = `${lessonNum.lesson}: `;
        lessonNum.links.forEach(link => {
            const a = `<a href="${link.url}" target="_blank">${link.title}</a>`;
            li.innerHTML += a + " | ";
        });
        //Questioned ChatGPT on how to remove the trailing '|' marks
        li.innerHTML = li.innerHTML.slice(0, -3);
        ul.appendChild(li);
      });
};

getData();
