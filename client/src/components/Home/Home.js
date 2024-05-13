import React , {useState ,useEffect }from 'react'
import { Grow,Container,Grid } from '@material-ui/core'
import useStyles from "./styles"
import Form from '../Form/Form'
import Messages from '../messages/Messages'
import { useDispatch } from "react-redux";
import { getPosts } from '../../actions/messages'

const Home = () => {
    const [currentId,setCurrentId]=useState(null);
    const dispatch = useDispatch();

    const classes=useStyles();
    useEffect(() => {
        dispatch(getPosts());
      }, [currentId,dispatch]);
  return (
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
  )
}

export default Home