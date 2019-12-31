import React from 'react';
import './App.css';

import {Route, BrowserRouter} from 'react-router-dom';
import Header from './components/header/header';
import NavBar from './components/nav-bar/nav-bar';
import ProfileContainer from './components/profile/profileContainer';
import UsersContainer from './components/users/usersContainer';
import DialogContainer from './components/dialogs/dialogContainer';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <NavBar/>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer/>}/>
                <Route exact path='/dialogs'
                       render={() => <DialogContainer/>}/>
                <Route exact path='/users'
                       render={() => <UsersContainer/>}/>

            </div>
        </BrowserRouter>
    );
}

export default App;
