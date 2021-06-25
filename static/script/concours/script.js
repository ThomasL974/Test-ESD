const container_question = document.getElementById("container-question");
const container_validation = document.getElementById("container-validation");
const container_result = document.getElementById("container-result");

const circle_result = document.getElementById('circle-result');
const circle_hide = document.getElementById('circle-hide');
const gratitude = document.querySelector('.gratitude p');
const questionnaire_results = document.getElementById('questionnaire-results');

const questions_form = document.getElementById('questions-form');
const question = document.querySelectorAll('.question');

const send_form = document.getElementById('send_form');

var name = "";
var first_name = "";
var companion = "";
var mail = "";
var count = 0;
var nb_question = question.length;
var notice = "";

// ****************Question form************************ */
questions_form.addEventListener('submit', (e) => {
    e.preventDefault();

    const founder = questions_form.elements.founder.value;
    const years = questions_form.elements.years.value;
    const city = questions_form.elements.city.value;
    const technology = questions_form.elements.technology.value;
    const name_intervention = questions_form.elements.name.value;

    if(founder === 'Jack Wayman'){
        count++;
    }
    if(years === '1967'){
        count++;
    }
    if(city === 'New York'){
        count++;
    }
    if(technology === 'DVD'){
        count++;
    }
    if(name_intervention === 'Keynotes'){
        count++;
    }

    container_validation.style.display = "flex";
    container_question.style.display = "none";
});

/*****************Contact form************************** */
send_form.addEventListener('submit', (e) =>{
    e.preventDefault();

    name = send_form.elements.name.value;
    first_name = send_form.elements.first_name.value;
    mail = send_form.elements.mail.value;
    companion = send_form.elements.companion.value;

    if(count === nb_question){
        notice = "Bravo !";
    }else{
        notice = "Une prochaine fois !";
    }
    
    questionnaire_results.innerHTML = `${count} / ${nb_question}<br>${notice}`;
    gratitude.innerHTML = `Merci <strong>${first_name}</strong> d'avoir participé à notre concours`;
    container_validation.style.display = "none";
    container_result.style.display = "flex";
});

/***********************Circle animation********************* */
circle_result.addEventListener('click', () =>{
    circle_hide.style.top = "-100%";
});

