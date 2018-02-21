import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import numeral from 'numeral'

import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'


export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {

    const expText = expensesCount === 1 ? 'expense' : 'expenses';

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{expensesCount}</span> {expText} totalling <span>{numeral(expensesTotal / 100).format('$0,0.00')}</span>
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

    return { expensesCount, expensesTotal }
}

export default connect(mapStateToProps)(ExpensesSummary)

