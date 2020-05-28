import {
    ADD_PRODUCT_TO_CART,
    DECREMENT_CART_ITEM_QUANTITY,
    INCREMENT_CART_ITEM_QUANTITY,
    REMOVE_PRODUCT_FROM_CART,
    ADD_PRODUCT_TO_FAVOURITES,
    REMOVE_PRODUCT_FROM_FAVOURITES,
} from '../actions';
import { souvenirs } from "../data/souvenirs";

const initialState = {
    products: souvenirs,
    cart: [],
    favourites: []
};


const shopReducer = (state = initialState, action) => {
    let updatedCart;
    let updatedItemIndex;
    let updatedFavourites;

    switch (action.type) {
        case INCREMENT_CART_ITEM_QUANTITY:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            const incrementedItem = {
                ...updatedCart[updatedItemIndex]
            };

            incrementedItem.quantity++;

            updatedCart[updatedItemIndex] = incrementedItem;


            return {...state, cart: updatedCart };

        case DECREMENT_CART_ITEM_QUANTITY:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            const decrementedItem = {
                ...updatedCart[updatedItemIndex]
            };

            decrementedItem.quantity--;

            updatedCart[updatedItemIndex] = decrementedItem;

            return {...state, cart: updatedCart };

        case ADD_PRODUCT_TO_CART:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(item => item.id === action.payload.id);

            if (updatedItemIndex < 0) {
                updatedCart.push({...action.payload, quantity: 1 });
            } else {
                const updatedItem = {
                    ...updatedCart[updatedItemIndex]
                };

                updatedItem.quantity++;
                updatedCart[updatedItemIndex] = updatedItem;
            }

            return {...state, cart: updatedCart };
        case REMOVE_PRODUCT_FROM_CART:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            updatedCart.splice(updatedItemIndex, 1);

            return {...state, cart: updatedCart };

        case ADD_PRODUCT_TO_FAVOURITES:
            updatedFavourites = [...state.favourites];
            updatedItemIndex = updatedFavourites.findIndex(item => item.id === action.payload.id);

            if (updatedItemIndex < 0) {
                updatedFavourites.push({...action.payload, quantity: 1 });
            } else {
                const updatedItem = {
                    ...updatedFavourites[updatedItemIndex]
                };

                updatedItem.quantity++;
                updatedFavourites[updatedItemIndex] = updatedItem;
            }

            return {...state, favourites: updatedFavourites };
        case REMOVE_PRODUCT_FROM_FAVOURITES:
            updatedFavourites = [...state.favourites];
            updatedItemIndex = updatedFavourites.findIndex(
                item => item.id === action.payload
            );

            updatedFavourites.splice(updatedItemIndex, 1);

            return {...state, favourites: updatedFavourites };

        default:
            return state;

    }
};

export default shopReducer;