import React from 'react';
import Post from './post/post';
import './my-posts.css';



const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className="profile">
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <button onClick={addPost}>add post</button>
                <div className="posts">
                    {props.postsData.postsData.map(p => (
                        <Post key={p.id} message={p.message} id={p.id} likescount={p.likescount}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;