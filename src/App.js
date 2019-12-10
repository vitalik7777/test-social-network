import React from 'react';
import './App.css';
import Header from './components/header';
import NavBar from './components/nav-bar';
import Profile from './components/profile';

function App() {
    return (
        <div className="App">
            <Header/>
            <NavBar/>
            <Profile/>
        </div>
    );
}

export default App;
