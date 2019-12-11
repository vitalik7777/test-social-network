import React from 'react';
import Post from './post/post';
import './my-posts.css';

const MyPosts = () => {
    return (
        <div className="profile">
            <div>
                <textarea></textarea>
                <button>add post</button>
                <div className="posts">
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
        </div>
    );
}

export default MyPosts;