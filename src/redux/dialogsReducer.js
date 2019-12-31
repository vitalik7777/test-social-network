const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_DIALOG_MESSAGE_TEXT = 'ADD-DIALOG-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            };
        }
        case ADD_DIALOG_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData,
                    {id: 6, message: state.newMessageText}]
            };
        }
        default:
            return state;

    }
};


export const updateNewMessageActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export const addMessageActionCreator = () => ({type: ADD_DIALOG_MESSAGE_TEXT});

export default dialogsReducer;