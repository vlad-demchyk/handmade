import { createContext, useState, useEffect } from "react";

const FetchContext = createContext();
const CartContext = createContext();
const CategoryContext = createContext();

function DataProvider({ children }) {
  //сюди я вставлю юрл з фільтрів отриманий

  const [URL, setURL] = useState("");
  const [products, setProducts] = useState([]); // початковий стан
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function getProductData() {
      try {
        const resp = await fetch(URL);
        const data = await resp.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }

    getProductData(); // Викликаємо асинхронну функцію
  }, [URL]);

  return (
    <FetchContext.Provider
      value={{
        products,
        URL,
        setURL,
        setProducts,
        filteredProducts,
        setFilteredProducts,
      }}
    >
      {children}
    </FetchContext.Provider>
  );
}

function CartProvider({ children }) {
  const getStoredData = (name) => {
    try {
      const data = localStorage.getItem(name);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  };

  const [orders, setOrders] = useState(() => getStoredData("cartOrders"));
  const [favoriteItems, setFavoriteItems] = useState(() =>
    getStoredData("favoriteItems")
  );


  useEffect(() => {
    localStorage.setItem("cartOrders", JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  return (
    <CartContext.Provider
      value={{ orders, setOrders, favoriteItems, setFavoriteItems }}
    >
      {children}
    </CartContext.Provider>
  );
}
function CategoryProvider({ children }) {

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  return (
    <CategoryContext.Provider
      value={{ categories, setCategories, selectedCategory, setSelectedCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
}



export { DataProvider, CategoryProvider, CartProvider, FetchContext, CartContext, CategoryContext };
