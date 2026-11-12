const express=require("express")
const {student}=require("./models/studentModel.js")
const m=require("mongoose")
m.connect("mongodb://localhost:27017/cseb_students")
.then(()=>{
    console.log("mongodb is conected")
})
.catch((err)=>{
    console.log(`error is ${err}`)
})

const app=express()
app.use(express.json())

app.post("/create_student",async(req,res)=>{
    const p=await student.insertOne(req.body)
    await res.send(p)
})

app.post("/create_students",async(req,res)=>{
    const p=await student.insertMany(req.body)
    await res.send(p)
})

app.get("/students",async(req,res)=>{
    const p=await  student.find()
     await res.send(p)
})

app.get("/studento",async(req,res)=>{
    const p=await student.find({name:req.body.name})
    await res.send(p)
})
 
app.get("/student/:id",async(req,res)=>{
    const p=await student.find({_id:req.params.id})
    await res.send(p)
})

app.put("/updateo",async(req,res)=>{
    const p=await student.updateOne({name:req.body.name},
                                    {$set:{marks:req.body.marks}}
    )
    await res.send(p)
})
app.put("/updatem",async(req,res)=>{
    const p=await student.updateMany({name:req.body.name},
                                    {$set:{marks:req.body.marks}}
    )
    await res.send(p)
})
app.put("/update/:id",async(req,res)=>{
    const p=await student.updateOne({_id:req.params.id},
                                    {$set:{name:req.body.name}}
    )
    await res.send(p)
})

app.delete("/deleteo",async(req,res)=>{
   const s=await student.deleteOne({name:req.body.name})
   await res.send(s)
})

app.delete("/deletem",async(req,res)=>{
   const s=await student.deleteMany({course:req.body.course})
   await res.send(s)
})

app.delete("/delete/:id",async(req,res)=>{
   const s=await student.deleteOne({_id:req.params.id})
   await res.send(s)
})


const port=6789
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})