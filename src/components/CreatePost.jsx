import React from "react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/actions";
import  PostItem from ""

let postData = getData();

function getOptionList(){
    return (
        options.map((option) => (
            <option value={option.name}>
                {option.name}
            </option>
        ))
    );
}

export default function CreatePost() {
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const posts = useSelector((state) => state.posts)

    const getDate = () => {
        const dateObj = new Date();
        const month = dateObj.getUTCMonth() + 1;
        const day = dateObj.getUTCDate();
        const year = dateObj.getUTCFullYear();
        return year + "/" + month + "/" + day;
    }

    const dispatch = useDispatch()
    const onCreatePost = (e) => {
        ev.preventDefault();
        const getName = postData.find((author) => author.name === name)
        dispatch(addPost(
            {
                name: getName(),
                photo: photo,
                nickname: nickname,
                content: content,
                image: image,
                date: getDate(),
                comments: 0,
                shares: 0,
                likes: 0
            }));
        setContent("");
        setImage("");
    }
    return (
        <form className="form__create-post" onSubmit={onCreatePost}>
            <input type="text" name="content"  placeholder="Type post's text" value={content} onChange={(e) => setContent(e.target.value)} />
            <input type="text" name="image"  placeholder="Paste image's link" value={image} onChange={(e) => setImage(e.target.value)} />

            <select>
                 {getOptionList()}
            </select>
            <button type="submit" onClick={onCreatePost}>
                Add Post
            </button>
            { posts.map((post) => <PostItem post={post}/>)}
        </form>
    );
}