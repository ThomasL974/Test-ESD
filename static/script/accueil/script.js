
const pop_condition = document.getElementById("container-condition");


document
    .getElementById("condition")
    .addEventListener('click', (e)=>{
        pop_condition.style.left = "50%";
    });

document
    .querySelector(".cross")
    .addEventListener('click', ()=>{
        pop_condition.style.left = "-100%";
    });

