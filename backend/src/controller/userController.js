const asyncHandler =require("express-async-handler");
const bcrypt = require("bcryptjs")
const User = require("../schema/userSchema");
// const { Error } = require("mongoose");
const getContact=asyncHandler( async (req,res,next)=>{
    const user= await User.find()
    res.json(user)
})

const postContact=asyncHandler(async (req,res,next)=>{
    const {name,email,password}=req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error("all fields are mandatory !")
    }
    // const hashPassword = await bcrypt.hash(password,12)
  
     const userSave = User.create({name,email,password})
     res.status(201).json(userSave)
})

const getById=asyncHandler(async (req,res,next)=>{
    res.status(200).json({message:`the message send by the request user is ${req.params.id}`})
})

const updateContact=asyncHandler(async (req,res,next)=>{
    res.json({message:`the is send by this id:${ req.params.id}`})
})

const deleteContact=asyncHandler(async(req,res)=>{
    res.json({message:`the request for delete contact is send by the id  ${req.params.id}`})
})


module.exports={getContact,postContact,deleteContact,updateContact,getById}