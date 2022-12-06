const fs = require('fs')



const data = fs.readFile('data.txt','utf8',(err,data)=>{
    const letters = data.trim().replace(/(\r)/gm, "").split('')
    let arr = []
    let endFlag = false
    let count = 0
    for(let i=0;i<letters.length;i++){
        for(let j=i;j<letters.length;j++){
            let result = arr.find(el=>el == letters[j])
            //found a letter that doesn't exist in the array
            if(!result){
                arr.push(letters[j])
            }
            //dupplicated letter while the length of the array doesn't equal to 14
            else{
                arr=[]
                break;
            }
            //found the first 14-letter pattern
            if(arr.length==14){
                count=j+1
                endFlag = true
                break;
            }
        }
        if(endFlag){
            break
        }
    }
    console.log(arr)
    console.log(count)
})
