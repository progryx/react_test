import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/redux-store';
import './index.css';
import App from './App';
import {Provider} from "react-redux"; // спомощью Provider прокидывается СТОР и принимается контейнерными компонентами
                                    // СТОР
import {BrowserRouter} from "react-router-dom";


    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
        , document.getElementById('root')
    );