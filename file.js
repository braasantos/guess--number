// Query selectors 
let btnAgainEl = document.querySelector('.again');
let btnChecknEl = document.querySelector('.check');
let textEl = document.querySelector('.text-middle');
let correctEl = document.querySelector('.correctEl');
let scoreEl = document.querySelector('.scoreEl');
let highEl = document.querySelector('.highEl');
let inputEl = document.querySelector('.inputEl');

// Generate random number
const secretNumber = Math.floor(Math.random()* 20) + 1;
let score = 20
let highscore = 0
scoreEl.innerHTML +=score

//Add functionality to the check button
btnChecknEl.addEventListener('click', function (){
  const guess = Number (document.querySelector('.inputEl').value);
  console.log(guess, typeof guess);
  if (!guess) {
    correctEl.innerHTML = 'Insert a valid number!'
  } else if (guess === secretNumber) {
    correctEl.innerHTML = 'Correct Number'
    textEl.innerHTML = secretNumber
    document.body.style.backgroundColor = '#60b347'
    if( score > highscore) {
      highscore = score;
      highEl.innerHTML = `Highscore: ${score}`;
    }
  } else if ( guess > secretNumber) {
    correctEl.innerHTML = 'Too high!'
    score--;
    document.querySelector('.scoreEl').innerHTML = `Score: ${score}`
    document.body.style.backgroundColor = 'red'
  } else if ( guess < secretNumber) {
    correctEl.innerHTML = 'Too low!'
    score--;
    document.querySelector('.scoreEl').innerHTML = `Score: ${score}`
    document.body.style.backgroundColor = 'red'
  }
});

//Add functionality to the again button
btnAgainEl.addEventListener('click', function() {
  score = 20;
  scoreEl.innerHTML = `Score: ${score}`;
  correctEl.innerHTML = 'Guess Number';
  textEl.innerHTML = '?'
  document.body.style.backgroundColor = 'white';
  inputEl.value = '';
})
