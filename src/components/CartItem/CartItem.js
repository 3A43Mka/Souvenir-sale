import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatMoney } from "../../utilities/priceFormatter";
import { shortenString } from '../../utilities/shortenString';
import { toasterNotify } from "../../utilities/toast";
import './CartItem.scss';
import {addProductToFavourites, decrementCartQuantity, incrementCartQuantity, removeProductFromCart } from "../../actions";

const CartItem = (
    {
        title,
        price,
        description,
        quantity,
        id,
        img,
        dispatch
    }
) => {

    const product = {
        title,
        price,
        images: [img],
        description,
        id,
    };
    const [itemQuantity, setItemQuantity] = useState(quantity);
    const removeItem = () => {
        dispatch(removeProductFromCart(id));
        toasterNotify(`Товар ${title} был удален из козины`);
    };

    const addToFavourites = () => {
        dispatch(addProductToFavourites({...product}));
        toasterNotify(`Товар ${title} был добавлен в список желаний`);
    };

    const incrementOrDecrement = (e, type) => {
        const value = itemQuantity;

        if (type === 'inc' && value < 10) {
            setItemQuantity(itemQuantity + 1);
            dispatch(incrementCartQuantity(id));
        }


        if (type === 'desc' && value > 1) {
            setItemQuantity(itemQuantity - 1);
            dispatch(decrementCartQuantity(id));
        }

    };


    return (
        <div className="row align-items-center mb-3">
            <div className="col-12 col-sm-12 col-md-2 text-center">
                <Link to={`/products/${id}`} className="product__link">
                    <img className="img-responsive" src={img} style={{ height: '60%', width: '60%' }} alt={description}
                    />
                </Link>
            </div>
            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-5" >
                <h4 className="product-name"><strong>{shortenString(title, 21)}</strong></h4>
            </div>
            <div className="col-12 col-sm-12 text-sm-center col-md-5 text-md-right row product-quantity-container align-items-center">
                <div className="col-4 col-sm-4 col-md-4 text-md-right price-block" style={{ paddingTop: '5px' }}>
                    <h6 className="product-price"><strong>{formatMoney(price)}₴</strong></h6>
                </div>
                <div className="col-4 col-sm-4 col-md-4">
                    <div className="quantity">
                        <input
                            onClick={(e) => { incrementOrDecrement(e, 'inc') }}
                            type="button" value="+" className="plus" />
                        <input
                            
                            type="number" step="1" max="10" min="1" value={itemQuantity} title="Qty"
                            className="qty"
                            size="4"
                            disabled />
                        <input
                            onClick={(e) => { incrementOrDecrement(e, 'desc') }}
                            type="button" value="-" className="minus" />
                    </div>
                </div>
                <div className="col-2 col-sm-2 col-md-2 text-right ml-0.2">
                    <button
                        onClick={addToFavourites}
                        type="button" className="btn btn-outline-warning btn-xs">
                        <i className="fa fa-heart" />
                    </button>
                </div>
                <div className="col-2 col-sm-2 col-md-2 text-right ml-0.2">
                    <button
                        onClick={removeItem}
                        type="button" className="btn btn-outline-danger btn-xs">
                        <i className="fa fa-trash" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default connect()(CartItem);





// <div className="row align-items-center mb-3">
//             <div className="col-12 col-sm-12 col-md-2 text-center">
//                 <Link to={`/products/${id}`} className="product__link">
//                     <img className="img-responsive" src={img} style={{ height: '60%', width: '60%' }} alt={description}
//                     />
//                 </Link>
//             </div>
//             <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-5" >
//                 <h4 className="product-name"><strong>{shortenString(title, 21)}</strong></h4>
//             </div>
//             <div className="col-12 col-sm-12 text-sm-center col-md-5 text-md-right row product-quantity-container align-items-center">
//                 <div className="col-4 col-sm-4 col-md-4 text-md-right price-block" style={{ paddingTop: '5px' }}>
//                     <h6 className="product-price"><strong>{formatMoney(price)}₴</strong></h6>
//                 </div>
//                 <div className="col-4 col-sm-4 col-md-4">
//                     <div className="quantity">
//                         <input
//                             onClick={(e) => { incrementOrDecrement(e, 'inc') }}
//                             type="button" value="+" className="plus" />
//                         <input
                            
//                             type="number" step="1" max="10" min="1" value={itemQuantity} title="Qty"
//                             className="qty"
//                             size="4"
//                             disabled />
//                         <input
//                             onClick={(e) => { incrementOrDecrement(e, 'desc') }}
//                             type="button" value="-" className="minus" />
//                     </div>
//                 </div>
//                 <div className="col-2 col-sm-2 col-md-2 text-right ml-0.2">
//                     <button
//                         onClick={addToFavourites}
//                         type="button" className="btn btn-outline-warning btn-xs">
//                         <i className="fa fa-heart" />
//                     </button>
//                 </div>
//                 <div className="col-2 col-sm-2 col-md-2 text-right ml-0.2">
//                     <button
//                         onClick={removeItem}
//                         type="button" className="btn btn-outline-danger btn-xs">
//                         <i className="fa fa-trash" />
//                     </button>
//                 </div>
//             </div>
//         </div>