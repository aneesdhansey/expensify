import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import numeral from 'numeral'

import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'


export const ExpensesSummary = ({ expensesCount, expensesTotal, hiddenExpenses }) => {

    const expText = expensesCount === 1 ? 'expense' : 'expenses';
    const hiddenExpTest = hiddenExpenses === 1 ? 'expense' : 'expenses';

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{expensesCount}</span> {expText} totalling <span>{numeral(expensesTotal / 100).format('$0,0.00')}</span>
                    {(hiddenExpenses > 0) && <p class="hidden-count"> (<span>{hiddenExpenses}</span> hidden {hiddenExpTest})</p>}
                    <div className="page-header__actions">
                        <Link className="button" to="/create">Add Expense</Link>
                    </div>
                </h1>
            </div>
        </div>
    )

};

const mapStateToProps = (state) => {

    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    const expensesCount = visibleExpenses.length;
    const expensesTotal = selectExpensesTotal(visibleExpenses);

    const hiddenExpenses = state.expenses.length - visibleExpenses.length;

    return { expensesCount, expensesTotal, hiddenExpenses }
}

export default connect(mapStateToProps)(ExpensesSummary)

