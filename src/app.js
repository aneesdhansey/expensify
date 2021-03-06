import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'font-awesome/css/font-awesome.min.css';

import AppRouter, { history } from './routers/AppRouter'

import configureStore from './store/configureStore'
import { startAddExpense, startSetExpenses } from './actions/expenses'
import { login, logout } from './actions/auth'
import getVisibleExpenses from './selectors/expenses'

import { firebase } from './firebase/firebase'

import LoadingPage from './components/LoadingPage';

const store = configureStore();

const app = (
    <Provider store={store}>
                <AppRouter />
            </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(app, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if(history.location.pathname === '/')
                history.push('/dashboard');
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});

