import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Tests in <GifGriditem />', () => {

    const title = 'dummy title';
    const url = 'http://localhost/algo.png';

    test('should show the component successfuly', () => {

        const wrapper = shallow( <GifGridItem title= { title } url={ url }/ >)

        expect( wrapper ).toMatchSnapshot();
    })
})