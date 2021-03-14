import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

import reducers from './reducers'

import App from './App';

ReactDOM.render(<App/>, document.getElementById('root'))

const store = createStore(reducers, componse(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
   document.getElementById('root')
);