const membersContainer = document.getElementById("members-container");
const viewToggle = document.getElementById("view-toggle");
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

viewToggle.addEventListener("change", function () {
    const selectedView = document.querySelector('input[name="view"]:checked').value;
    membersContainer.classList.toggle("grid-view", selectedView === "grid");
    membersContainer.classList.toggle("list-view", selectedView === "list");
});

fetchMembersData().then(displayMembers);
