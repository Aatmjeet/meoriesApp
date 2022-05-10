import React from 'react';

// React dom is deprecated in React 18
// SO using createRoot
// import ReactDOM from 'react-dom';
import App from './App';

// redux things
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";

import './index.css';

// reducers
import reducers from './reducers';

import { createRoot } from "react-dom/client";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)
