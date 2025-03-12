import React, { useState, useContext, useEffect} from 'react';
import {FetchContext} from '../../../tools/setContext';


// import products from '../fetchData';

const FilterList = () => {
    const { products, setURL, setProducts, category } = useContext(FetchContext);
    // const [categories, setCategories] = useState([]); // Збереження унікальних категорій
    // const [allProducts, setAllProducts] = useState([]); // Оригінальний список продуктів

    useEffect(()=>{
        setURL('https://fakestoreapi.com/products/')
    }, [setURL])


    const handleCategoryClick = (chosenCategory) => {
        if (!chosenCategory) {
            setProducts(category); // Повертаємо всі продукти
            return;
          }
          setProducts(category.filter((product) => product.category === chosenCategory));
    };

    return (
        <nav className="filter-menu">
          <h2>Filter by Category</h2>
          <ul>
            {/* <li onClick={() => handleCategoryClick(null)}>All Categories</li> */}
            {category.map((item) => (
              <li key={item.name} onClick={() => handleCategoryClick(item.category)}>
                {item.category}
              </li>

            ))}
            <button onClick={()=>handleCategoryClick()}>Reset filter</button>
          </ul>
        </nav>
      );
};

export default FilterList;