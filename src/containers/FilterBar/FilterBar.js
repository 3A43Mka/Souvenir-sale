import React from 'react';
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import OrderFilter from "../../components/OrderFilter/OrderFilter";

const FilterBar = (props) => {

    return (
        <div className="col-lg-3">
            <div className="row">
                <div className="col-12">
                    <CategoryFilter />
                </div>
                <div className="col-12">
                    <OrderFilter />
                </div>
            </div>
        </div>
    );
}

export default FilterBar;