import React from 'react'
import { TextField,InputAdornment,Grid,IconButton } from '@material-ui/core'
import Visbility from "@material-ui/icons/Visibility"
import VisbilityOff from "@material-ui/icons/VisibilityOff"

const Input = ({half,name,label,handleChange,autoFocus,type,handleshowpassword}) => {
  return (
    <Grid item xs={12} sm={half? 6:12}>
        <TextField
        name={name}
        label={label}
        
        onChange={handleChange}
        variant='outlined'
        required
        fullWidth
        autoFocus={autoFocus}
        type={type}
        InputProps={name==="password" ?{

            endAdornment:(
                <InputAdornment position='end'>
                    <IconButton onClick={handleshowpassword}>
                        {type==="password"?<Visbility/>:<VisbilityOff/>}
                    </IconButton>
                </InputAdornment>
            )
        }:null}
        
        


        
        
        />

    </Grid>
  )
}

export default Input