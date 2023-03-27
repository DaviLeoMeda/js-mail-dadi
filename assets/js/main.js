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
        function playIt() {
            document.querySelector("you").innerHTML = "
        }
    } else {
        console.log("email non valida");
        document.querySelector(".ValidNot").classList.toggle('d-none');
    }




    function pullIt() {
        mailValide.push(emailPerson);
    }

}

function playIt() {
    return Math.floor(Math.random() * 10) + 1;
    console.log(playIt());
}

function turnback() {
    window.location.reload()
}


// function randomNumberWagon(min, max) {
//     return Math.floor(Math.random() * max) + min;




