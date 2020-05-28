import React, { useRef, useLayoutEffect } from 'react';
import {connect} from 'react-redux';
import './CategoryFilter.scss';
import {categories} from "../../data/categories";
import {addCategoryToFilter, removeCategoryFromFilter, goPage} from "../../actions";


const CategoryFilter = (props) => {

    const {dispatch, categoryItemsCount} = props;
    const firstUpdate = useRef(true);
    
      useLayoutEffect(() => {
        if (firstUpdate.current) {
          firstUpdate.current = false;
          props.dispatch(goPage(1));
          categories.forEach(category => {
                    dispatch(removeCategoryFromFilter(category));
                });
          return;
        }});

    const handleSelectBox = (e) => {
        const name = e.target.name;
        props.dispatch(goPage(1));
        if(e.target.checked) {
            dispatch(addCategoryToFilter(name));
        } else {
            dispatch(removeCategoryFromFilter(name));
        }
    };


        return (
            <div className="card mb-3">
                <div className="card-header">
                    <h3>Категории</h3>
                </div>
                <ul className="list-group flex-row flex-wrap">
                    {categories.map((category, i) => (
                        <li key={i} className="list-group-item flex-50">
                            <label className="custom-checkbox text-capitalize"> {category} ({categoryItemsCount[category]? categoryItemsCount[category] : '0'})
                                <input type="checkbox"
                                       name={category}
                                       className="custom-checkbox__input" onInput={handleSelectBox}/>
                                <span className="custom-checkbox__span"></span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        );

};

const mapStateToProps = (state) => {

    const categoryItemsCount = {};

    state.shop.products.forEach(p => {
        categoryItemsCount[p.category] = categoryItemsCount[p.category] + 1 || 1;
    });


    return {
        categoryItemsCount
    }

};

export default connect(mapStateToProps)(CategoryFilter);