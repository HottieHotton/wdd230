const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.querySelector("body");
const head = document.querySelector("header");
const footer = document.querySelector("footer");
const boxes = document.querySelector(".boxes");
const coa = document.querySelector(".coa");
const events = document.querySelector(".events");
const block = document.querySelector(".block");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

//Current Year
const currentYear = new Date().getFullYear();

//Collect modified date/time
const lastModified = document.lastModified;

//Apply Copyright symbol and current year
document.getElementById(
  "copyright"
).innerHTML = `&copy; ${currentYear}<br>Braxton Hotton<br>Utah, USA`;

//Apply last modified to website
document.getElementById(
  "lastModified"
).innerHTML = `Last Modified: ${lastModified}<br>This website is a project for my WDD230 BYU-Idaho Class`;

modeButton.addEventListener("click", () => {
  if (modeButton.textContent.includes("🌙")) {
    main.style.background = "grey";
    body.style.background = "#000";
    navigation.style.background = "darkgrey";
    document.querySelectorAll("nav a").forEach((link) => {
      link.style.color = "black";
    });
    head.style.background = "black";
    footer.style.background = "black";
    main.style.color = "#fff";
    body.style.color = "#fff";
    modeButton.textContent = "🔆";
    document.querySelectorAll(".boxes > div").forEach((box) => {
      box.style.background = "black";
      box.style.color = "#fff";
      box.style.border = "solid 1px white";
    });

    document.querySelectorAll(".spotlights .text-manager").forEach((item) => {
      item.style.background = "black";
      item.style.color = "white";
      item.style.border = "1px solid white";
    });
    
    document.querySelectorAll(".spotlights .text-manager a").forEach((itemLink) => {
      itemLink.style.color = "white";
    });

    document.querySelectorAll(".membership-benefits").forEach((table) => {
      table.style.color = "black";
    });

    document
      .querySelectorAll(".forecast, .card, .card-body")
      .forEach((forecast) => {
        forecast.style.background = "black";
        forecast.style.color = "#fff";
      });
    document
      .querySelectorAll(".card")
      .forEach((card) => {
        card.style.border = "1px solid white";
      });

    document.querySelectorAll(".card-body img").forEach((img) => {
      img.style.background = "none";
    });

    document.querySelectorAll(".boxes > div > section").forEach((box) => {
      document.querySelectorAll("section a").forEach((link) => {
        link.style.color = "white";
      });
      document.querySelectorAll(".attractions img").forEach((image) => {
        image.style.boxShadow = "box-shadow: 0 0 50px white";
      });
      box.style.background = "black";
      box.style.color = "#fff";
      box.style.border = "solid 1px white";
    });

    if (document.querySelector(".home") != null) {
      block.style.background = "grey";
      block.style.color = "white";
      coa.style.background = "black";
      coa.style.color = "#fff";
      coa.style.border = "solid 1px white";
      events.style.background = "black";
      events.style.color = "#fff";
    }

    document.querySelectorAll(".eventlist div").forEach((event) => {
      event.style.color = "white";
      event.style.background = "black";
      event.style.border = "1px solid white";
    })

    document.querySelectorAll(".member").forEach((member) => {
      member.style.background = "grey";
    });

    document.querySelectorAll(".member p a").forEach((memberLink) => {
      memberLink.style.color = "white";
    });
  } else {
    modeButton.textContent = "🌙";
    main.style.background = "#06ADEF";
    main.style.color = "#000";
    body.style.background = "white";
    body.style.color = "black";
    navigation.style.background = "white";
    document.querySelectorAll("nav a").forEach((link) => {
      link.style.color = "";
    });
    head.style.background = "#03254E";
    footer.style.background = "#03254E";
    document.querySelectorAll(".boxes > div").forEach((box) => {
      box.style.background = "";
      box.style.color = "";
      box.style.border = "";
    });

    document.querySelectorAll(".spotlights .text-manager").forEach((item) => {
      item.style.background = "";
      item.style.color = "";
      item.style.border = "";
    });
    
    document.querySelectorAll(".spotlights .text-manager a").forEach((itemLink) => {
      itemLink.style.color = "";
    });

    document
      .querySelectorAll(".forecast, .card, .card-body")
      .forEach((forecast) => {
        forecast.style.background = "";
        forecast.style.color = "";
      });

    document
      .querySelectorAll(".card")
      .forEach((card) => {
        card.style.border = "";
      });

    document.querySelectorAll(".card-body img").forEach((img) => {
      img.style.background = "lightgrey";
    });

    document.querySelectorAll(".boxes > div > section").forEach((box) => {
      document.querySelectorAll(".attractions img").forEach((image) => {
        image.style.boxShadow = "";
      });
      document.querySelectorAll("section a").forEach((link) => {
        link.style.color = "";
      });
      box.style.background = "";
      box.style.color = "";
      box.style.border = "";
    });

    if (document.querySelector(".home") != null){
      block.style.background = "";
      block.style.color = "";
      coa.style.background = "";
      coa.style.color = "";
      coa.style.border = "";
      events.style.background = "";
      events.style.color = "";
    }

    document.querySelectorAll(".eventlist div").forEach((event) => {
      event.style.color = "";
      event.style.background = "";
      event.style.border = "";
    })

    document.querySelectorAll(".member").forEach((member) => {
      member.style.background = "";
    });

    document.querySelectorAll(".member p a").forEach((memberLink) => {
      memberLink.style.color = "black";
    });
  }
});

function getCurrentDate() {
  const now = new Date();
  return now.toISOString().split("T")[0];
}

function getDateDifference(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

function displayMessage() {
  const currentDate = getCurrentDate();
  const lastVisitDate = localStorage.getItem("lastVisitDate");
  document.querySelectorAll(".page-view").forEach((view) => {
    if (!lastVisitDate) {
      // First visit
      document.querySelector(".page-view").innerText =
        "Welcome! Let us know if you have any questions.";
    } else {
      const daysSinceLastVisit = getDateDifference(lastVisitDate, currentDate);

      if (daysSinceLastVisit === 1) {
        document.querySelector(
          ".page-view"
        ).innerText = `You last visited 1 day ago.`;
      } else if (daysSinceLastVisit < 1) {
        document.querySelector(
          ".page-view"
        ).innerText = `Back so soon! Awesome!`;
      } else {
        document.querySelector(
          ".page-view"
        ).innerText = `You last visited ${daysSinceLastVisit} days ago.`;
      }
    }
  });

  localStorage.setItem("lastVisitDate", currentDate);
}

displayMessage();

if (block != null) {
  block.addEventListener("click", () => {
    window.location.href = "join.html";
  });
}