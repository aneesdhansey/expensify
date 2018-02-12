import expensesReducer from '../../reducers/expenses'

import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = { type : 'REMOVE_EXPENSE', id : expenses[1].id};

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([
        expenses[0],
        expenses[2]
    ]);
});

test('should not remove expense if id not found', () => {
    const action = { type : 'REMOVE_EXPENSE', id : '-1'};

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    const exp = {
        description : 'Testing add expense',
        notes : '',
        amount : 555
    };

    const action = { type : 'ADD_EXPENSE', expense : exp};

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([...expenses, exp]);
});

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: { description: 'Rent Modified', amount : 29500 }
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0],{...expenses[1], ...action.updates },expenses[2]]);
});

test('should not edit an expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: { description: 'Rent Modified' }
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});