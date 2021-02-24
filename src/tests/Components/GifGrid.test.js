import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Tests in <GifGrid/>', () => {
    
    const category = 'One Pounch';

    test('should show the component successfully', () => {
        
        // simulate hook run
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={ category }/>);

        expect( wrapper ).toMatchSnapshot();
    });

    test('should show items when images are loaded from useFetchGifs', () => {
        
        // dummy data
        const gifs = [
            {
            id: 'ABC',
            url: 'https://localhost/any/thing.jpg',
            title: 'Any thing'
        },
        {
            id: '123',
            url: 'https://localhost/any/thing.jpg',
            title: 'Any thing'
        }
    ]

        // simulate hook run
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={ category }/>);

        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    })
    
    
})
