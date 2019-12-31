import React from 'react';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <div>loading</div>
    }
    return (
        <div>
            {props.profile.fullName}
            <br/>
            {props.profile.lookingForAJobDescription}
            </div>
    );
};

export default ProfileInfo;