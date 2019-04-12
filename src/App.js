import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Navbar from './components/Navbar/Navbar.js';
import Profile from './components/Profile/Profile.js';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {

        return (


                <div className="app-wrapper">
                    <Header/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route path="/profile" render ={ () =>  <Profile/>  }/>
                        <Route path="/dialogs" render ={ () => <DialogsContainer/>  }/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>
                    </div>
                </div>
        );
};

export default App;