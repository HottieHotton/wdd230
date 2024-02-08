const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

input.value = "";
input.focus();


button.addEventListener('click', () => {
    if(input.value != ''){
        console.log("Working");
        const li = document.createElement('li');
        const delbutton = document.createElement('button');
        li.innerHTML = input.value;
        delbutton.textContent = '❌';
        li.append(delbutton);
        list.append(li);

        delbutton.addEventListener('click', () => {
            if(window.confirm("Are you sure you wish to delete this scipture?")){
                list.removeChild(li);
                input.focus();
            }else{
                stop;
            }
        });
    }else{
        console.log("Doing a dumb");
        input.focus();
    }
});

