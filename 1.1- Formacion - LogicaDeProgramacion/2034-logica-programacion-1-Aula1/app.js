let numberUser = prompt("Can you give me a number between 0 and 20, please:");
let secretNumber = 6;


console.log(numberUser);

/*
    The following code block performs the comparison
    between the entered number and the secret number
*/

if (numberUser == secretNumber) {
    alert(`You got the correct number. Is ${numberUser}!`);
} else {
    alert("Sorry, you get de incorrect number!");
}

