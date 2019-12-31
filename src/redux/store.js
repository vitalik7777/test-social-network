import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';

let store = {
    _state: {
        profilePage: {
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
            newPostText: 'vetal'

        },

        dialogsPage: {
            dialogsData: [
                {
                    id: 1,
                    name: 'asdasdsadasdasdsd'
                },
                {
                    id: 2,
                    name: 'Andrii'
                }
            ],

            messagesData: [
                {
                    id: 1,
                    message: 'sralaaaaaaa'
                },
                {
                    id: 2,
                    message: 'Pizdaaaaaaaaaaaaaaa'
                }
            ],

            newMessageText: 'vvvvvvvvvvvv'
        }
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('ssss');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
};



export default store;