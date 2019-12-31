import React from 'react';
import './post.css';

const Post = (props) => {
    return (
        <div className="item">
            {props.message}
            <div>
                <button>{props.likescount}</button>
            </div>
        </div>
    );
}

export default Post;