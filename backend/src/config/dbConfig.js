const mongoose =require("mongoose")

const connectDb = async ()=>{
    await mongoose.connect(process.env.CONNECTION_STRING)
    .then((result) => {
        console.log("mongoose connected with success",result)
    }).catch((err) => {
        console.log("something went wrong",err)
    });
}

module.exports=connectDb