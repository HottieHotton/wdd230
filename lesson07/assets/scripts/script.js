const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

input.value = "";
input.focus();

button.addEventListener("click", () => {
  if (input.value != "") {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
  } else {
    alert("You must enter a scripture to the field");
    input.focus();
  }
});

function displayList(item) {
  const li = document.createElement("li");
  const delbutton = document.createElement("button");
  li.innerHTML = item;
  delbutton.textContent = "❌";
  li.append(delbutton);
  list.append(li);

  delbutton.addEventListener("click", () => {
    if (window.confirm("Are you sure you wish to delete this scipture?")) {
      list.removeChild(li);
      deleteChapter(li.textContent);
      input.focus();
    } else {
      stop;
    }
  });
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}

function setChapterList() {
  localStorage.setItem("bomList", JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem("bomList"));
}