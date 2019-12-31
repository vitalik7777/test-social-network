import React from 'react';
import {NavLink} from 'react-router-dom';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => <button onClick={() => {
                    props.onPageChanged(p)
                }} className={props.currentPage === p ? 'selected-page' : ''}>{p}</button>)}
            </div>
            {
                props.users.map(u => {
                    return (
                        <div key={u.id}>
                            <div className="avatar">
                                <span></span>
                                <span>
                                    {
                                        u.followed
                                            ? <button onClick={() => {
                                                props.unfollow(u.id)
                                            }}>Unfollow</button>
                                            : <button onClick={() => {
                                                props.follow(u.id)
                                            }}>Follow</button>
                                    }
                                </span>
                            </div>
                            <div>
                                <NavLink to={'/profile/' + u.id}>{u.name}</NavLink>
                            </div>
                            <div>{u.status}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users;