import React, {
  useContext,
  useLayoutEffect,
  useEffect,
} from "react";
import { FetchContext, CategoryContext } from "../../../tools/setContext";
import "../components_styles/filterList.scss";

const FilterList = () => {
  const { products, setURL, filteredProducts, setFilteredProducts } =
    useContext(FetchContext);

  const { categories, setCategories, selectedCategory, setSelectedCategory } =
    useContext(CategoryContext);

  // const [categories, setCategories] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState([]);

  useEffect(() => {
    const categoryCount = products.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    }, {});

    const formattedCategories = Object.entries(categoryCount).map(
      ([category, count]) => ({
        category,
        count,
      })
    );

    setCategories(formattedCategories);
  }, [filteredProducts]); // Викликається при зміні `products`

  useLayoutEffect(() => {
    setURL("https://fakestoreapi.com/products/"); // задаю правильний список, в майбутньому буду передавати правильний юрл фільтрами
  }, [setURL]);

  const toggleCategory = (category) => {
    if (!category) {
      setFilteredProducts(products); // Повертаємо всі продукти
      setSelectedCategory([]);
      return;
    }

    setSelectedCategory((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  useEffect(() => {
    !selectedCategory.length
      ? setFilteredProducts(products)
      : setFilteredProducts(
          products.filter((item) => selectedCategory.includes(item.category))
        );
  }, [selectedCategory, products]);

  return (
    <div className="filter-wrapper">
      <h2>Categories</h2>
      {/* <h2 ref={categoryRef}>Categories</h2> */}
      <nav>
        {categories.map((category, index) => (
          <label
            key={index}
            className={`filter-menu ${
              selectedCategory.includes(category.category) ? "active" : ""
            }`}
          >
            {category.category}{" "}
            <span
              className={
                selectedCategory.includes(category.category) ? "active" : ""
              }
            >{`(${category.count})`}</span>
            <input
              type="checkbox"
              checked={selectedCategory.includes(category.category)}
              onChange={() => {
                toggleCategory(category.category);
              }}
              style={{ display: "none" }}
            />{" "}
          </label>
        ))}
        <button onClick={() => toggleCategory()}>Reset filter</button>
      </nav>
    </div>
  );
};

export default FilterList;
