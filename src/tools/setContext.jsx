import { createContext, useState, useEffect } from "react";

const FetchContext = createContext();

function DataProvider({ children }) {
  //сюди я вставлю юрл з фільтрів отриманий

  const [URL, setURL] = useState("");
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProductData() {
      try {
        const resp = await fetch(URL);
        const data = await resp.json();
        setProducts(data);
        setCategory(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }

    getProductData(); // Викликаємо асинхронну функцію
  }, [URL]);

  return (
    <FetchContext.Provider value={{ products, URL, setURL, setProducts, category}}>
      {children}
    </FetchContext.Provider>
  );
}

export { DataProvider, FetchContext };
