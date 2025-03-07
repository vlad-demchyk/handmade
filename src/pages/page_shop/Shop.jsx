import React from "react";
import HeadBanner from './components/HeadBanner'
import FilterList from './components/FilterList'
import ProductsCard from "./components/ProductsCard";
import './Shop.scss'

function Shop(){
    return(
        <>
          <HeadBanner></HeadBanner>  
          <section className="render_shop_grid">
            <FilterList></FilterList>
            <ProductsCard></ProductsCard>
          </section>
        </>
    )
}

export default Shop;