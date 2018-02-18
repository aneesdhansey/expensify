import React, { Component } from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'

import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

export class ExpensesSummary extends Component {

    render() {
        return (
            <p>
                Viewing {this.props.expensesCount} totalling {numeral(this.props.expensesTotal / 100).format('$0,0.00')}
            </p>
        )
    }
}

const mapStateToProps = (state) => {

    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    const expensesCount = visibleExpenses.length;
    const expensesTotal = selectExpensesTotal(visibleExpenses);

    return { expensesCount, expensesTotal }
}

export default connect(mapStateToProps)(ExpensesSummary)

