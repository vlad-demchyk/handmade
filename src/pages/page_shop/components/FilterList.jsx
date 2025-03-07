import React, { useState } from 'react';
import products from '../fetchData';

const FilterList = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <nav className='filter-menu'>
            <h2>Filter by Category</h2>
            <ul>
                {products.map((category) => (
                    <li key={category.id} onClick={() => handleCategoryClick(category)}>
                        {category.category}
                    </li>
                ))}
            </ul>
            {selectedCategory && (
                <div>
                    <h3>Selected Category: {selectedCategory.category}</h3>
                    {/* Here you can add logic to fetch and display items based on the selected category */}
                </div>
            )}
        </nav>
    );
};

export default FilterList;