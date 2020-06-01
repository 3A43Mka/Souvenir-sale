import React, {useState, useRef, useLayoutEffect} from 'react';
import {connect} from 'react-redux';
import './OrderFilter.scss';
import {clearOrderBy, ORDER_BY_ASC, ORDER_BY_DESC, orderByAsc, orderByDesc} from "../../actions";

const OrderFilter = ({dispatch}) => {

    let removeSelected;
    const [selected, setSelected] = useState('');
    const firstUpdate = useRef(true);

    useLayoutEffect(() => {
        if (firstUpdate.current) {
          firstUpdate.current = false;
          dispatch(clearOrderBy());
          return;
        }
      });

    const handleRadioChange = (e) => {
        const value = e.target.value;
        setSelected(value);
        if(value === ORDER_BY_ASC) {
            dispatch(orderByAsc());
        } else {
            dispatch(orderByDesc());
        }
    };

    const removeFilter = (e) => {

        const buttons = document.getElementsByName('orderByPrice');

        buttons.forEach(el => {
            el.checked = false;
        });

        dispatch(clearOrderBy());
        setSelected('');
    };

    if(selected) {
        removeSelected  =  <span onClick={removeFilter} className="text-remove-selected text-right">Отменить</span>
    }



    return (
            <div className="card">
                <div className="card-header">
                    <h3>Цена {removeSelected} </h3>
                </div>
                <ul className="list-group flex-row  flex-wrap" >
                    <li className="list-group-item flex-fill">
                        <label className="radio"> По возрастанию
                            <input
                                    value={ORDER_BY_ASC}
                                    type="radio"
                                    onChange={handleRadioChange}
                                   name="orderByPrice" className="radio__input"/>
                            <span className="radio__span"></span>
                        </label>
                    </li>
                    <li className="list-group-item flex-fill">
                        <label className="radio"> По убыванию
                            <input
                                value={ORDER_BY_DESC}
                                onChange={handleRadioChange}
                                type="radio" name="orderByPrice" className="radio__input"/>
                            <span className="radio__span"></span>
                        </label>
                    </li>
                </ul>
            </div>
    );
};

export default connect()(OrderFilter);