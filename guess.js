var guessnumber = document.getElementById("guessno");
    var resultstatement = document.getElementById("result");
    var scoreElement = document.getElementById("score");
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    var totalscore = 10;

    function check() {
        var enterednumber = parseInt(guessnumber.value, 10);
        if (randomNumber === enterednumber) {
            console.log("Right");
            resultstatement.textContent = "Right";
            alert("You Won....");
        } else {
            totalscore -= 1;
            scoreElement.textContent = "Score: " + totalscore;
            resultstatement.textContent = "Wrong";
            console.log("Wrong");
        }
    }
