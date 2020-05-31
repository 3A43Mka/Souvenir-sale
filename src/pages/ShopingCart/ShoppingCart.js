import React from 'react';
import { connect } from 'react-redux';
import { formatMoney } from "../../utilities/priceFormatter";
import CartItem from "../../components/CartItem/CartItem";

const ShoppingCart = (props) => {
    return (
        <>
            <div className="container" style={{ paddingTop: '6rem' }}>
                <div className="card shopping-cart">
                    <div className="card-header bg-dark text-light">
                        <i className="fa fa-shopping-cart pr-2" aria-hidden="true"></i>
                            Корзина
                            <div className="clearfix"></div>
                    </div>
                    <div className="card-body">
                        {props.cartItemCount ? props.cartItems.map(cart => (
                            <CartItem key={cart.id} {...cart} img={cart.images[0]} />
                        )) : <h1 className="display-4 mt-5 text-center">В корзине нету товаров</h1>}
                    </div>
                    <div className="card-footer">
                        <div className="pull-right" style={{ margin: '10px' }}>
                            <div className="pull-right" style={{ margin: '5px' }}>
                                Всего: <b>{formatMoney(props.totalPrice)}₴</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


const mapStateToProps = state => {

    return {
        cartItems: state.shop.cart,
        cartItemCount: state.shop.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
        }, 0),
        totalPrice: state.shop.cart.reduce((count, curItem) => {
            return count + (curItem.price * curItem.quantity);
        }, 0)
    }
}

export default connect(mapStateToProps, null)(ShoppingCart);
