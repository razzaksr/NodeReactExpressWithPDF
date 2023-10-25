const express=require('express')
const fs=require('fs')
const cors=require('cors')

const app=express()
app.use(cors())

app.get('/',async(req,res)=>{
    res.status(200).json({
        "records":[
            {
                "name":"Jeevan Umang",
                "file":"umang",
                "url":__dirname+"\\umang.pdf"
            },
            {
                "name":"Project",
                "file":"ProjectUML",
                "url":__dirname+"\\ProjectUML.pdf"
            }
        ]
    })
})

app.get('/supply/:which',async(req,res)=>{
    // console.log(__dirname+"\\umang.pdf")
    const name=req.params.which
    if(name=='umang'){
        //res.status(200).json({url:__dirname+"\\umang.pdf"})
        //res.status(200).json({file:umang.pdf})
        res.contentType('application/pdf')
        const raw = fs.readFileSync(__dirname+"\\umang.pdf")
        res.send(raw)
    }
    else{
        res.contentType('application/pdf')
        const raw = fs.readFileSync(__dirname+"\\ProjectUML.pdf")
        res.send(raw)
    }
})

app.listen(8000,()=>{
    console.log("server running!!!!!!!!!!!")
})