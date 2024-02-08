const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

const li = document.createElement('li');
const delbutton = document.createElement('button');

input.value = "";
input.focus();


button.addEventListener('click', () => {
    if(input.value != ''){
        console.log("Working");
        li.innerHTML = input.value;
        delbutton.textContent = '❌';
        li.append(delbutton);
        list.append(li);
    }else{
        console.log("Doing a dumb");
        input.focus();
    }
});

delbutton.addEventListener('click', () => {
    list.removeChild(li);
    input.focus();
})