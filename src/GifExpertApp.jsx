import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories(listCategories => [newCategory, ...listCategories]);

    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onAddCategory={onAddCategory} />
            {
                categories.map((category) => {
                    return <GifGrid key={category} category={category} />
                })
            }
        </>
    )
}
