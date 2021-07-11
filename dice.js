var started = false;
function roll()
{
  var roll = new Audio('diceroll.mpeg');
  roll.play();

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  $('#dice1').attr('src','images/dice' + randomNumber1 + '.png');
  $('#dice2').attr('src','images/dice' + randomNumber2 + '.png');

  if(randomNumber1 > randomNumber2)
    $('h1').text('player 1 wins 🥳 press a key to roll again');
  else
  if(randomNumber1 < randomNumber2)
    $('h1').text('player 2 wins 🥳 press a key to roll agains');
  else
    $('h1').text('draw 😶');
}
$('body').keydown(function()
  {
    roll();
  });
