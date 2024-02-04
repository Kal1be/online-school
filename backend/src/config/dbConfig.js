const mongoose =require("mongoose")
// mongodb+srv://yahoulbofelix:admin12@kalibe.ax2ygky.mongodb.net/

const connectDb = async ()=>{
    await mongoose.connect(process.env.CONNECTION_SERVER)
    .then(() => {
        console.log("mongoose connected with success")
    }).catch((err) => {
        console.log("something went wrong",err)
    });
}

module.exports=connectDb