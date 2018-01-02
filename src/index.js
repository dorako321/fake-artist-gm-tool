import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import './index.css';
import App from './App';
import reducers from './common/reducer'
import registerServiceWorker from './registerServiceWorker';


const middleware = [thunk]
const store = createStore(
    reducers,
    applyMiddleware(...middleware)
)


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
