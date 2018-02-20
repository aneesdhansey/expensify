import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

import AppRouter from './routers/AppRouter'

import configureStore from './store/configureStore'
import { startAddExpense, startSetExpenses } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

import './firebase/firebase'

const store = configureStore();

const app = (
    <Provider store={store}>
                <AppRouter />
            </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(app, document.getElementById('app'));
});


