//global variables used
var buttonColours = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

//function for playing sound
function sound(colour)
{
  var buttonSound = new Audio('sounds/'+colour+'.mp3');
  buttonSound.play();
}


function nextSequence()
{
  level++;
  userClickedPattern = [];
  $('h1').text('Level '+level);
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  //animation and sounds
  $('#'+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  sound(randomChosenColour);
}


//check clicked buttonfunction
function animatePress(currentColour)
{
  $('.'+currentColour).addClass('pressed');
  setTimeout(function()
  {
    $('.'+currentColour).removeClass('pressed');
  },100);
}
function handler()
{
  animatePress(this.id);
  var chosenColour = this.id;
  userClickedPattern.push(chosenColour);
  sound(this.id);
  checkAnswer(userClickedPattern.length - 1);
}
$('.btn').click(handler);

$('body').keydown(function()
{
  if(!started)
  {
    nextSequence();
  }
  started = true;
});

function checkAnswer(currentLevel)
{
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel])
  {
    console.log('right');
    if(gamePattern.length === userClickedPattern.length)
      setTimeout(function()
      {
        nextSequence()
      },1000);
  }
  else
    {
      var over = new Audio('sounds/wrong.mp3');
      over.play();
      $('#level-title').text('Game Over, Press any button to restart');
      $('body').addClass('game-over');
      setTimeout(function()
      {
        $('body').removeClass('game-over');
      },200);
      startOver();
    }
}

function startOver()
{
  gamePattern = [];
  userClickedPattern = [];
  level = 0;
  started = false;
}
