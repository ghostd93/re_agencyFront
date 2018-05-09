import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import {loadState, saveState } from './actions/index';

import Bootstrap from 'react-bootstrap';

import reducer from './reducers';

import App from './App';

const persistedState = loadState();

// const enhancer = compose(
//     applyMiddleware(thunk),
//     window.devToolsExtension ? window.devToolsExtension() : f => f,
//     loadState()
//   );

const store = createStore(reducer, persistedState, 
    compose(applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);


store.subscribe(() =>{
    saveState(store.getState());
});








ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

