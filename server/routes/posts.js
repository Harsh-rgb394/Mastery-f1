const express = require("express");
const router = express.Router();
const { post_get, post_create ,post_update,delete_post} = require("./../controllers/posts");

router.get("/", post_get);
router.post("/", post_create);
router.patch("/:id", post_update);
router.delete("/:id",delete_post);


module.exports = router;
