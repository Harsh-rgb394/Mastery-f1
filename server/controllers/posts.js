const mongoose =require("mongoose");
const postmodel = require("./../models/postmessage");

const post_get = async (req, res) => {
  try {
    const post_data = await postmodel.find();
    // finding all posts on db takes time means we need async action means await action 

    if (post_data) {
      res.status(200).json(post_data);
    } else {
      res.status(401).json({ message: "cannot get the ", success: false });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const post_create = async (req, res) => {
  const post_info = req.body;

  const new_post = new postmodel({...post_info,creator:req.userId,createdAt:new Date().toISOString()});

  try {
     await new_post.save();
   
      res.status(200).json(new_post);
   
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "cannot create post", success: false });
  }
};

const post_update=async(req,res)=>{
  const {id}=req.params;
  const update_data=req.body;

  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(400).json("invalid id");
  }

  try {
      const update_info=await postmodel.findByIdAndUpdate(id,{...update_data,id},{new:true});

      if(update_info){
        res.status(200).json(update_info);
      }
  } catch (error) {
    console.log(error);
    
  }
}

const delete_post=async(req,res)=>{
  const {id}=req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(400).json("invalid id");
  }

  try {
     await postmodel.findByIdAndDelete(id);

     res.status(200).json("successfull delete");

  } catch (error) {
    console.log(error);
    
  }
}
// const delete_post=async(req,res)=>{
//    const {id}=req.params;
//    if(!mongoose.Types.ObjectId.isValid(id)){
//     res.status(400).json("invalid id");
//   }

//   try {
//     await postmodel.findByIdAndRemove(id);

//     res.status(200).json("successfully delete");
//   } catch (error) {
//     console.log(error);
    
//   }

// }
const like_post=async(req,res)=>{
  const {id}=req.params;
  // console.log(req.userId);
  // console.log(userId);
  if(!req.userId){
    res.status(400).json({message:"Unauthenticated user"});

  }
  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(400).json("invalid id");
  }

  try {
    const update_id=await postmodel.findById(id);

    const update_like=await postmodel.findByIdAndUpdate(id,{likecount:update_id.likecount+1},{new:true})


    if(update_like){
      res.status(200).json(update_like);
    }
    else{
      res.status(400).json("like count not increase");
    }
  } catch (error) {
    console.log(error);
    
  }



}


module.exports = { post_get, post_create,post_update ,delete_post,like_post};
