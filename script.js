
  const holes = document.querySelectorAll('.hole');
 
  const moles = document.querySelectorAll('.mole');

  var scoreGame = document.querySelector('.score');
  
  var playpause = document.querySelector('#play-pause');
  var game = document.querySelector('#game');
  var NumberTrials = document.querySelector('#Trials');

  var nbreessai = 4;
  var score = 0;
  scoreGame.textContent = 0; 
  
  var timer;

// durée alétoire 
  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  //hole aléatoire
  function randomHole(holes) {
    const indexHole = Math.floor(Math.random() * holes.length);
    const hole = holes[indexHole];
    
    return hole;

   console.log(hole);
  }

  function translateMole() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');

    setTimeout(() => {
      hole.classList.remove('up');
      
    }, time);
  }


  function start() {
    
    if (timer == null)
    {

         timer = setInterval(function(){
      
        translateMole();
      },1000)
      playpause.textContent = "Stop"
    }

      else
        {
        window.clearInterval(timer);
        timer = null;
        playpause.textContent = "Start!"
        }

      }

      playpause.addEventListener('click', start);


  //moles.forEach(mole => mole.addEventListener('click',function(event){
    game.addEventListener('click',function(event){
    console.log(event.target)
    
     if (event.target.className == 'mole')
     {
      console.log('succes')
      score++;
      scoreGame.textContent = score;
     }
   else
   { 
    console.log(nbreessai)
     nbreessai--;
     NumberTrials.textContent = nbreessai;
     if (nbreessai == 0)
     {
       alert('game over')
     }
    
   }
  
})

  






