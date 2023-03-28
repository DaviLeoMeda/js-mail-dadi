// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


function sendemail() {

    let emailPerson = document.getElementById("emailInvite").value;



    let mailValide = ['laurapausini@gmail.com', 'rocknroll@ironmaiden.org', 'ladygaga@gmail.com', 'alexlodi@gmail.com', 'mattiafolcarelli@gmail.com', 'fabiolagardin@alfi.com', 'charlesthird@buckingampalace.org', 'gabrielepiazzoni@arcigay.it']

    console.log(mailValide);

    let validazione = false;

    for (let i = 0; i <= mailValide.length; i++) {

        if (mailValide[i] == document.getElementById("emailInvite").value) {

            validazione = true;
        }
    }

    if (validazione == true) {
        console.log("email valida");
        document.querySelector(".ValidOk").classList.toggle('d-none');

    } else {
        console.log("email non valida");
        document.querySelector(".ValidNot").classList.toggle('d-none');
    }




    function pullIt() {
        mailValide.push(emailPerson);
    }

}

function randomNumber(max, min) {
    return Math.floor(Math.random() * max) + min;
}

function playIt() {
    let cpu = randomNumber(10, 1);
    let human = randomNumber(10, 1);
    console.log(cpu, human);

    document.querySelector(".pc").innerHTML = `<p>${cpu}</p>`;
    document.querySelector(".yours").innerHTML = `<p>${human}</p>`;

    if (cpu == human) {
        document.querySelector(".winner").innerHTML = `Pareggio!!!`
        document.querySelector(".pc").element.classList.add("bg-primary");
        document.querySelector(".yours").element.classList.add("bg-primary");
    } else if (cpu > human) {
        document.querySelector(".winner").innerHTML = `Ha vinto il computer e tu paghi`
        document.querySelector(".pc").element.classList.add("bg-success");
        document.querySelector(".yours").element.classList.add("bg-primary");

    } else if (cpu < human) {
        document.querySelector(".winner").innerHTML = `Hai vinto tu! Serata gratis!`
        document.querySelector(".pc").element.classList.add("bg-primary");
        document.querySelector(".yours").element.classList.add("bg-success");

    }

    function turnback() {
        window.location.reload()
    }
}

// function randomNumberWagon(min, max) {
//     return Math.floor(Math.random() * max) + min;




