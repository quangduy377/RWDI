const fs = require('fs')

const STACK_1 = 1
const STACK_2 = 2
const STACK_3 = 3
const STACK_4 = 4
const STACK_5 = 5
const STACK_6 = 6
const STACK_7 = 7
const STACK_8 = 8
const STACK_9 = 9

const STACKS = {
    [STACK_1]:['H','T','Z','D'],
    [STACK_2]:['Q','R','W','T','G','C','S'],
    [STACK_3]:['P','B','F','Q','N','R','C','H'],
    [STACK_4]:['L','C','N','F','H','Z'],
    [STACK_5]:['G','L','F','Q','S'],
    [STACK_6]:['V','P','W','Z','B','R','C','S'],
    [STACK_7]:['Z','F','J'],
    [STACK_8]:['D','L','V','Z','R','H','Q'],
    [STACK_9]:['B','H','G','N','F','Z','L','D']
}

const popStack = (start, dest, step) => {
    for(let i=1;i<=step;i++){
        STACKS[dest].push(STACKS[start].pop())
        // dest.push(start.pop())
    }
}

const data = fs.readFile('data.txt','utf8',(err,data)=>{
    const instructions = data.trim().replace(/(\r)/gm, "").split("\n")
    for(const move of instructions){
        let temp = move.split(' ')
        let step = +temp[1]
        let start = +temp[3]
        let end = +temp[5]
        popStack(start,end,step)
    }
    let result=""
    for(const[_,value] of Object.entries(STACKS)){
        result+=`${value[value.length-1]},`
    }
    console.log("result : ",result)
})