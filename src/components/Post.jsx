import React from "react";
import UserInfo from "./UserInfo";
import Statistics from "./Statistics";
import Baby from "../assests/img/baby_yoda.jpg";
import Yoda from "../assests/img/Yoda.jpg";

const userData = {
    name: "Baby Yoda",
    photo: Baby,
    nickname: "@baby_yoda"
};

let day = new Date;
const postData = {
    content: "My dear father, I miss you so much...",
    image: Yoda,
    date: day.getDate()
};

const statistics = {
    comments: 482,
    shares: 146,
    likes: 887
}
const Post = () => {
    return (
        <div className="post">
            <div className="wrapper">
                <UserInfo name={userData.name} image={userData.photo} nickname={userData.nickname} />
                <span className="post-date">{postData.date}</span>
                <span className="post-content">{postData.content}</span>
            </div>
            <img className="post-image" src={postData.image} alt="Some post" />
            <Statistics comments={statistics.comments} shares={statistics.shares} likes={statistics.likes}/>
        </div>
    );
};

export default Post
