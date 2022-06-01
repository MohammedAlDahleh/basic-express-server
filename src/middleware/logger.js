`use strict`

module.exports = (req,res,next)=>{
    console.log(`Method: ${req.mothod} Path: ${req.path}`)
    next();
}