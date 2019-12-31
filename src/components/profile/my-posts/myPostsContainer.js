import React from 'react';
import MyPosts from './my-posts';
import {connect} from 'react-redux';

import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/profileReducer';

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage,
        newPostText: state.profilePage.newPostText
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;