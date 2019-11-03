import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import * as serviceWorker from "./serviceWorker";

import Home from "./container/Home/Home";
import {
    createStore
} from 'redux'
import {
    Provider
} from 'react-redux'

const globalState = {
    totalOlder: 0
}


//reduser memerlikan 2 parameter
const rootReduser = (state = globalState, action) => {
    if (action.type === 'PLUS_OLDER') {
        return {
            ...state,
            totalOlder: state.totalOlder + 1
        }
    }
    if (action.type === 'MINUS_OLDER') {

        let totalOlder = 0;
        if (state.totalOlder > 0) {

            totalOlder = state.totalOlder - 1

        }
        return {
            ...state,
            totalOlder: totalOlder
        }
    }
    return state
}
//store
const store = createStore(rootReduser)

//dispatch action
// console.log(rootReduser);


ReactDOM.render( < Provider store = {
            store
        } > < Home / > < /Provider> , document.getElementById("root"));

        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: https://bit.ly/CRA-PWA
        serviceWorker.unregister();