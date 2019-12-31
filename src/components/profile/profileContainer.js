import React from 'react';
import Profile from './profile';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {setUserProfile} from '../../redux/profileReducer';
import './profile.css';
import * as axios from "axios";

class ProfileContainer extends React.Component {

    componentWillMount() {
        console.log(this.props.match.params.userId);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`).then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return (
            <Profile {...this.props}/>
        );
    }

}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.profile
    }
};

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));