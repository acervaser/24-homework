
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/actions";
import PostItem from "./PostItem"



export default function CreatePost() {
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const [name, setName] = useState("Jules Winnfield");

    const posts = useSelector((state) => state.posts)
    console.log(posts)
    const getDate = () => {
        const dateObj = new Date();
        const month = dateObj.getUTCMonth() + 1;
        const day = dateObj.getUTCDate();
        const year = dateObj.getUTCFullYear();
        return year + "/" + month + "/" + day;
    }

    function getOptionList(posts) {

        return (
            posts.map((post, key) => (
                <option value={post.name}>
                    {post.name}
                </option>
            ))
        );
    }
    const dispatch = useDispatch()
    const onCreatePost = (e) => {
        e.preventDefault();
        const post = posts.find((post) => post.name === name);
        dispatch(addPost(
            {
                name: post.name,
                photo: post.photo,
                nickname: post.nickname,
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
        <form onSubmit={onCreatePost}>
            <input type="text" name="content" placeholder="Type post's text" value={content} onChange={(e) => setContent(e.target.value)} />
            <input type="text" name="image" placeholder="Paste image's link" value={image} onChange={(e) => setImage(e.target.value)} />

            <select name="name" value={name} onChange={(e) => setName(e.target.value)}>
                {getOptionList(posts)}
            </select>
            <button type="submit" onClick={onCreatePost}>
                Add Post
            </button>
            {posts.map((post) => <PostItem post={post} />)}
        </form>
    );
}