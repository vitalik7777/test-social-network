const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SET_CURENT_PAGE = 'SET-CURENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';

let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage:4
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SETUSERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        default:
            return state;

    }
};


export const follow = (userid) => ({type: FOLLOW, userid});

export const unfollow = (userid) => ({type: UNFOLLOW, userid});

export const setUsers = (users) => ({type: SETUSERS, users});

export const setCurentPage = (currentPage) => ({type: SET_CURENT_PAGE, currentPage});

export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});

export default profileReducer;