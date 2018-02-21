import React, { Component } from 'react'

import ExpenseListFilters from './ExpenseListFilters'
import ExpensesSummary from './ExpensesSummary'
import ExpenseList from './ExpenseList'

class ExpenseDashboardPage extends Component {
  render() {
    return (
      <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
      </div>
    )
  }
}

export default ExpenseDashboardPage
