// const initialState = [];
// const messages = (messages = initialState, action) => {
//   switch (action.type) {
//     case "GET_ALL":
//       return action.payload;
//     // now updating state wiht action type and get update data through action.payload
//     // send data to redux store for furhter accessing the data from dispatach action
//     // sendingor showingg the dara through action.payload
//     case "CREATE_ALL":
//       // when you write ...messages it spreading the all posts or messages and appned
//       // then new payload or data we created then addd to that messages or create a new sate
//       // this ensure new data is added succesfully and store updated it so that ohter can access it
//       return [...messages, action.payload];
//     default:
//       return messages;
//   }
// };

// export default messages;
// eslint-disable-next-line import/no-anonymous-default-export
import { CREATE,UPDATE,FETCH_ALL,DELETE } from "../Constants/actionTypes";
export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case UPDATE:
      return posts.map((post)=>post._id ===action.payload._id?action.payload:post);
    case UPDATE:
        return posts.map((post)=>post._id ===action.payload._id?action.payload:post);
    case DELETE:
      return posts.filter((post)=>post._id!==action.payload);
    case CREATE:
      return [...posts, action.payload];
    default:
      return posts;
  }
};
