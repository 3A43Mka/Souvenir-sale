import React from 'react';
import FilterBar from "../../containers/FilterBar/FilterBar";
import ProductList from "../../containers/ProductList/ProductList";

const Shop = () => {
    return (
        <>
            <div className="container" style={{ paddingTop: '6rem' }} >
                <div className="row">
                    <FilterBar />
                    <ProductList />
                </div>
            </div>
        </>
    );
};


export default Shop;
