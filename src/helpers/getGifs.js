
export const getGifs = async ( category ) => {
        
    const url = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=F5av68ecrjZl4tx7XtSN679Z8HVx91Bl`;
    const response = await fetch( url );
    const { data } = await response.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_large.url
        }
    })
    return gifs;
}