import * as api from "../api/api";
import { CREATE,UPDATE,FETCH_ALL,DELETE } from "../Constants/actionTypes"; 
// everthing in api imports okay as api varible

// action creatror that return actions
// export const getposts = () => async (dispatch) => {
//   try {
//     const { data } = await api.fetchdata();
//     // aftter succesfuuly gated data  then dipstach an action that we name get_all then have  geted data

//     dispatch({ type: "GET_ALL", payload: data });
//     // fetch data will  shown or dispatch to redux store
//   } catch (error) {
//     console.log(error);
//   }
//   // payload is data or container we store all our dtaa
//   // for that purpose we need aync process we need redux thunk  beacuse we work wiht
//   // aysnc data so  need thunk
// };

// export const createposts = (message) => async (dispatch) => {
//   try {
//     const { data } = await api.createdata(message);
//     // aftter succesfuuly created then dipstach an action that we name creat_all then have  created data

//     dispatch({ type: "CREATE_ALL", payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
 
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const updatepost=(id,post)=>async(dispatch)=>{
  try {
    const {data}=await api.updatepost(id,post);

    dispatch({type:UPDATE,payload:data});
  } catch (error) {
    console.log(error);
    
  }
}

export const deletepost=(id)=>async(dispatch)=>{
  try {
    await api.deletepost(id);

    dispatch({ type:DELETE, payload:id});
  } catch (error) {
    console.log(error);
    
  }
}

export const likepost=(id)=>async(dispatch)=>{
  try {
    const {data}=await api.likepost(id);

    dispatch({type:UPDATE,payload:data});
    
  } catch (error) {
    console.log(error);
    
  }
}