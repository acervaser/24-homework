import React from "react";
import React from "react";
import { useState } from "react";
import CheckedIcon from "../assests/img/checked.png"


const PostItem = ({ post }) => {
    const [comment, setComment] = useState(0);
    const [like, setLike] = useState(0);
    const [share, setShare] = useState(0);

    return (
        <div className="post_container">
        <div>
            <div className="container_img_info">
                <img className="user_photo" src={post.photo}  alt="User" width="100px" />
                <div className="container_info">
                    <div className="user_name">
                        {post.name}
                        <img src={CheckedIcon} alt="Checked icon" />
                    </div>
                    <a className="user_nickname" href="/">{post.nickname}</a>
                    <div className="post_date">{post.date}</div>
                </div>
            </div>
            <div className="post_content">{post.content}</div>
        </div>
        <img className="post_image" src={post.image} alt="Post" width="85%"/> 
        <div className="statistics">
            <span className="statistics_comments" onClick={() => setComment(count => count ? count - 1 : count + 1)}>{post.comments}</span>
            <span className="statistics_shares" onClick= {() => setShare(count => count ? count - 1 : count + 1)}>{post.shares}</span>
            <span className="statistics_likes" onClick={() => setLike(count => count ? count - 1 : count + 1)}>{post.likes}</span>
            <span className="statistics_save"></span>
        </div>
    </div>
    );
};

export default PostItem;
