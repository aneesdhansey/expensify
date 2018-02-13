import React from 'react'
import { connect } from 'react-redux'

import selectExpenses from '../selectors/expenses'

import ExpenseListItem from './ExpenseListItem'

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No Expenses</p>
            ) : (
                    props.expenses.map((exp) => <ExpenseListItem {...exp} key={exp.id} />)
                )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);
