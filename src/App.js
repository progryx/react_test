// Служебные импорты
import React, {Component} from 'react';
import {Route} from "react-router-dom";

// Компоненты и контейнеры
import News from "./components/News/News";
import Music from "./components/Music/Music";
import NavbarContainer from './components/Navbar/NavbarContainer.js';
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from './components/Profile/ProfileContainer.js';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Login from "./components/Login/Login";
import DefaultContainer from "./components/Default/DefaultContainer";

// Стили
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import './App.css';



const App = (props) => {
        return (
                <div className="container">
                    <div className="row">
                        <div className="col-12"><HeaderContainer/></div>
                    </div>

                    <div className="row">
                        <div className="col-4"><NavbarContainer/></div>
                        <div className="col-8">
                            <Route path="/" render ={ () =>  <DefaultContainer/>  }/>
                            <Route path="/profile/:userId?" render ={ () =>  <ProfileContainer/>  }/>
                            <Route path="/dialogs" render ={ () => <DialogsContainer/>  }/>
                            <Route path="/users" render = { () => <UsersContainer/> }/>
                            <Route path="/login" render = { () => <Login/> }/>
                            <Route path="/news" component={News}/>
                            <Route path="/music" component={Music}/>
                            <Route path="/settings" component={Settings}/>
                        </div>
                    </div>
                </div>
        );
};

export default App;
