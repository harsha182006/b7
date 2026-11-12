const m=require("mongoose")
const studentSchema=m.Schema({
    name:"String",
    age:"Number",
    gender:"String",
    course:"String",
    year:"Number",
    marks:"Number",
    city:"String",
    email:"String"
})

const student=m.model("students",studentSchema)
module.exports={student}