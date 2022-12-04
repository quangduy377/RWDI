const fs = require('fs')
const data = fs.readFile('data.txt','utf8',(err,data)=>{
    const arr=[]
    let temp = data.trim().replace(/(\r)/gm, "");
    temp = temp.split('\n\n')
    for(const el of temp){
        let temp1 = el.split("\n").map(num=>+num)
        arr.push(temp1)
    }
    let max = 0
    let calories = 0
    for(const elf of arr){
        calories = elf.reduce((a,b)=>(a+b),0)
        max = calories > max ? calories : max
    }
    console.log("max = ",max)
})