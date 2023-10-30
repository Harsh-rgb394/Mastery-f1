import React,{useState,useEffect} from 'react'
import { Paper,Button,Avatar,Grid, Typography,Container} from '@material-ui/core'
import useStyles from "./styles"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Input from '../Input/Input'
import {GoogleLogin} from "react-google-login"
import Icon from "./Icon"
import {gapi} from "gapi-script"
import { useDispatch } from 'react-redux'
// import {useHistory} from "react-router-dom"
import { useNavigate } from 'react-router-dom'


  // eslint-disable-next-line

const Auth = () => {
  const classes=useStyles();
  // for showing password to text and text to passowrd we need state for that to manage 
  const [showpassword,setShowpassword]=useState(false);
  const [Signup,setSignup]=useState(false);
  const dispatch=useDispatch();
  // const history=useHistory();
  const navigate=useNavigate();
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: "405897127658-ckq6qab4t58or0k2bgq25fc7m7crq68m.apps.googleusercontent.com",
        scope: 'email',
      });
    }

    gapi.load('client:auth2', start);
  }, []);

  const handleshowpassword=()=>{
    setShowpassword((prevpassword)=>!prevpassword)
  }

  const handlesubmit=()=>{

  }
  const handlechange=()=>{

  }
  const switchMode=()=>{
    setSignup((prevsignvalue)=>!prevsignvalue
    )

  }

  const googleSuccess=async(res)=>{
    // console.log(res);
    // dont thorw error we dont have res or dont access to res 
    // simply say undefined 
    const result=res?.profileObj;
    const token=res?.tokenObj;/* means dont thorw error but show what is error */

    try {
      dispatch({type:"AUTH",data:{result,token}});

      // history.push("/");
      navigate("/");
    } catch (error) {
      console.log(error);
      
    }

  }
  const googleError=(error)=>{
    console.log(error);
    console.log("Unsuccessfull goolge login");

  }
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={4}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{Signup? 'Sign Up' : 'Sign In' }</Typography>
        <form className={classes.form} onSubmit={handlesubmit}>
          <Grid container spacing={2}>
            { Signup && (
            <>
              <Input name="firstName" label="First Name" handlechange={handlechange} autoFocus half />
              <Input name="lastName" label="Last Name" handlechange={handlechange} half />
            </>
            )}
            <Input name="email" label="Email Address" handlechange={handlechange} type="email" />
            <Input name="password" label="Password" handlechange={handlechange} type={showpassword ? 'text' : 'password'} handleshowpassword={handleshowpassword} />
            { Signup && <Input name="confirmPassword" label="Repeat Password" handlechange={handlechange}  type="password"/> }
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            { Signup ? 'Sign Up' : 'Sign In' }
          </Button>
          <GoogleLogin
          clientId='405897127658-ckq6qab4t58or0k2bgq25fc7m7crq68m.apps.googleusercontent.com'
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
           
          />
          <Grid container justify="center">
            <Grid item>
              <Button onClick={switchMode}>
                { Signup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth