import { ADD_POST } from "./action";
import { getData } from "./postData";

const POSTS = getData();

initialState= {
posts: POSTS
}
export const addPost = (state = initialState, action) => {
switch (action.type) {
    case ADD_POST:
        return{
         post: [...state.posts, action.payload];
        }
    default:
        return state;


};
