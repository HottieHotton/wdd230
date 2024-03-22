const membersContainer = document.getElementById("members-container");
const viewToggle = document.getElementById("view-toggle");
const spotlight = document.querySelector(".spotlights");
const membersData = "./data/members.json";

function fetchMembersData() {
  return fetch(membersData)
    .then((response) => response.json())
    .then((data) => data.members);
}

// Function to display members
function displayMembers(members) {
  membersContainer.innerHTML = "";
  members.forEach((member) => {
    const memberItem = document.createElement("div");
    memberItem.classList.add("member");
    memberItem.innerHTML = `
                <img src="${member.image}" alt="${member.name} loading="lazy"">
                <div class="text-manager">
                    <h2>${member.name}</h2>
                    <p>${member.address}</p>
                    <p>Phone: ${member.phone}</p>
                    <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p>Membership Level: ${member.membership_level}</p>
                    <p>${member.other_information}</p>
                </div>
            `;
    membersContainer.appendChild(memberItem);
  });
}

function businessSpotlight(member) {
  for (let i = 0; i < 4; i++) {
    let num = Math.floor(Math.random() * 10);
    if (member[num].membership_level == "Gold" || member[num].membership_level == "Silver") {
      let spotlightDisplay = document.createElement("div");
      spotlightDisplay.classList.add("text-manager");
      spotlightDisplay.innerHTML= `
                    <h3>${member[num].name}</h3>
                    <p>${member[num].address}</p>
                    <p>Phone: ${member[num].phone}</p>
                    <p>Website: <a href="${member[num].website}" target="_blank">${member[num].website}</a></p>
                    <p>Membership Level:<br> ${member[num].membership_level}</p>
                    <p>${member[num].other_information}</p>
            `;
      spotlight.append(spotlightDisplay)
    } else {
      i--;
    }
  }
}

if(viewToggle != null){
viewToggle.addEventListener("change", function () {
  const selectedView = document.querySelector(
    'input[name="view"]:checked'
  ).value;
  membersContainer.classList.toggle("grid-view", selectedView === "grid");
  membersContainer.classList.toggle("list-view", selectedView === "list");
});
}

if (document.querySelector(".spotlights") != null) {
  fetchMembersData().then(businessSpotlight);
}

if (document.getElementById("members-container") != null) {
  fetchMembersData().then(displayMembers);
}
