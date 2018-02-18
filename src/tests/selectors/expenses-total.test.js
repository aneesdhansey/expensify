import selectExpensesTotal from '../../selectors/expenses-total'

import expenses from '../fixtures/expenses'

test('should return 0 if no expenses', () => {
    const noexpenses = [];
    const total = selectExpensesTotal(noexpenses);
    expect(total).toBe(0);
});

test('should correctly add up single expense', () => {
    const singleExpense = [expenses[0]];

    const total = selectExpensesTotal(singleExpense);

    expect(total).toBe(195);
});

test('should correctly add up multiple expenses', () => {
    const total = selectExpensesTotal(expenses);

    expect(total).toBe(114195);
});