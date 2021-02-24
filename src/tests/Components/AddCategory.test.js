import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Test in <AddCategory/>', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories= { setCategories }/>); //just for intelliSense

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories= { setCategories }/>);
    });

    test('should show the component successfully', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test("should not submit wrong info", () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        
        expect( setCategories ).not.toHaveBeenCalled();

    });

    test('should call setCategories and clear the input textbox', () => {
        
        const input = wrapper.find('input');
        const value = 'Hello World!';

        input.simulate('change', { target: { value } });

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) );

        expect( input.prop('value') ).toBe('');

    });
    
    
    
})
