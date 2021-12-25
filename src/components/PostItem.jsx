
import { useState } from "react";
import CheckedIcon from "../assests/img/checked.png"


const PostItem = ({ post }) => {
    const [comment, setComment] = useState(0);
    const [like, setLike] = useState(0);
    const [share, setShare] = useState(0);

    return (
        <div className="post">
        <div>
            <div className="container">
                <img className="user-image" src={post.photo}  alt="User" width="100px" />
                <div className="container-info">
                    <div className="user-name">
                        {post.name}
                        <img src={CheckedIcon} alt="Checked icon" />
                    </div>
                    <a className="user-nickname" href="/">{post.nickname}</a>
                    <div className="post-date">{post.date}</div>
                </div>
            </div>
            <div className="post-content">{post.content}</div>
        </div>
        <img className="post-image" src={post.image} alt="Post" width="85%"/> 
        <div className="statistics">
            <span className="statistics_comments" onClick={() => setComment(count => count === 0 ? count + 1 : count - 1)}>{post.comments + comment}</span>
            <span className="statistics_shares" onClick= {() => setShare(count => count === 0? count + 1 : count - 1)}>{post.shares + share}</span>
            <span className="statistics_likes" onClick={() => setLike(count => count === 0 ? count + 1 : count - 1)}>{post.likes + like}</span>
            <span className="statistics_save"></span>
        </div>
    </div>
    );
};

export default PostItem;
