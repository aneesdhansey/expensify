import React, { Component } from 'react'
import { connect } from 'react-redux'

import { startEditExpense, startRemoveExpense } from '../actions/expenses'

import ExpenseForm from './ExpenseForm'

export class EditExpensePage extends Component {

  onSubmit = (id, expense) => {
    this.props.startEditExpense(id, expense);
    this.props.history.push('/dashboard');
  }

  onRemove = (id) => {
    this.props.startRemoveExpense(id);
    this.props.history.push('/dashboard');
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={(expense) => this.onSubmit(this.props.expense.id, expense)} />
          <button className="button button--secondary"
                  onClick={() => this.onRemove(this.props.expense.id)}>
            Remove Expense
          </button>
        </div>
        <br/>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(exp => exp.id === props.match.params.id)
  }
}

const mapDispatchToProps = (dispatch) => ({
  startEditExpense: (id, updates) => dispatch(startEditExpense({ id, updates })),
  startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

