const fs=require('node:fs')
const { readdir } = require('node:fs/promises');
const express=require('express')
const app=express();

let a =Date();
console.log(a)
const data1=[]

    async function call(){    
       
            const files = await readdir('./text-files');
            for (const file of files)
            await fs.readFile(`./text-files/${file}`,'utf8',(err,data)=>{
                console.log(data)
                data1.push(data)                
            })
          
        }
        call();
        app.get('/readfile',(a,b)=>{
            b.send(data1.join('\n'))
            console.log(data1)
        })
        


app.post('/date-time',(req,res)=>{
    fs.writeFile(`current date-time.txt`,a,{flag:'w+'},(err)=>{
        if(err){
            console.log(err)
        return;
        }
        console.log('added')
    })
})

app.listen(4010,()=>{
    console.log('server started @4000')
});
