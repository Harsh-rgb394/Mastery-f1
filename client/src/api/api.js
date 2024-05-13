// import axios from "axios";

// const url = "http://localhost:5000/posts";

// export const fetchdata = () => axios.get(url);
// // and the url we use here get or messages or posts we requred only url

// export const createdata = (newMessage) =>
//   // here newmessage we are sending
//   axios.post(url, newMessage);
import axios from "axios";


const API=axios.create({baseURL:"https://mastery-f1.onrender.com"});
// const url = "http://localhost:5000/posts";

// for auth we need aixos intercepotr 
API.interceptors.request.use((req)=>{
    if(localStorage.getItem("profile")){
    req.headers.Authorization= `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
    }
    return req;

})

export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatepost=(id ,updatedpost)=>API.patch(`/posts/${id}`,updatedpost);
export const deletepost=(id)=>API.delete(`/posts/${id}`);
export const likepost=(id)=>API.patch(`/posts/${id}/likepost`);

export const SignIn=(userdata)=>API.post("/users/SignIn",userdata);
export const SignUp=(userdata)=>API.post("/users/SignUp",userdata);
