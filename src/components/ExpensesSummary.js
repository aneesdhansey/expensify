import React, { Component } from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'

import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'


export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {

    const expText = expensesCount === 1 ? 'expense' : 'expenses';

    return (
        <p>
            Viewing {expensesCount} {expText} totalling {numeral(expensesTotal / 100).format('$0,0.00')}
        </p>
    )

};

const mapStateToProps = (state) => {

    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    const expensesCount = visibleExpenses.length;
    const expensesTotal = selectExpensesTotal(visibleExpenses);

    return { expensesCount, expensesTotal }
}

export default connect(mapStateToProps)(ExpensesSummary)

