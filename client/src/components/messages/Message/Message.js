import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import useStyles from "./styles";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletepost } from "../../../actions/messages";
import { likepost } from "../../../actions/messages";
import ThumbUpAltOutlined from "@material-ui/icons/TheatersOutlined";


const Message = ({ post,setCurrentId }) => {
  const classes = useStyles();
  const dispatch=useDispatch();
  const user=JSON.parse(localStorage.getItem("profile"));

  const Likes = () => {
    if (post.likecount.length > 0) {
      return post.likecount.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likecount.length > 2 ? `You and ${post.likecount.length - 1} others` : `${post.likecount.length} like${post.likecount.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likecount.length} {post.likecount.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography varient="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      {(user?.result?.googleId===post?.creator || user?.result?._id===post?.creator) &&(
        <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small "  onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      )}
      
      <div className={classes.details}>
        <Typography varient="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography variant="h5" className={classes.title} gutterBottom>
          {post.title}
        </Typography>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {post.post}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likepost(post._id))}>
          {/* <ThumbUpAltIcon size="small" />
          &nbsp; Like &nbsp;
          {/* $nbsp for spacing  */}
          {/* {post.likecount} */} 
          <Likes/>
        </Button>
        {(user?.result?.googleId===post?.creator || user?.result?._id===post?.creator) &&(
       <Button size="small" color="primary" onClick={() => dispatch(deletepost(post._id))}>
       <DeleteIcon size="small" />
       Delete
     </Button>
        )}
 
      </CardActions>
    </Card>
  );
};

export default Message;
