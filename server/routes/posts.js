const express = require("express");
const router = express.Router();
const auth=require("../Middleware/Middleware");
const { post_get, post_create ,post_update,delete_post,like_post} = require("./../controllers/posts");

router.get("/", post_get);
router.post("/", auth,post_create);
router.patch("/:id",auth, post_update);
// make route for updating ,deleting,lieing the post for specfic post or own post 
router.delete("/:id",auth,delete_post);
router.patch("/:id/likepost",auth,like_post);


module.exports = router;
