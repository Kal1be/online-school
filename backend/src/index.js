const express =require("express")
const dotenv = require("dotenv").config()
const cors = require("cors")
const errorHandler=require("./middlewares/errorHandler")
const router = require("./routes/userRoutes")
const app=express()
// +++++++++++++ the express middleware ++++++++++++
const port =process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(
    cors({
        origin:"http://localhost:5173",
        Credential:true
    })
)

app.use("/api/user",router)

app.use(errorHandler)

app.listen(port,()=>{
    console.log(`app listen on the port ${port}`)
})