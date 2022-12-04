const fs = require('fs')
const data = fs.readFile('data.txt','utf8',(err,data)=>{
    const arr=[]
    const letters=[]
    let sumPriorities = 0
    let temp = data.trim().replace(/(\r)/gm, "").split('\n');
    for(const line of temp){
        let fCompartment = line.substring(0,line.length/2).split('')
        let sCompartment = line.substring(line.length/2).split('')
        let result = fCompartment.filter(el=>sCompartment.includes(el)) //find the overlapped letter
        if(result.length>0){
            letters.push(result[0])
        }
    }
    for(const el of letters){
        //convert letter to ascii code
        if(el.charCodeAt()>=97 && el.charCodeAt()<=122){
            sumPriorities += ((el.charCodeAt())-96)
        }
        else{
            sumPriorities += ((el.charCodeAt())-38)
        }
    }
    console.log(sumPriorities)
})