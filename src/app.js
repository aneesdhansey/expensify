import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

import AppRouter from './routers/AppRouter'

import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

// const store = configureStore();

// const app = <Provider store={store}>
//                 <AppRouter />
//             </Provider>;

const App = () => <p>Its working!!!</p>

ReactDOM.render(app, document.getElementById('app'));
