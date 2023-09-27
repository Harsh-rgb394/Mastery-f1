const express=require("express");
const {SignIn,SignUp}=require("../controllers/users");
const router=express.Router();


router.post("/SignIn",SignIn);
router.post("/SignUp",SignUp);

module.exports=router;




