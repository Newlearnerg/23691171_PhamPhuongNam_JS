let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //Neu khong co input
    if(!guess){
        displayMessage('No number!');

        //Neu chon dung so
    }else if(guess == secretNumber){
        displayMessage('You guessed right!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        //Neu chon  sai so
    }else if(guess != secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? "Too high" : "Too low");
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage("You lose");
            document.querySelector('.score').textContent = 0;
        }
    }
});


//New game
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem';
});