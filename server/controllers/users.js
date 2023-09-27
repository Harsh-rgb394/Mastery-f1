const bcryptjs=require("bcryptjs");
const jwt=require("jsonwebtoken");
const user=require("../models/user");
JWT_SECRET_KEY="abc123";
const SignIn=async(req,res)=>{
    const {email,password}=req.body;

    try {
        const existuser=await user.findOne({email});

        if(!existuser){
            res.status(404).json({message:"not registered user"});
        }
        const Comparedpassword=await bcryptjs.compare(password,existuser.password);
        if(!Comparedpassword){
            res.status(400).json({message:"password not match"});
        }

        const token=jwt.sign({email:existuser.email,id:existuser._id},JWT_SECRET_KEY,{expiresIn:"1d"});

        res.status(200).json({message:"login success",result:existuser,token});

        
    } catch (error) {
        res.status(500).json({message:"Something went wrong"});
    }

}


const SignUp=async(req,res)=>{
    const {firstName,lastName,email,password,confirmPassword}=req.body;

    try {
        const existuser=await  user.findOne({email});
        if(existuser){
            res.status(404).json({message:"Email already matched"});
        }

        if(password!==confirmPassword){
            res.status(400).json({message:"password not matched"});

        }

        const hashedpassword=await bcryptjs.hash(password,10);


        const result=await user.create({name:`${firstName} ${lastName}`,email,password:hashedpassword});
        const token=jwt.sign({email:result.email,id:result._id},JWT_SECRET_KEY,{expiresIn:"1d"});

       
        res.status(200).json({message:"Regsiter success",result,token})


        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something went wrong"});

    }




}


module.exports={SignIn,SignUp};