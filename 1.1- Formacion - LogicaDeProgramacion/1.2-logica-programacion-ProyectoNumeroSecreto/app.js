/*
let title = document.querySelector('h1');
title.innerHTML = 'Secret number game';

let paragraph = document.querySelector('p');
paragraph.innerHTML = 'Indicates a number from 1 to 10';
*/
let secretN1 = 0;
let counterAttempt = 0;
let listSecretNumber = [];
let maxNumber = 10;


function generateSecretNumber() {
    let numberGenerated = Math.floor(Math.random()*maxNumber)+1;
    
    if (listSecretNumber.length == maxNumber) {
        assignElement('p', "All possible numbers hace already been assigned.")
    } else {
        if (listSecretNumber.includes(numberGenerated)) {
            return generateSecretNumber();
        } else {
            listSecretNumber.push(numberGenerated);
            return numberGenerated;
        }
    }
}

function assignElement(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
    return;
}

function verifyAttempt() {
    let numberUser = parseInt(document.getElementById('userValue').value);
        
        if (numberUser === secretN1) {
            assignElement('p', `You got it right in ${counterAttempt} ${counterAttempt === 1 ? "attempt" : "attempts"}!`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if (numberUser > secretN1) {
                assignElement('p', "You failed. The secret number is less.")
            } else {
                assignElement('p', "You failed. The secret number is greater.")
            }
            counterAttempt++;
            cleanBox();
        }
        
    return;
}

function restartGame() {
    cleanBox();
    
    initialCondition();
    
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    return;
}

function cleanBox () {
    let valueBox = document.querySelector('#userValue');
    valueBox.value = '';
    // document.querySelector('#userValue') = '';
}

function initialCondition() {
    assignElement('h1', "Secret number game");
    assignElement('p', `Indicates a number from 1 to ${maxNumber}`);

    secretN1 = generateSecretNumber();
    counterAttempt = 1;
}

initialCondition();
