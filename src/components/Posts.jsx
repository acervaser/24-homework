import './Posts.css';
import Post from '../Post/Post';
import { getData } from '../Post/data';


export default function Posts(){
let postData = getData();
    return (
        <>
           
            <div className="posts">
                 {
                 postData.map((post) => {
                    return <Post 
                    name={post.name}
                    nickname={post.nickname}
                    photo={post.photo}
                    content={post.content}
                    image={post.image}
                    date={post.date}
                    />
                })
                } 
            </div>
        </>
    );
}