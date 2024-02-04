const express =require("express")
const router=express.Router()
const {getContact,postContact,deleteContact,updateContact,getById} = require("../controller/userController")


router.route("/").get(getContact).post(postContact)

router.route("/:id").get(getById).put(updateContact).delete(deleteContact)

module.exports=router
