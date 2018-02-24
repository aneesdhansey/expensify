import React, { Component } from 'react'
import { connect } from 'react-redux'

import { startEditExpense, startRemoveExpense } from '../actions/expenses'

import ExpenseForm from './ExpenseForm'
import ConfirmationModal from './ConfirmationModal'

export class EditExpensePage extends Component {

  state = {
    isModalOpen: false
  };

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
            onClick={() => this.setState(() => ({ isModalOpen: true }))}>
            Remove Expense
          </button>
        </div>
        <br />
        <ConfirmationModal
          isOpen={this.state.isModalOpen}
          modalTitle="Confirm"
          modalBody="Are you sure you want to remove this expense?"
          handleYes={() => this.onRemove(this.props.expense.id)}
          handleNo={() => this.setState(() => ({ isModalOpen: false }))}
        />
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

