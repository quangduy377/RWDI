const fs = require('fs')

function checkIncluded(elf1, elf2){
    let start = +elf1.split('-')[0]
    let end = +elf1.split('-')[1]
    
    let elf1Obj = {
        start: start,
        end: end,
        length: end - start + 1 
    }

    start = +elf2.split('-')[0]
    end = +elf2.split('-')[1]

    let elf2Obj = {
        start: start,
        end: end,
        length: end - start + 1 
    }
    if(elf1Obj.end >= elf2Obj.start && elf1Obj.end <=elf2Obj.end){
        return true
    } 
    else if(elf2Obj.end >= elf1Obj.start && elf2Obj.end<=elf1Obj.end){
        return true
    }
    return false
}

const data = fs.readFile('data.txt','utf8',(err,data)=>{
    let arr=[]
    let result = 0
    let temp = data.trim().replace(/(\r)/gm, "");
    temp = temp.split('\n\n')
    arr = temp[0].split('\n')
    for(const pair of arr){
        let firstElf = pair.split(',')[0]
        let secondElf = pair.split(',')[1]
        if(checkIncluded(firstElf,secondElf)){
            result++
        } 
    }
    console.log(result)
})