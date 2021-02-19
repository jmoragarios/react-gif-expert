import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
         <h2>Gif Expert App</h2>
         <AddCategory setCategories={ setCategories }/>
         <hr/>   

         <ol>
             {
                 categories.map( (category, i) => (
                    <GifGrid 
                        key={i}
                        category={ category }/>
                 ))
             }
         </ol>
         
        </>
    )
}
