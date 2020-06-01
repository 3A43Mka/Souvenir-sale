import React from 'react';
import { connect } from 'react-redux';
import {
    EmailShareButton,
    EmailIcon,
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
} from "react-share";

import { formatMoney } from "../../utilities/priceFormatter";
import { toasterNotify } from "../../utilities/toast";
import { addProductToCart, addProductToFavourites } from "../../actions";
import { useAuth } from "../../context/auth";

const ProductDetail = (props) => {

    const { authTokens } = useAuth();

    const onCart = () => {
        props.dispatch(addProductToCart(props.product));
        toasterNotify(`Товар ${props.product.title} был добавлен в вашу корзину`);
    };

    const onFavourites = () => {
        props.dispatch(addProductToFavourites(props.product));
        toasterNotify(`Товар ${props.product.title} был добавлен в список желаний`);
    };

    return (
        <aside className="col-sm-7">
            <article className="card-body p-5">
                <h3 className="title mb-3">{props.product.title}</h3>

                <p >
                    <span className="h3 text-success">
                        <span>₴ </span><span className="num">{formatMoney(props.product.price)}</span>
                    </span>
                </p>
                <dl>
                    <dt>Описание</dt>
                    <dd><p className="">{props.product.description}</p></dd>
                </dl>
                <dl>
                    <dt>Категория</dt>
                    <dd className="text-capitalize">{props.product.category}</dd>
                </dl>
                <dl>
                    <dt>Размер</dt>
                    <dd>{props.product.size}</dd>
                </dl>
                <dl>
                    <dt>Вес</dt>
                    <dd>{props.product.weight}</dd>
                </dl>
                <hr />
                {authTokens &&
                    <>
                        <button
                            onClick={onCart}
                            className="btn btn-lg btn-outline-primary text-uppercase d-block mt-2"><i
                                className="fa fa-shopping-cart" /> В корзину
                </button>
                        <button
                            onClick={onFavourites}
                            className="btn btn-lg btn-outline-primary text-uppercase d-block mt-2"><i
                                className="fa fa-heart" /> В список желаний
                </button>
                        <hr />
                    </>
                }
                <TwitterShareButton title={`${props.product.title}\n`} via="SouvaShop" children={<TwitterIcon round={true} />} url={`https://localhost:3000/products/${props.product.id}`} />
                <FacebookShareButton quote={`Мне нравится ${props.product.title} с сайта SouvaShop!`} children={<FacebookIcon round={true} />} url={`https://mywebsite.com/products/${props.product.id}`} />
                <EmailShareButton subject={props.product.title} body={`Посмотрите на интересный товар ${props.product.title} на SouvaShop!`} children={<EmailIcon round={true} />} url={`https://localhost:3000/products/${props.product.id}`} />

            </article>
        </aside>
    );
};

export default connect()(ProductDetail);
