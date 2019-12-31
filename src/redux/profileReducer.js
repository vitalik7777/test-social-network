const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    postsData: [
        {
            id: 1,
            message: 'hi how are you',
            likescount: 0
        },
        {
            id: 2,
            message: 'pizda',
            likescount: 6
        }
    ],
    newPostText: 'vetal',

    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likescount: 0
            };

            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.userProfile}
        }
        default:
            return state;
    }
};

export const updateNewPostActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const addPostActionCreator = () => ({type: ADD_POST});

export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile});

export default profileReducer;