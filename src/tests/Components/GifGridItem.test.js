import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Tests in <GifGriditem />', () => {

    const title = 'dummy title';
    const url = 'http://localhost/algo.png';
    const wrapper = shallow( <GifGridItem title= { title } url={ url } />);

    test('should show the component successfuly', () => {

        expect( wrapper ).toMatchSnapshot();

    })

    test('should have a p tag with the title', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title ); 
    })

    test('should have an img tag with url and alt from the props', () => {
        
        const img = wrapper.find('img');
        
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    })

    test('should have a div tag with the animate__fadeIn class', () => {
        
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect( className.includes('animate__fadeIn')).toBe( true );
    })
    
    
    
})