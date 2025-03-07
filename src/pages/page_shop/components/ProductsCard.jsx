import React from "react";
import products from "../fetchData";
import "../components_styles/ProductsCard.scss";
import styled from "styled-components";

const Dot = styled.div`
  background-color: ${(props) => props.$color};
`;

// const ProductsCart = ({ products }) => {
const ProductsCard = () => {
  return (
    <div className="main_part">
      <div className="hight_bar_filter"> </div>
      <h2>Products Cart</h2>
      <div className="products_layout">
        {products.map((item) => (
          <div className="item_card">
            <img src={item.imageUrl} alt="product`s image" />
            <p className="item_name">{item.name}</p>
            <p className="item_price">
              {typeof item.price === "number"
                ? `$${item.price.toFixed(2)}`
                : `$${Number(item.price).toFixed(2)}`}
            </p>
            {/* <span style={{backgroundColor: `${item.color}`}} className="item_color"></span> */}
            <Dot $color={item.color} className="item_color"></Dot>
          </div>
        ))}
        <div />
      </div>
    </div>
  );
};

export default ProductsCard;
