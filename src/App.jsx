import "./App.scss";
import Header from "./pages/components/Header";
import Shop from "./pages/page_shop/Shop";
import {
  DataProvider,
  CartProvider,
  CategoryProvider,
} from "./tools/setContext";

function App() {
  return (
    <DataProvider>
      <CartProvider>
        <CategoryProvider>
          <Header />
          <section className="page_section">
            <Shop></Shop>
          </section>
        </CategoryProvider>
      </CartProvider>
    </DataProvider>
  );
}

export default App;
