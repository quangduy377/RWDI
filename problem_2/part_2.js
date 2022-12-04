const fs = require('fs')
const WIN = 6
const DRAW = 3
const LOSE = 0

const ENEMY_ROCK = 'A'
const ENEMY_PAPER = 'B'
const ENEMY_SCISSOR = 'C'

const PLAYER_LOSE = 'X'
const PLAYER_DRAW = 'Y'
const PLAYER_WIN = 'Z'

const PLAYER_ROCK = PLAYER_LOSE
const PLAYER_PAPER = PLAYER_DRAW
const PLAYER_SCISSOR = PLAYER_WIN

const PLAYER_CHOICES = {
    [PLAYER_ROCK]:1,
    [PLAYER_PAPER]:2,
    [PLAYER_SCISSOR]:3
}



function playerScore(enemyC,playerC){
    //Lose Scenarios
    if(playerC===PLAYER_LOSE){
        if(enemyC===ENEMY_ROCK){
            return LOSE + PLAYER_CHOICES[PLAYER_SCISSOR]
        } 
        if(enemyC===ENEMY_PAPER){
            return LOSE + PLAYER_CHOICES[PLAYER_ROCK]
        } 
        if(enemyC===ENEMY_SCISSOR){
            return LOSE + PLAYER_CHOICES[PLAYER_PAPER]
        } 
    }
    //Draw Scenarios
    if(playerC===PLAYER_DRAW){
        if(enemyC===ENEMY_ROCK){
            return DRAW + PLAYER_CHOICES[PLAYER_ROCK]
        } 
        if(enemyC===ENEMY_PAPER){
            return DRAW + PLAYER_CHOICES[PLAYER_PAPER]
        } 
        if(enemyC===ENEMY_SCISSOR){
            return DRAW + PLAYER_CHOICES[PLAYER_SCISSOR]
        } 
    }
    //Win Scenarios
    if(playerC===PLAYER_WIN){
        if(enemyC===ENEMY_ROCK){
            return WIN + PLAYER_CHOICES[PLAYER_PAPER]
        } 
        if(enemyC===ENEMY_PAPER){
            return WIN + PLAYER_CHOICES[PLAYER_SCISSOR]
        } 
        if(enemyC===ENEMY_SCISSOR){
            return WIN + PLAYER_CHOICES[PLAYER_ROCK]
        } 
    }
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