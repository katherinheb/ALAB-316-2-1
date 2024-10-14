let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 10;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
 
    displayMessage('Error 404, no number found');

  } else if (guess === secretNumber) {

    displayMessage('You got it right!!!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = 'pink';
    document.querySelector('.number').style.width = '30rem';

    if (score) {
      score;
      document.querySelector('score').textContent = score;
    }

   
  } else if (guess !== secretNumber) {
    if (score > 2) {

      displayMessage(guess > secretNumber ? 'Number is too high' : 'Keep Trying!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {

      displayMessage('Better luck next time!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

});