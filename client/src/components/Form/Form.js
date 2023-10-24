import React, { useState,useEffect } from "react";
import useStyles from "./styles";
import { TextField, Button, Paper, Typography } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost ,updatepost} from "../../actions/messages";
import { useSelector } from "react-redux";


const Form = ({currentId,setCurrentId}) => {
  const [messagedata, SetMessagedata] = useState({
    creator: " ",
    title: " ",
    message: " ",
    tags: " ",
    selectedFile: " ",
  });
  const post = useSelector((state) => currentId?state.posts.find((p)=>p._id===currentId):null);

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(()=>{
    if(post)
    SetMessagedata(post);

  },[post])
  const submithandler = (e) => {
    e.preventDefault();
    
    if(currentId){
      dispatch(updatepost(currentId,messagedata));
    }
    else{
       dispatch(createPost(messagedata));

    }
    clear();

  };

  const clear = () => {
    setCurrentId(null);
    SetMessagedata({
      creator: " ",
      title: " ",
      message: " ",
      tags: " ",
      selectedFile: " ",
    });
    
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={submithandler}
        
      >
        <Typography variant="h6">{`${currentId?"Editing":"Create"}`} a Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={messagedata.creator}
          onChange={(e) =>
            SetMessagedata({ ...messagedata, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={messagedata.title}
          onChange={(e) =>
            SetMessagedata({ ...messagedata, title: e.target.value })
          }
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          value={messagedata.message}
          onChange={(e) =>
            SetMessagedata({ ...messagedata, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={messagedata.tags}
          onChange={(e) =>
            SetMessagedata({ ...messagedata, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              SetMessagedata({ ...messagedata, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
