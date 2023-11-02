import * as api from "../api/api";
import { AUTH } from "../Constants/actionTypes";


export const SignIn=(userdata,navigate)=>async(dispatch)=>{
    try {
        const {data}=await api.SignIn(userdata);

        dispatch({type:AUTH,data});
        
        navigate("/");
    } catch (error) {
        console.log(error);
        
    }

}

export const SignUp=(userdata,navigate)=>async(dispatch)=>{
    try {
        const {data}=await api.SignUp(userdata);

        dispatch({type:AUTH,data});
        navigate("/");
    } catch (error) {
        console.log(error);
        
    }

}