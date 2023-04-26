function getComputerOption(){
    let option = Math.floor(Math.random() * 3 + 1);
    switch(option){
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3: 
            return 'scissors';
    }
}


function Round(computer, play){
    
     let player = play.toLowerCase()

    if(computer === player){
        return  'The game is a Tie';

    }else if((computer === 'rock' && player === 'scissors') ||
            (computer === 'scissors' && player === 'paper') ||
            (computer === 'paper' && player === 'rock') ){
        
        return 'You lost!!';
        
    }else{
         return 'You Win the game!!';
    }
}

// console.log(Round(getComputerOption(), 'paper'))

let p = 0
let comp = 0
let result = document.querySelector('#res');
result.textContent = "May the Best Person Win!"
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    result.textContent = "May the Best Person Win!"
    let play = ''
    let playpontos = document.querySelector('#playerpoint');
    let pcpontos = document.querySelector('#compscore');

    button.classList.add('active');

    if (button.id == '1'){
        play += 'rock'
    }else if (button.id == '2'){
         play += 'paper'
    }else if (button.id == '3'){
        play += 'scissors'
    };
      
    let x = Round(getComputerOption(), play)
        if(x == 'You lost!!'){
          comp += 1
              console.log(x)
              console.log(comp)
               console.log('voce tem : '+ p +' pontos')
            console.log('o PC tem : '+ comp +' pontos')
               pcpontos.textContent =  `PC Score: ${comp}`;
                  
        }else if(x == 'You Win the game!!'){
                     p += 1
                     console.log(x)
                     console.log(p)
                     console.log('voce tem : '+ p +' pontos')
                     console.log('o PC tem : '+ comp +' pontos')
                     playpontos.textContent = `Player Score: ${p}`;
                        
                         
        }else{
                   console.log('DRAW')
        }

        if (p == 5){
            result.textContent = "You Won the Game! Congrats";
            p = 0;
            comp = 0;
            playpontos.textContent = `Player Score: ${p}`;
            pcpontos.textContent = `Computer Score: ${comp}`;
        }else if(comp == 5){
            result.textContent = "You Lost the game:/ Maybe find something else to do?"
            p = 0;
            comp = 0;
            playpontos.textContent = `Player Score: ${p}`;
            pcpontos.textContent = `Computer Score: ${comp}`;        }

            setTimeout(rem,400);
        } 

               
  )});

  function rem(){
    let buttons = document.querySelectorAll('button')
    buttons.forEach((button) =>{
    button.classList.remove('active')

    }
  )};
 
  function removeTransition(e){
    if(e.propertyName !== 'transform')return; 
    this.classList.remove('playing');
  }
  
  
  buttons.forEach(button => button.addEventListener('transitionend', removeTransition));



// function Game(){
//     let p = 0
//     let comp = 0
    
//     for (let i = 0; i < 5; i++){
//         let playerch = prompt('chose wisely')
//        let x = Round(getComputerOption(), playerch)
//          if(x == 'You lost!!'){
//             comp += 1
//             console.log(x)
//             console.log(comp)
//             console.log('voce tem : '+ p +' pontos')
//             console.log('o PC tem : '+ comp +' pontos')
//          }else if(x == 'You Win the game!!'){
//             p += 1
//             console.log(x)
//             console.log(p)
//             console.log('voce tem : '+ p +' pontos')
//             console.log('o PC tem : '+ comp +' pontos')
//          }else{
//             console.log('DRAW')
//          }
           
//     } 

//    if (p > comp){
//         return 'Voce Venceu'
//     }else if (comp > p) {
//         return 'Voce Perdeu'
//     }else {
//         return 'DRAW'
//     }
   

// }










