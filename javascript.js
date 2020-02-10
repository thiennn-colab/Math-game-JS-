// if we  click on the start/reset
    // if we are playing 
        // reload the page
    // if we are not playing
        // set score to 0
        // show countdown box
        // reduce time every second
            
            // time left?
                // yes -> continue
                // no -> game over
        // change the button text to reset
        // generate new Q&A

// if we click on the answer box
    // if we are playing 
        // correct?
            // yes
                //increase score by one
                // show the correct box for 1 second
                // generate new Q&A
            // no
                // show try again box for 1 sec

var playing = 0;

function startGame(){
    if(playing == 1){
//       location.reload(); 
    
        if(document.getElementById('second').innerHTML != 0){
            reload();   
        }
        
    }
    else{
        playing = 1;
        gamePlay();
        document.getElementById('gameover').style.display = 'None';
        score = document.getElementById('scoreVal');
        score.innerHTML = 0;
        countDownBox = document.getElementById('timeRemaining');
        countDownBox.style.display = 'block';
        countDownBox.childNodes[1].innerHTML = 60;
        var countDown = setInterval(function(){
            countDownBox.childNodes[1].innerHTML--;
            if(countDownBox.childNodes[1].innerHTML == 0){
                clearInterval(countDown);
                gameOver();
            }
        },1000);
        document.getElementById('startreset').innerHTML = 'Reset';
    }
    
};

function reload(){
    for(i=1;i<5;i++){
        document.getElementById('box'+i).innerHTML = '';
    }
    gamePlay();
    score = document.getElementById('scoreVal');
    score.innerHTML = 0;
    countDownBox = document.getElementById('timeRemaining');
    countDownBox.style.display = 'block';
    countDownBox.childNodes[1].innerHTML = 60;
    document.getElementById('startreset').innerHTML = 'Reset';
};

function gameOver(){

    for(i=1;i<5;i++){
        document.getElementById('box'+i).innerHTML = '';
    } document.getElementById('timeRemaining').style.display = 'None';
    document.getElementById('startreset').innerHTML = 'Start Game';
    document.getElementById('gameover').style.display = 'block';
    score = document.getElementById('scoreVal');
    document.getElementById('gameoverScore').innerHTML = score.innerHTML;
    score.innerHTML = 0;
    playing = 0;
};

function gamePlay(){
    var a = Math.round(Math.random()*10);
    var b = Math.round(Math.random()*10);
    question = document.getElementById('question');
    question.innerHTML = a + 'x' + b;
    target = Math.round(Math.random()*3)+1;
    answer = document.getElementById('box'+target);
    answer.innerHTML = a*b;
    document.getElementById('rightAnswer').innerHTML = a*b;
    for(i=1;i<5;i++){
        if(i != target){
            document.getElementById('box'+i).innerHTML = Math.round(Math.random()*100);
        }
    }
};

function answerClick(x){
    rightAnswer = document.getElementById('rightAnswer').innerHTML;
    answer = document.getElementById(x).innerHTML;
    if(answer == rightAnswer){
        correct = document.getElementById('correct');
        correct.style.display = 'block';
        appear = setTimeout(function(){
            correct.style.display = 'None';
        },1000);
        document.getElementById('scoreVal').innerHTML++;
        gamePlay();
    }
    else{
        correct = document.getElementById('wrong');
        correct.style.display = 'block';
        appear = setTimeout(function(){
            correct.style.display = 'None';
        },1000);
        document.getElementById('second').innerHTML--;
    }
    
}