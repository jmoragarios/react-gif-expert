import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    // const handleAdd = () => {

    //     const newCategory = 'Naruto';

    //     setcategories( [...categories, newCategory ]);

    // }

    return (
        <>
         <h2>Gif Expert App</h2>
         <AddCategory setCategories={ setCategories }/>
         <hr/>   

         <ol>
             {
                 categories.map( (category, i) => {
                     return <li key={ i }>{ category }</li>
                 })
             }
         </ol>
         
        </>
    )
}
