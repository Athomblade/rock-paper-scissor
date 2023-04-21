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

console.log(Round(getComputerOption(), 'paper'))



function Game(){
    let p = 0
    let comp = 0
    
    for (let i = 0; i < 5; i++){
        let playerch = prompt('chose wisely')
       let x = Round(getComputerOption(), playerch)
         if(x == 'You lost!!'){
            comp += 1
            console.log(x)
            console.log(comp)
            console.log('voce tem : '+ p +' pontos')
            console.log('o PC tem : '+ comp +' pontos')



         }else if(x == 'You Win the game!!'){
            p += 1
            console.log(x)
            console.log(p)
            console.log('voce tem : '+ p +' pontos')
            console.log('o PC tem : '+ comp +' pontos')

         }else{
            console.log('DRAW')
         }
           
    } 

    if (p > comp){
        return 'Voce Venceu'
    }else if (comp > p) {
        return 'Voce Perdeu'
    }else {
        return 'DRAW'
    }
   

}











