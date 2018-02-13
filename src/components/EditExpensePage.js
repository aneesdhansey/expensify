import React, { Component } from 'react'
import { connect } from 'react-redux'

import { editExpense, removeExpense } from '../actions/expenses'

import ExpenseForm from './ExpenseForm'

export class EditExpensePage extends Component {

  onSubmit = (id, expense) => {
    this.props.editExpense(id , expense);
    this.props.history.push('/');
  }

  onRemove = (id) => {
    this.props.removeExpense(id);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={(expense) => this.onSubmit(this.props.expense.id, expense)} />
        <button onClick={() => this.onRemove(this.props.expense.id)}>Remove</button>
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
  editExpense : (id, updates) => dispatch(editExpense({ id, updates })),
  removeExpense : (id) => dispatch(removeExpense({id}))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

