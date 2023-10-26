import React, {useState ,useEffect } from "react";
import { Container, AppBar, Typography, Grid, Grow } from "@material-ui/core";
import Form from "./components/Form/Form";
import Messages from "./components/messages/Messages";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/messages";
import logo from "./images/logo22.png";
// appjs is parrent componet whose bioth posts and form we get id from posts ke anar post and give 
// app js and give to form updating particualr post 


const App = () => {
  const [currentId,setCurrentId]=useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId,dispatch]);
  return (
    // container to centre everthing
    <Container maxWidth="lg">
      {/* inhrit ka mtlb parnet ke properties child mein dircet use ho jaye  */}
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={logo}
          alt="memories"
          height="90"
          width="90"
          // width="80"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            className={classes.Maincontainer}
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              {/* xs for small devices to all space and width and small to medium took 7 space  */}
              <Messages setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              {/* xs for small devices to all space and width and small to medium took 7 space  */}
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
