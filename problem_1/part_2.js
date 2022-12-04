const fs = require('fs')
const data = fs.readFile('data.txt','utf8',(err,data)=>{
    const arr=[]
    const totalEachElf = []
    let temp = data.trim().replace(/(\r)/gm, "");
    temp = temp.split('\n\n')
    for(const el of temp){
        let temp1 = el.split("\n").map(num=>+num)
        arr.push(temp1)
    }
    let calories = 0
    for(const elf of arr){
        calories = elf.reduce((a,b)=>(a+b),0)
        totalEachElf.push(calories)
    }
    for(let i=totalEachElf.length-1;i>=0;i--){
        for(let j=totalEachElf.length;j>=1;j--){
            if(totalEachElf[j]<totalEachElf[j-1]){
                let temp = totalEachElf[j-1]
                totalEachElf[j-1] = totalEachElf[j]
                totalEachElf[j]=temp
            }
        }
    }
    console.log(totalEachElf[totalEachElf.length-1],totalEachElf[totalEachElf.length-2],totalEachElf[totalEachElf.length-3])
})
