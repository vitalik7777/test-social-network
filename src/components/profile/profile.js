import React from 'react';
import MyPosts from './my-posts/my-posts';

import './profile.css';

const Profile = () => {
    return (
        <div className="profile">
            <div>ava + description</div>

            <MyPosts/>
        </div>
    );
}

export default Profile;