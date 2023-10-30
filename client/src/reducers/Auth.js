import {AUTH ,LOGOUT} from "../Constants/actionTypes"

const authreducer=(state={authdata:null},action)=>{
    switch (action.type) {
        case AUTH:
            localStorage.setItem("profile",JSON.stringify({...action?.data}));
            // console.log(action?.data);
            // for storing in localStorage for futher without loggin after page refresh 
            return {...state,authdata:action?.data};
        case LOGOUT:
            localStorage.clear();
            return {...state,authdata:null};    
        default:
            return state;
    }

}

export  default authreducer;