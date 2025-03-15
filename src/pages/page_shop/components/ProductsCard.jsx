// import products from "../fetchData";
import "../components_styles/ProductsCard.scss";
import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import { FetchContext, CartContext } from "../../../tools/setContext";

const Dot = styled.div`
  background-color: ${(props) => props.$color};
`;

const isObjContainElement = (object, element) => {
  let result = object.some((item) => item.id === element.id);
  return result;
};

const ProductsCard = () => {
  const { filteredProducts } = useContext(FetchContext);
  const { favoriteItems, setFavoriteItems, orders, setOrders } =
    useContext(CartContext);

  function addToMemory(type, item) {
    if (type === "favorite") {
      setFavoriteItems((prev) => {
        const update = prev.some(el=>el.id === item.id)
          ? prev.filter((it) => it.id !== item.id)
          : [...prev, item];
        return update;
      });
    } else if (type === "cart") {
      setOrders((prev) => {
        const update = prev.some(it=>it.id === item.id)
          ? prev.filter((it) => it.id !== item.id)
          : [...prev, item];
        return update;
      });
    }
  }

  if (!filteredProducts) return <div>Loading...</div>; // Показуємо Loading, якщо products ще не завантажені

  return (
    <div className="main_part">
      <div className="hight_bar_filter"> </div>
      <div className="products_layout">
        {filteredProducts.map((item) => (
          <div className="item_card" key={item.id}>
            <div className="image_card">
              <button
                className={`setting-button to_cart ${
                  isObjContainElement(orders, item) ? "added" : ""
                }`}
                onClick={() => addToMemory("cart", item)}
              >
                <svg
                  className={`icon_color`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={`${ isObjContainElement(orders, item)?  "added" : ""}`}
                    // className={`${changeStateOnButton("cart", item.id)}`}
                    d="M19.7143 13.1026H13.2857V19.5312C13.2857 19.8722 13.1503 20.1992 12.9091 20.4403C12.668 20.6814 12.341 20.8169 12 20.8169C11.659 20.8169 11.332 20.6814 11.0909 20.4403C10.8497 20.1992 10.7143 19.8722 10.7143 19.5312V13.1026H4.28571C3.94472 13.1026 3.6177 12.9672 3.37658 12.726C3.13546 12.4849 3 12.1579 3 11.8169C3 11.4759 3.13546 11.1489 3.37658 10.9078C3.6177 10.6666 3.94472 10.5312 4.28571 10.5312H10.7143V4.10261C10.7143 3.76162 10.8497 3.43459 11.0909 3.19347C11.332 2.95235 11.659 2.81689 12 2.81689C12.341 2.81689 12.668 2.95235 12.9091 3.19347C13.1503 3.43459 13.2857 3.76162 13.2857 4.10261V10.5312H19.7143C20.0553 10.5312 20.3823 10.6666 20.6234 10.9078C20.8645 11.1489 21 11.4759 21 11.8169C21 12.1579 20.8645 12.4849 20.6234 12.726C20.3823 12.9672 20.0553 13.1026 19.7143 13.1026Z"
                    fill="black"
                    stroke="green"
                  />
                </svg>
              </button>
              <button
                className={`setting-button to_favorite ${
                  isObjContainElement(favoriteItems, item)? "added" : ""
                }`}
                onClick={
                  () => addToMemory("favorite", item)
                  // favoriteMemory[item.id]
                  //   ? removeFromMemory("favorite", item.id)
                  //   : addToMemory("favorite", item.id)
                }
              >
                <svg
                  className={`icon_color`}
                  width="24"
                  height="21"
                  viewBox="0 0 24 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={`${isObjContainElement(favoriteItems, item)? "added" : ""}`}
                    d="M1 6.4C1 2 4.5 1 6.5 1C9 1 11 3 12 4.5C13 3 15 1 17.5 1C19.5 1 23 2 23 6.4C23 13 12 19 12 19C12 19 1 13 1 6.4Z"
                    fill="green"
                    stroke="black"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              <img src={item.image} alt="product`image" />
            </div>
            <p className="item_name">{item.title}</p>
            <p className="item_price">
              {typeof item.price === "number"
                ? `$${item.price.toFixed(2)}`
                : `$${Number(item.price).toFixed(2)}`}
            </p>
            <Dot $color={item.color} className="item_color"></Dot>
          </div>
        ))}
        <div />
      </div>
    </div>
  );
};

export default ProductsCard;
