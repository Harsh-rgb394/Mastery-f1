const jwt =require("jsonwebtoken");
JWT_SECRET_KEY="abc123"

const auth=async(req,res,next)=>{

    try {
        // console.log(req.headers);

        const token=req.headers.authorization.split(" ")[1];
    const iscustomtoken=token.length<500;
    // 500 se kam hai jwt token vo hai and nahi to vo google auht token ahi 
    
    let decodedata;
    if(iscustomtoken && token){
        decodedata=jwt.verify(token,JWT_SECRET_KEY);

        req.userId=decodedata?.id;
    }
    else{
        decodedata=jwt.decode(token);

        req.userId=decodedata?.sub;
        // sub is google given id that for differtnate or uniqing other goodle perosn and accounts 
    }
    next();
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Auth failed"});
        
    }
    
    

}


module.exports=auth;