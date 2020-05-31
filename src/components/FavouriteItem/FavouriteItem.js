import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { shortenString } from '../../utilities/shortenString';
import { formatMoney } from "../../utilities/priceFormatter";
import { toasterNotify } from "../../utilities/toast";

import './FavouriteItem.scss';
import { addProductToCart, removeProductFromFavourites } from "../../actions";

const FavouriteItem = (
    {
        title,
        price,
        description,
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

    const removeItem = () => {
        dispatch(removeProductFromFavourites(id));
        toasterNotify(`Товар ${title} был удален из списка желаний`);
    };

    const addToCart = () => {
        dispatch(addProductToCart({ ...product }));
        toasterNotify(`Товар ${title} был добавлен в вашу корзину`);
    };

    return (
        <div className="row align-items-center mb-3">

            <div className="col-12 col-sm-12 col-md-2 text-center">
                <Link to={`/products/${id}`} className="product__link">
                    <img className="img-responsive" src={img} style={{ height: '60%', width: '60%' }} alt={description}
                    />
                </Link>
            </div>
            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-5">
                <h4 className="product-name"><strong>{shortenString(title, 21)}</strong></h4>
            </div>
            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-2">
                <h6><strong>{formatMoney(price)}₴ </strong></h6>
            </div>
            <div className="col-12 col-sm-12 text-sm-center col-md-2 text-md-right row product-quantity-container align-items-center">
                
                <div className="col-6 col-sm-6 col-md-6 text-center">
                    <button
                        onClick={addToCart}
                        type="button" className="btn btn-outline-success btn-xs">
                        <i className="fa fa-shopping-cart" />
                    </button>
                </div>
                <div className="col-6 col-sm-6 col-md-6 text-center">
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

export default connect()(FavouriteItem);
