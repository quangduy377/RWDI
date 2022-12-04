const fs = require('fs')
const data = fs.readFile('data.txt','utf8',(err,data)=>{
    const arr=[]
    const letters=[]
    let sumPriorities = 0
    let temp = data.trim().replace(/(\r)/gm, "").split('\n');
    let j=0
    while(j<=temp.length-3){
        let fCompartment = temp[j].split('')
        let sCompartment = temp[j+1].split('')
        let tCompartment = temp[j+2].split('')
        let result = fCompartment.filter(el=>sCompartment.includes(el)) //find the overlapped letter
        result = result.filter(el=>tCompartment.includes(el))
        if(result.length>0){
            letters.push(result[0])
        }
        j+=3
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