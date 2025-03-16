import React, { useState, useContext } from "react";
import "../components_styles/header.scss"; // Assuming you will create a CSS file for styling
import {
  CartContext,
  FetchContext,
  CategoryContext,
} from "../../tools/setContext";

function cleanOrders(setOrders, product) {
  !product
    ? setOrders([])
    : setOrders((prev) => prev.filter((it) => it !== product));
}

const searchOnPage = (
  searchArea,
  setFilteredProducts,
  setSelectedCategory,
  products,
  filteredProducts
) => {
  if (!products) return; // Перевірка на випадок, якщо products ще не завантажені

  const trimmedSearch = searchArea.trim();

  if (trimmedSearch === "") {
    setFilteredProducts(products);
    setSelectedCategory([]);
    return;
  }

  const srcPROD = filteredProducts.filter((product) =>
    product.title.toLowerCase().includes(trimmedSearch)
  );

  if (srcPROD.length === 0) {
    alert("item not found");
    return;
  }

  setFilteredProducts(srcPROD);
};

const CartItem = ({ setOrders, orders }) => {
  return (
    <>
      {orders.map((product) => (
        <div key={product.id} className="product_cart_box">
          <img src={product.image} alt="product_image_in_cart"></img>
          <div className="detail_order">
            <p>{product.title}</p>
            <p>${Number(product.price).toFixed(2)}</p>
          </div>
          <button
            onClick={() => {
              cleanOrders(setOrders, product);
            }}
          >
            Delete
          </button>
        </div>
      ))}
      <p>
        Total price: $
        {orders.reduce((sum, product) => sum + (product.price || 0), 0)}
      </p>
      <button onClick={() => cleanOrders(setOrders)}>Clear order list</button>
    </>
  );
};
const Header = () => {
  const { setSelectedCategory } = useContext(CategoryContext);
  const [cartOpen, setCartOpen] = useState(false);
  const { orders, setOrders } = useContext(CartContext);
  const { products, filteredProducts, setFilteredProducts } =
    useContext(FetchContext);
  const [searchArea, setSearchArea] = useState("");
  const ICON_LOGO = `${process.env.PUBLIC_URL}/images/icons/logo_45x2.png`
  const [onFocus, setOnFocus] = useState(false);
  // const ICON_CART = "/images/icons/cart_icon.svg";
  const ICON_LOGIN = `${process.env.PUBLIC_URL}/images/icons/login.svg`;
  return (
    <header className="header">
      <nav className="menu">
        <ul>
          <li>
            <a className="links" href="#shop">
              Shop
            </a>
          </li>
          <li>
            <a className="links" href="#about_us">
              About Us
            </a>
          </li>
          <li>
            <a className="links" href="#contact_us">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <div className="logo_header">
        <h3 className="logo_header_text">Crafted</h3>
        <img src={ICON_LOGO} alt="Shop Logo" />
        <h3 className="logo_header_text">Treasures</h3>
      </div>
      <div className="entrance_mode">
        <label className={`search-label ${onFocus && "active"}`}>
          <input
            type="text"
            placeholder="Search"
            className="search-area"
            value={searchArea}
            onChange={(e) => setSearchArea(e.target.value)}
            onFocus={() => setOnFocus((prev) => !prev)}
            onBlur={() => setOnFocus((prev) => !prev)}
          />
          <button
            type="button"
            className="search-icon"
            onClick={() =>
              searchOnPage(
                searchArea,
                setFilteredProducts,
                setSelectedCategory,
                products,
                filteredProducts
              )
            }
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8433 14.4896C10.0462 17.3722 4.73837 16.5745 1.92691 13.2685C-0.786647 10.0766 -0.616938 5.47198 2.32685 2.5577C5.36855 -0.453257 10.1507 -0.855208 13.6172 1.61473C14.8592 2.49947 15.7866 3.62505 16.3907 4.98749C16.9983 6.35786 17.1829 7.78362 16.9722 9.25405C16.7622 10.7177 16.1492 12.0219 15.1517 13.2391C15.2324 13.2894 15.3185 13.3256 15.3802 13.3844C16.4767 14.4246 17.5692 15.4687 18.6657 16.509C18.9256 16.7554 19.055 17.0426 18.9779 17.3886C18.8248 18.0772 17.9644 18.3429 17.4125 17.8703C17.1538 17.6492 16.9158 17.4056 16.6702 17.1715C15.7694 16.3139 14.8693 15.4557 13.9685 14.5981C13.9311 14.5642 13.892 14.5326 13.8433 14.4896ZM15.1618 8.13696C15.1713 4.64208 12.2097 1.81655 8.53308 1.81146C4.86655 1.80637 1.90733 4.60929 1.89131 8.10191C1.87528 11.6053 4.83094 14.4387 8.51884 14.4551C12.1705 14.4715 15.1523 11.6352 15.1618 8.13696Z"
                fill="#37CECE"
              />
            </svg>
          </button>
        </label>
        <div
          className={`cart_header ${cartOpen && "active"}`}
          onClick={() => setCartOpen((prev) => !prev)}
        >
          <button>
            {/* <img src={ICON_CART} alt="Cart shop" />
             */}
            <svg
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9993 20.25H10.3769C7.12285 20.25 4.47542 17.7267 4.47542 14.6251V8.85947C4.47542 5.9762 2.96768 3.30739 0.44227 1.72031C-0.0112621 1.43531 -0.136473 0.853876 0.162538 0.421598C0.461548 -0.0107278 1.07152 -0.130118 1.52515 0.154974C2.9668 1.06097 4.13638 2.2559 4.97272 3.63167C5.15346 3.82466 6.61084 5.29699 8.99997 5.29699H20.3263C23.4165 5.24191 25.8352 8.19769 25.0272 11.0406L23.7234 15.9939C23.0638 18.4998 20.7099 20.25 17.9993 20.25ZM6.19444 6.64234C6.35796 7.36238 6.4426 8.10483 6.4426 8.85947V14.6251C6.4426 16.6928 8.20755 18.375 10.3769 18.375H17.9993C19.8064 18.375 21.3756 17.2082 21.8153 15.5376L23.1192 10.5844C23.5993 8.89509 22.1619 7.13931 20.3263 7.17198H8.99992C7.9194 7.17198 6.9789 6.94993 6.19444 6.64234ZM9.88515 22.8281C9.88515 22.1809 9.33469 21.6563 8.65567 21.6563C7.02429 21.7182 7.02572 23.9387 8.65567 24C9.33469 24 9.88515 23.4753 9.88515 22.8281ZM19.6719 22.8281C19.6719 22.1809 19.1214 21.6563 18.4424 21.6563C16.811 21.7182 16.8124 23.9387 18.4424 24C19.1214 24 19.6719 23.4753 19.6719 22.8281ZM21.3099 9.98446C21.3099 9.46668 20.8696 9.04697 20.3263 9.04697H9.39336C8.08834 9.09647 8.08932 10.8729 9.39336 10.922H20.3263C20.8696 10.922 21.3099 10.5022 21.3099 9.98446Z"
                fill="#3D3D3D"
              />
            </svg>

            {orders.length ? (
              <div className="quantity_cart">{orders.length}</div>
            ) : (
              ""
            )}
          </button>
        </div>
        <button className="login" aria-label="login">
          <img src={ICON_LOGIN} alt="login" />
          Login
        </button>
      </div>
      {cartOpen && (
        <div className="cart_box_wrapper">
          {orders.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            <CartItem setOrders={setOrders} orders={orders}></CartItem>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
