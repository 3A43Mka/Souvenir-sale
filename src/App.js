import React, { useState } from 'react';
import {Provider} from 'react-redux';
import {createStore } from 'redux';
import rootReducer from './reducers';

import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import './App.scss';
import PrivateRoute from './PrivateRoute';
import MainPage from "./pages/MainPage/MainPage";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ShoppingCart from "./pages/ShopingCart/ShoppingCart";
import Favourites from "./pages/Favourites/Favourites";
import { AuthContext } from "./context/auth";

export const  store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App(props) {
    const existingTokens = JSON.parse(localStorage.getItem("tokens"));
    const [authTokens, setAuthTokens] = useState(existingTokens);
  
    const setTokens = (data) => {
      localStorage.setItem("tokens", JSON.stringify(data));
      setAuthTokens(data);
    }

    console.log(authTokens);
        return (
            <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <Provider store={store}>
            <BrowserRouter>
            <>
                <Header />
                <Switch>
                    <Route exact path={'/'} render={() => {
                        return <Redirect to={'/home'}/>
                    }}/>
                    <Route exact path={'/home'} component={MainPage}/>
                    <Route exact path={'/products'} component={Shop}/>
                    <Route exact path={'/about'} component={About}/>
                    <Route exact path={'/products/:id'} component={ProductDetail}/>
                    {/* <Route exact path={'/cart'} component={ShoppingCart}/> */}
                    <PrivateRoute path="/cart" component={ShoppingCart} />
                    {/* <Route exact path={'/favourites'} component={Favourites}/> */}
                    <PrivateRoute path="/favourites" component={Favourites} />
                    <Route component={NotFound} />
                </Switch>
                <Footer/>
            </>
            </BrowserRouter>
        </Provider>
        </AuthContext.Provider>
    );
}

export default App;