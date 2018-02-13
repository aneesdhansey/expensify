import React from 'react'
import { shallow } from 'enzyme'

import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'

test('it should render ExpenseListItem with the expense data', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[1]} />);

    expect(wrapper).toMatchSnapshot();
});