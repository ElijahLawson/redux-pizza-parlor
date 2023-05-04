import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

//Redux imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//Reducers
const pizzas = (state=[], action) => {
    switch (action.type) {
        case 'SET_PIZZAS':
            return action.payload;
        default:
            return state;
    }
}

// need reducer for current customer
const currentCustomer = (state={}, action) => {
    switch (action.type) {
        case 'CREATE_CUSTOMER':
            return action.payload;
        default:
            return state;
    }
}

const orders = (state=[], action) => {
    return state;
}

//Redux Store
const store = createStore(
    combineReducers({pizzas, orders, currentCustomer}),
    applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>

    </React.StrictMode>
);
