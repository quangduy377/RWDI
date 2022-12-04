const fs = require('fs')
const WIN = 6
const DRAW = 3
const LOSE = 0

const ENEMY_ROCK = 'A'
const ENEMY_PAPER = 'B'
const ENEMY_SCISSOR = 'C'

const PLAYER_ROCK = 'X'
const PLAYER_PAPER = 'Y'
const PLAYER_SCISSOR = 'Z'

const PLAYER_CHOICES = {
    [PLAYER_ROCK]:1,
    [PLAYER_PAPER]:2,
    [PLAYER_SCISSOR]:3
}



function playerScore(enemyC,playerC){
    //Win Scenarios
    if(playerC===PLAYER_PAPER && enemyC===ENEMY_ROCK){
        return WIN+PLAYER_CHOICES[playerC]
    }
    if(playerC===PLAYER_ROCK && enemyC===ENEMY_SCISSOR){
        return WIN+PLAYER_CHOICES[playerC]
    }
    if(playerC===PLAYER_SCISSOR && enemyC===ENEMY_PAPER){
        return WIN+PLAYER_CHOICES[playerC]
    }
    //Draw
    if((playerC===PLAYER_ROCK && enemyC===ENEMY_ROCK)
    ||(playerC===PLAYER_PAPER && enemyC===ENEMY_PAPER)
    ||(playerC===PLAYER_SCISSOR && enemyC===ENEMY_SCISSOR)
    ){
        return DRAW + PLAYER_CHOICES[playerC]
    }
    return LOSE + PLAYER_CHOICES[playerC]
}

const data = fs.readFile('data.txt','utf8',(err,data)=>{
    const arr=[]
    let totalScore = 0
    let temp = data.trim().replace(/(\r)/gm, "");
    temp = temp.split('\n\n')
    for(const turns of temp){
        let temp1 = turns.split("\n")
        for(const turn of temp1){
            let enemyC = turn.split(' ')[0] //get enemy choice
            let playerC = turn.split(' ')[1] // get player choice
            totalScore+=playerScore(enemyC,playerC)
        }
    }
    console.log(totalScore)
})