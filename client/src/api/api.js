// import axios from "axios";

// const url = "http://localhost:5000/posts";

// export const fetchdata = () => axios.get(url);
// // and the url we use here get or messages or posts we requred only url

// export const createdata = (newMessage) =>
//   // here newmessage we are sending
//   axios.post(url, newMessage);
import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatepost=(id ,updatedpost)=>axios.patch(`${url}/${id}`,updatedpost);
export const deletepost=(id)=>axios.delete(`${url}/${id}`);
export const likepost=(id)=>axios.patch(`${url}/${id}/likepost`);
