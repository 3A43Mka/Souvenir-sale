import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { useAuth } from "../../context/auth";

import './Header.scss';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

const Header = ({ cartLength, favoutesLength }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [fullname, setFullname] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  const { setAuthTokens } = useAuth();

  const responseGoogle = (response) => {
    console.log(response.profileObj);
    setAuthTokens(response.profileObj.googleId);
    setIsLogged(true);
    setFullname(response.profileObj.name);
    setProfilePicture(response.profileObj.imageUrl);
  }

  const onLogout = (response) => {
    console.log("im logged out in google");
    setAuthTokens(null);
    localStorage.clear("tokens");
    setIsLogged(false);
  }

  return (

    <Navbar collapseOnSelect className="fixed-top" expand="xl" bg="info" variant="dark" >
      <NavLink className="navbar-brand " to="/">SouvaShop</NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto nav-block">
          <NavLink className="nav-link nav-decorated text-light" to={"/home"}>Главная</NavLink>
          <NavLink className="nav-link nav-decorated text-light" to={"/products"}>Магазин</NavLink>
          {isLogged &&
            <>
              <NavLink className="nav-link nav-decorated text-light" to={"/cart"}><i className="fa fa-shopping-cart mr-2 text-light"
                aria-hidden="true" />Корзина {cartLength ? `(${cartLength})` : ''}</NavLink>

              <NavLink className="nav-link nav-decorated text-light" to={"/favourites"}><i className="fa fa-heart mr-2 text-light"
                aria-hidden="true" />Список желаний {favoutesLength ? `(${favoutesLength})` : ''}</NavLink>
            </>

          }

          <NavDropdown title="Контакты" id="collasible-nav-dropdown" className="dropdown">
            <NavDropdown.Item><NavLink className="nav-link text-dark" to={"/about"}>О нас</NavLink></NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          {isLogged ?
            <>
              <div className="profile text-light">
                <span>{fullname}</span>
                <img src={profilePicture} className="profile__picture" alt={fullname} />
              </div>
              <GoogleLogout className="logout"
                clientId="118568103803-khd06nm6qp5m5ghbp0i1mi304o9ahjaa.apps.googleusercontent.com"
                buttonText="Выход"
                onLogoutSuccess={onLogout}
                isSignedIn={true}
              >
              </GoogleLogout>
            </> :
            <GoogleLogin className="login"
              clientId="118568103803-khd06nm6qp5m5ghbp0i1mi304o9ahjaa.apps.googleusercontent.com"
              buttonText="Войти"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
            />
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};


const mapStateToProps = (state) => {
  return {
    cartLength: state.shop.cart.length,
    favoutesLength: state.shop.favourites.length
  }
};

export default connect(mapStateToProps, null)(Header);