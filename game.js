/****************** Données ***************/
const holes = document.querySelectorAll('.hole');
let   playpause = document.querySelector('#play-pause');
let timer;
var scoreGame = document.querySelector('.score');
var game = document.querySelector('#game');
// initialisation de scoreGame
 var nbreessai = 4;
  var score = 0;
scoreGame.textContent = 0; //scoreGame.innerHTML=0
 var NumberTrials = document.querySelector('#Trials');
/************************* Les évenements ***********************/
playpause.addEventListener('click', play);



/***********************  Les fonctions *****************************/

/// Fonction Play Jeux
  function play() {
    
    if (timer == null)
    {

         timer = setInterval(function(){
      console.log('Timer : '+timer)
        mvmtMole();
      },1000)
      playpause.textContent = "Stop"
    }

      else
        {
        window.clearInterval(timer);
        //timer = null;
		//console.log('Timer2 : '+timer)
        playpause.textContent = "Start!"
        }

      }
// Fonction pour la traslation des Moles 
  function mvmtMole() {
   
 
   const indexHole = Math.floor(Math.random() * holes.length);
    const hole = holes[indexHole];
	console.log('Holeeeeeeeeeeeeeeeeeeeeee '+indexHole);
    hole.classList.add('up');

    setTimeout(() => {
      hole.classList.remove('up');
      
    }, 500);
  }
 

  
  // ScoreGame
     game.addEventListener('click',function(event){
    console.log('Event '+event.target.className+'\n')
    
     if (event.target.className == 'mole')
     {
      console.log('succes')
      score++;
      scoreGame.textContent = score;
     }
   else
   { 
    //console.log(nbreessai)
     nbreessai--;
     NumberTrials.textContent = nbreessai;
     if (nbreessai == 0)
     {
       alert('game over')
     }
    
   }
  
})