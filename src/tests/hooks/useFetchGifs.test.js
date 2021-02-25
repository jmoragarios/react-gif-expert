import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('Tests in useFetchGifs', () => {
    
    test('should return the initial state', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Piece' ) );
        const { data, loading } = result.current;
        
        await waitForNextUpdate();
        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

    })
    
    test('should return an images array and the loading equals false', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Piece' ) );
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect( data.length ).toBe(10);
        expect( loading ).toBe(false); 

    })
    

})
