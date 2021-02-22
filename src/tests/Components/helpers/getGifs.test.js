import { getGifs } from '../../../helpers/getGifs';

describe('Tests in getGifs.js helper', () => {
    
    test('should get 10 items', async () => {
        
        const gifs = await getGifs('One Piece');

        expect( gifs.length ).toBe( 10 );
    })
    
    test('should get 0 items', async () => {
        
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );
    })

})
