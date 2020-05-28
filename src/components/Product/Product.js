import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import { formatMoney } from "../../utilities/priceFormatter";
import { shortenString } from "../../utilities/shortenString";
import { cumulativeOffSet } from "../../utilities/cumulativeOffset";
import { toasterNotify } from "../../utilities/toast";

import { useAuth } from "../../context/auth";

import './Product.scss';
import SlideDots from "../SlideDots/SlideDots";
import { addProductToCart, addProductToFavourites } from "../../actions";


const Product = (props) => {
    const imageRef = React.createRef();
    const [img, setImg] = useState(props.product.images[0]);
    const [aItem, setAItem] = useState(0);
    const { authTokens } = useAuth();

    const handleImageChange = (e) => {
        let clientX;
        if (e.type === 'touchmove') {
            clientX = e.touches[0].clientX;
        } else {
            clientX = e.clientX;
        }
        const currentX = clientX - cumulativeOffSet(imageRef.current).left;
        const part = imageRef.current.clientWidth / props.product.images.length;
        let imgIndex = Math.ceil(currentX / part) - 1;
        if (imgIndex < 0) {
            imgIndex = 0;
        }
        if (imgIndex >= props.product.images.length) {
            imgIndex = props.product.images.length - 1;
        }
        setAItem(imgIndex);
        setImg(props.product.images[imgIndex]);
    };

    const handleMouseOut = (e) => {
        setImg(props.product.images[0]);
        setAItem(0);
    };

    const changeImage = (i) => {
        setImg(props.product.images[i]);
        setAItem(i);
    }


    return (
        <div className="card product">
            <Link to={`/products/${props.product.id}`} className="product__link"><img
                onMouseMove={handleImageChange}
                onMouseOut={handleMouseOut}
                onTouchMove={handleImageChange}
                onTouchEnd={handleMouseOut}
                className="card-img-top product__img" src={img} alt={props.product.title} ref={imageRef} />
                <SlideDots len={props.product.images.length} activeItem={aItem} changeItem={changeImage} />
            </Link>
            <div className="card-body product__text">
                <h4 className="card-title product__title">
                    <Link to={`/products/${props.product.id}`}>{shortenString(props.product.title, 53)}</Link>
                </h4>
                <h5 className="product__price">₴{formatMoney(props.product.price)}</h5>
                <p className="product__description card-text">{shortenString(props.product.description, 148)}</p>
                {authTokens &&
                    <>
                        <button
                            onClick={() => {
                                props.dispatch(addProductToCart({ ...props.product }));
                                toasterNotify(`Товар ${props.product.title} был добавлен в вашу корзину`);
                            }}
                            className="btn btn-info product__add-to-cart">В корзину
                </button>

                        <button
                            onClick={() => {
                                props.dispatch(addProductToFavourites({ ...props.product }));
                                toasterNotify(`Товар ${props.product.title} был добавлен в список желаний`);
                            }}
                            className="btn btn-info product__add-to-favourites">В сп. жел.
                </button>
                    </>
                }
            </div>
        </div>
    );
};

export default connect()(Product);

