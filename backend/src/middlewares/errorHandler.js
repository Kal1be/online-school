const {constants}=require("../constants")

const errorHandler=(err,req,res,next)=>{
    const status=res.statusCode?res.statusCode:500
    switch (status) {
        case constants.Forbidden:
           return res.json({title:"Forbidden error",message:err.message,stackTrace:err.stack})
            break;
        case constants.Not_Found:
           return res.json({title:"Not_found error",message:err.message,stackTrace:err.stack})
            break
        case constants.Unauthorized:
          return res.json({title:"Unhaurized user",message:err.message,stackTrace:err.stack})
            break
        case constants.Verification_Failed:
           return res.json({title:"Verification_failed",message:err.message,stackTrace:err.stack})
            break
        case constants.Server_err:
           return res.json({title:"Server err",message:err.message,stackTrace:err.stack})
        default:
            console.log("all good! no error provide")
            break;
    }

}

module.exports=errorHandler