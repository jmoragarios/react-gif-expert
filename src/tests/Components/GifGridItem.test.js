import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Tests in <GifGriditem />', () => {
    test('should show the component successfuly', () => {

        const wrapper = shallow( <GifGridItem/ >)

        expect( wrapper ).toMatchSnapshot();
    })
})