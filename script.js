var timer = 60;
var score = 0;
var hitran = 0;



// jispe click kroge woh ellement par event raise hoga,  aur event listner na milne par event element ke parent pr listnerdhoondhega wahana bhi na milne par event parent ke parent ke parent par listher dhoondega!!

function increaseScore (){
    score += 10;
    document.querySelector('#scoreval').textContent = score;
}

function getNewHit(){
  hitran =   Math.floor(Math.random()*10)
  document.querySelector("#hitval").textContent = hitran;
}

function makeBubble(){
    var bub = '';


    for(i=0;i<=192;i++){
      var random =  Math.floor(Math.random()*10);
      
       bub += `<div class="bubble">${random}</div>`;
    }
   
   
    document.querySelector('#pbottom').innerHTML = bub;
}

function runTimer(){
  var timer1 =  setInterval(function(){
        if(timer>0){
           timer--;
            document.querySelector('#timerval').textContent = timer;
        }
        else{
            clearInterval(timer1);
            document.querySelector('#timerval').textContent = "TimeUp";
            document.querySelector('#pbottom').innerHTML = "";
        } 

    }, 1000);
}


document.querySelector('#pbottom').addEventListener('click', function (dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitran){
        increaseScore();
        getNewHit();
        makeBubble();
    }
    
})



getNewHit();
makeBubble();

runTimer();
