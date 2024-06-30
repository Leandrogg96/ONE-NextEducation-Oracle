let secretNumber = Math.floor(Math.random()*20)+1;
let numberUser = 0;
let counterAttempt = 1;
let maximumAttempt = 4;

while (numberUser != secretNumber) {
    numberUser = parseInt(prompt("Can you give me a number between 0 and 20, please:"));

    console.log(numberUser);
/*
    The following code block performs the comparison
    between the entered number and the secret number
*/
    if (numberUser == secretNumber) {
        //if (counterAttempt == 1) {
            alert(`You got the correct number. Is ${numberUser}! You did it in ${counterAttempt} ${counterAttempt == 1 ? 'trie.' : 'tries.'}`);
        /*}else {
            alert(`You got the correct number. Is ${numberUser}! You did it in ${counterAttempt} tries.`);
        }*/
    } else {
        if (numberUser > secretNumber) {
            alert("The secret number is less than.");
        } else {
            alert("The secret number is greater than.")
        }
        alert("Sorry, you get the incorrect number!");
        if (counterAttempt > maximumAttempt) {
            alert(`You reached the maximum number of attempts ${counterAttempt}. Whis is.`);
            break;
        }
        counterAttempt++;
    }
}