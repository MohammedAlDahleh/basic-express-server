"use strict";

function validator(req ,res ,next) {
    let result = /^[A-Za-z]+$/;
if (req.query.name==null) 
    serverError();
    if(req.query.name=="")
    req.query.name="user"
    if(!result.test( req.query.name))
    req.query.name="invalid name"
     next();
}
    
   
module.exports=validator;