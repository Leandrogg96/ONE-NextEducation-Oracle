/*
let title = document.querySelector('h1');
title.innerHTML = 'Secret number game';

let paragraph = document.querySelector('p');
paragraph.innerHTML = 'Indicates a number from 1 to 10';
*/

function generateSecretNumber() {
    return Math.floor(Math.random()*10)+1;
}

function assignElement(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
    return;
}

function verifyAttempt() {
    let numberUser = parseInt(document.getElementById('userValue').value);
    console.log(numberUser);    
    console.log(secretN1)
    console.log(numberUser === secretN1);

    return;
}


assignElement('h1', "Secret number game");
assignElement('p', "Indicates a number from 1 to 10");

let secretN1 = generateSecretNumber();