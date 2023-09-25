import React,{useState,useEffect} from 'react'
import { Typography,AppBar,Toolbar,Avatar,Button } from '@material-ui/core'
import useStyles from "./Styles";
import logo from "../../images/logo22.png";
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';



const Navbar = () => {
    const classes=useStyles();
    const [user,setuser]=useState(JSON.parse(localStorage.getItem("profile")));
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const location=useLocation();

    // console.log(user);
    const logout=()=>{
      dispatch({type:"LOGOUT"});
      navigate("/");

      setuser(null);
      

    }
    useEffect(()=>{
      const token=user?.token;

      
      setuser(JSON.parse(localStorage.getItem("profile")));

    },[location])
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
        <Typography className={classes.heading} component={Link}  to="/" variant="h2" align="center">
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
        </div>
        <Toolbar className={classes.toolbar}>
        {user? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user.result?.name} src={user.result?.imageUrl}>{user.result?.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user.result?.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
        
      </AppBar>
  )
}

export default Navbar