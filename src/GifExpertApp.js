import React, { useState } from 'react';

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const handleAdd = () => {

        const newCategory = 'Naruto';

        setcategories( [...categories, newCategory ]);

    }

    return (
        <>
         <h2>Gif Expert App</h2>
         <hr/>   

         <button onClick={ handleAdd }>Agregar</button>

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
