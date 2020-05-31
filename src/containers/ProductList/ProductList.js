import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Product from "../../components/Product/Product";

import { searchFilter } from "../../pipes/searchFilter";
import { categoryFilter } from "../../pipes/categoryFilter";
import { orderByFilter } from "../../pipes/orderByFilter";
import { paginationPipe } from "../../pipes/paginationFilter";
import SearchField from "../../components/SearchField/SearchField";
import Pagination from "../../components/Pagination/Pagination";

const ProductList = (props) => {
    const [pagesToShow] = useState(3);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

            return (
            <div className="col-lg-9">
                <div className="row mb-3">
                    <div className="col-12">
                        <div className="card ">
                            <div className="card-header d-flex">
                                <SearchField></SearchField>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {props.products.length
                        ? paginationPipe(props.products, { perPage: props.perPage, currentPage: props.currentPage}).map(product => {
                            let classes = `col-lg-4 col-md-6 mb-4`;
                            return (<div key={product.id} className={classes}>
                                <Product  product={product} />
                            </div>)
                        })
                        
                        : 
                        <div className="col-md-12 mb-4">
                        <h1 className="display-4 mt-5 text-center">Нет товаров в данной категории</h1>
                        </div>
                    }
                </div>
                <div className="d-flex justify-content-end">


                {props.products.length
                        ? <Pagination
                        totalItemsCount={props.products.length}
                        currentPage={props.currentPage}
                        perPage={props.perPage}
                        pagesToShow={pagesToShow}
                    />
                        : <></>
                    }
                </div>
            </div>
        );


}

const mapStateToProps = state => {
    const categories = state.categoryFilter;
    const orderBy = state.orderBy;
    const search = state.searchFilter;
    const filterBySearchArr = searchFilter(state.shop.products, search)
    const filterByCategoryArr = categoryFilter(filterBySearchArr, categories);
    const filterByOrderArr = orderByFilter(filterByCategoryArr, orderBy);

    return { products: filterByOrderArr,
    currentPage: state.pagination.currentPage,
    perPage: state.pagination.perPage
}
};

export default connect(mapStateToProps, null)(ProductList);
