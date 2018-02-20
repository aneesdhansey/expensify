import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let editExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push : jest.fn()};
    wrapper = shallow(<EditExpensePage
                            expense={expenses[0]}
                            editExpense={editExpense}
                            startRemoveExpense={startRemoveExpense}
                            history={history}/>);
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle edit expense', () => {

    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});


test('should handle remove expense', () => {
    wrapper.find('button').simulate('click');
    expect(startRemoveExpense).toHaveBeenCalledWith(expenses[0].id);
});