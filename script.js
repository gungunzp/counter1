


document.addEventListener("DOMContentLoaded", function(event) { 

const hearedElement = document.querySelector('#heared > div');
const answeredElement = document.querySelector('#answered > div');
const declinedElement = document.querySelector('#declined > div');
const totalElement = document.querySelector('#total > div');

console.log(hearedElement)

let heared = Number(hearedElement.innerHTML);
let answered = Number(answeredElement.innerHTML);
let declined = Number(declinedElement.innerHTML);
let total = Number(totalElement.innerHTML);


// heared
document.querySelector('#heared').querySelector('button:first-of-type').addEventListener('click', function() {
    heared = heared - 1;
    hearedElement.innerHTML = heared;

    total = heared + answered + declined;
    totalElement.innerHTML = total;
});

document.querySelector('#heared').querySelector('button:last-of-type').addEventListener('click', function() {
    heared = heared + 1;
    hearedElement.innerHTML = heared;

    total = heared + answered + declined;
    totalElement.innerHTML = total;
});


// answered
document.querySelector('#answered').querySelector('button:first-of-type').addEventListener('click', function() {
    answered = answered - 1;
    answeredElement.innerHTML = answered;

    total = heared + answered + declined;
    totalElement.innerHTML = total;
});

document.querySelector('#answered').querySelector('button:last-of-type').addEventListener('click', function() {
    answered = answered + 1;
    answeredElement.innerHTML = answered;

    total = heared + answered + declined;
    totalElement.innerHTML = total;
});


// declined
document.querySelector('#declined').querySelector('button:first-of-type').addEventListener('click', function() {
    declined = declined - 1;
    declinedElement.innerHTML = declined;

    total = heared + answered + declined;
    totalElement.innerHTML = total;
});

document.querySelector('#declined').querySelector('button:last-of-type').addEventListener('click', function() {
    declined = declined + 1;
    declinedElement.innerHTML = declined;

    total = heared + answered + declined;
    totalElement.innerHTML = total;
});


// total
document.querySelector('#declined').querySelector('button:first-of-type').addEventListener('click', function() {
    declined = declined - 1;
    declinedElement.innerHTML = declined;

    total = heared + answered + declined;
    totalElement.innerHTML = total;
});

document.querySelector('#declined').querySelector('button:last-of-type').addEventListener('click', function() {
    declined = declined + 1;
    declinedElement.innerHTML = declined;
    
    total = heared + answered + declined;
    totalElement.innerHTML = total;
});






});

