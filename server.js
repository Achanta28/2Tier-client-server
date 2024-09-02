let express = require("express")
let cors = require("cors")

let stu = express()
stu.use(cors());


stu.get("/Students",(req,res)=>{
    let studentArr = ["veerendra","Sriram","Sai","Surendra","Veeresh"];

    res.json(studentArr)

})


stu.listen(2772,()=>{
    console.log("Listening to port 2772")
})