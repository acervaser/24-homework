import { ADD_POST } from "./actions";
import Jules from "../assests/img/Jules.jpg"
import Vincent from "../assests/img/Vincent.jpg"
import Mia from "../assests/img/Mia.jpg"
import Classmates from "../assests/img/classmates.jpg"
import Suit from "../assests/img/suit.jpg"
import Point from "../assests/img/Point.jpg"
 

const POSTS = [{
    name: "Jules Winnfield",
    photo: Jules,
    nickname: "@jules_winnfield",
    content: "How often do you meet your friends?",
    image: Classmates,
    date: " 1994/10/25",
    comments: 12,
    shares: 76,
    likes: 89
}, {
    name: "Mia Wallace",
    photo: Mia,
    nickname: "@mia",
    content: "My hero)))",
    image: Point,
    date: "1994/11/26",
    comments: 30,
    shares: 19,
    likes: 37
}, {
    name: "Vincent Vega",
    photo: Vincent,
    nickname: "@vincent_vega",
    content: "It seems that this shirt should be thrown away((",
    image: Suit,
    date: "1994/12/27",
    comments: 65,
    shares: 29,
    likes: 43
}];

const initialState = {
    posts: POSTS
}
export const addPost = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                posts: [...state.posts, action.payload]
            }
        default:
            return state;


    }
}
