
    var guessnumber = document.getElementById("guessno");
    var resultstatement = document.getElementById("result");
    var scoreElement = document.getElementById("score");
    var winmessageElement=document.getElementById("win,message");
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    var totalscore = 10;
    
    function check() {
        var enterednumber = parseInt(guessnumber.value, 10);
    if(isNaN(enterednumber)||enterednumber<1||enterednumber>10)
        {
            resultstatement.textContent="Please enter a number between 1 and 10";
            return;
        }
        if (randomNumber === enterednumber) 
            {
            //console.log("Right");
            resultstatement.textContent = "Right! You guessed the correct number";
            resultstatement.textContent=`Congratulations! You won a score of ${totalscore}`;
            alert("You Won....!");
            setTimeout(function(){location.reload()},1000);
           // resetGame();
        } 
        else 
        {
            totalscore -= 1;
            scoreElement.textContent = "Score: " + totalscore;
            resultstatement.textContent = "Wrong";
           // console.log("Wrong");
        }
    if(totalscore<=0)
        {
            resultstatement.textContent="Game Over! You've used all your attempts";
            alert("Game Over! You've used all your attempts");
            resetGame();
        }
     else
       {
          if(enterednumber>randomNumber)
            {
                resultstatement.textContent="Wrong! Your guess is too high";
            }
          else
          {
              resultstatement.textContent="Wrong! Your guess is too low";
          }

       }
    }
 function resetGame()
 {
    randomNumber=Math.floor(Math.random()*10)+1;
    totalscore=10;
    scoreElement.textContent="Score:"+totalscore;
    resultstatement.textContent="";
    guessnumber.value="";
 }




