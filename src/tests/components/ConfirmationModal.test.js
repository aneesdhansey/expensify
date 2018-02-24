import React from 'react'
import { shallow } from 'enzyme'

import ConfirmationModal from '../../components/ConfirmationModal'

let handleYes, handleNo, wrapper;

beforeEach(() => {
    handleYes = jest.fn();
    handleNo = jest.fn();
    wrapper = shallow(<ConfirmationModal 
                                isOpen={true}
                                modalTitle="Testing Modal"
                                modalBody="This is a test"
                                handleYes={handleYes}
                                handleNo={handleNo} />);
});

test('it should display ConfirmationModal correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('it should call handleYes on clicking "Yes" button', () => {

    wrapper.find('button.button-yes').simulate('click');
    expect(handleYes).toHaveBeenCalled();
});

test('it should call handleNo on clicking "No" button', () => {

    wrapper.find('button.button-no').simulate('click');
    expect(handleNo).toHaveBeenCalled();
});