import React from 'react'

export const GifGrid = ({ category }) => {

    const getGifs = async () => {
        
        const url = 'http://api.giphy.com/v1/gifs/search?q=Naruto&limit=10&api_key=F5av68ecrjZl4tx7XtSN679Z8HVx91Bl';
        const response = await fetch( url );
        const { data } = await response.json();
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_large.url
            }
        })
        
        console.log(gifs);

    }

    getGifs();

    return (
        <>
            <h3>{ category }</h3>
        </>
    )
}
