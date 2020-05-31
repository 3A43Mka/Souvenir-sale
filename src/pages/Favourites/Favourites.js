import React from 'react';
import {connect} from 'react-redux';
import FavouriteItem from "../../components/FavouriteItem/FavouriteItem";

const Favourites = (props) => {
    return (
        <>
                <div className="container" style={{paddingTop: '6rem'}}>
                    <div className="card shopping-cart">
                        <div className="card-header bg-dark text-light">
                            <i className="fa fa-heart pr-2" aria-hidden="true"></i>
                            Список желаний
                            <div className="clearfix"></div>
                        </div>
                        <div className="card-body">
                            {props.favouriteItemCount ? props.favouriteItems.map(fav => (
                                <FavouriteItem key={fav.id} {...fav} img={fav.images[0]} />
                            )) : <h1 className="display-4 mt-5 text-center">В списке нету товаров</h1> }
                        </div>
                    </div>
                </div>
            </>
    );
};


const mapStateToProps = state => {

    return {
        favouriteItems: state.shop.favourites,
        favouriteItemCount: state.shop.favourites.reduce((count, curItem) => {
            return count + curItem.quantity;
        }, 0),
        totalPrice: state.shop.favourites.reduce((count, curItem) => {
            return count + (curItem.price * curItem.quantity);
        }, 0)
    }
}

export default connect(mapStateToProps, null)(Favourites);
