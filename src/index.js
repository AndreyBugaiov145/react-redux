import React from 'react';
import {render} from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {compose,createStore,applyMiddleware} from "redux";
import {Provider} from 'react-redux'
import {rootReducer} from "./redux/rootReducer";
import thunk from "redux-thunk";
import {spamWordsMiddleware} from "./redux/middleware";

const store = createStore(rootReducer,compose(
    applyMiddleware(thunk,spamWordsMiddleware),

    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
