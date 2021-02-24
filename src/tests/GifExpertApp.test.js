import { shallow } from 'enzyme';
import React from 'react';
import { GifExpertApp } from '../GifExpertApp'

describe('Test <GifExpertApp/>', () => {
    
    test('should show show the component successfully', () => {
        
        const wrapper = shallow( <GifExpertApp /> )
        expect( wrapper ).toMatchSnapshot();

    });
    

})
