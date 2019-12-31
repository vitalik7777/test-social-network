import React from 'react';
import MyPostsContainer from './my-posts/myPostsContainer';
import ProfileInfo from './profile-info/profile-info';

import './profile.css';

const Profile = (props) => {
    return (
        <div className="profile">
            <ProfileInfo profile={props.userProfile}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;