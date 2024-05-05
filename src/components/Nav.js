import React, { useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
// import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useCartContext } from "../context/cart_context";
import { Button } from "../styles/Button";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Nav = () => {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const [menuIcon, setMenuIcon] = useState();
  const { total_item } = useCartContext();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),

    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  // const { loginWithRedirect } = useAuth0();
  const Nav = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }
        &:hover,
        &:active {
          /* color: ${({ theme }) => theme.colors.helper};
           */
          color: #68d2e8;
        }
      }
    }
    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: ${({ theme }) => theme.colors.black};
    }
    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }
    .close-outline {
      display: none;
    }
    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 3.2rem;
      }
      .cart-total--item {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        background-color: #000;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: ${({ theme }) => theme.colors.helper};
      }
    }
    .user-login--name {
      text-transform: capitalize;
    }
    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
      color: black;
    }
    .userSection {
      /* border: 2px solid red; */
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      gap: 3rem;
    }
    .user-loggedin-img {
      border-radius: 50%;
      height: 50px;
      width: 50px;
    }
    .user-logged-btn {
      text-transform: initial;
      background-color: #f3ca52;
    }
    .user-logged-out-btn {
      background-color: #f3ca52;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }
      .userSection {
        flex-direction: column;
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }
      .active .close-outline {
        display: inline-block;
      }
      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        transition: all 3s linear;
      }
      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;

        .navbar-link {
          font-size: 4.2rem;
        }
      }
      .cart-trolley--link {
        position: relative;

        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }

        .cart-total--item {
          width: 4.2rem;
          height: 4.2rem;
          font-size: 2rem;
        }
      }

      .user-logout,
      .user-login {
        font-size: 2rem;
        padding: 0.8rem 1.4rem;
        /* color: black; */
      }
    }
  `;

  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Contact
            </NavLink>
          </li>
          {/* {isAuthenticated ? (
            <li>
              <Button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </Button>
            </li>
          ) : ( */}
          {/* <li>
            <Button onClick={() => loginWithRedirect()}>Log In</Button>
          </li> */}
          {/* )} */}
          {/* <GoogleOAuthProvider clientId="733040857642-1en8qj3o3r9fecrn5daou2r0ode8l0jt.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const decoded = jwtDecode(credentialResponse.credential);
                console.log(decoded);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </GoogleOAuthProvider> */}

          {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />/ */}
          <li>
            {profile ? (
              <div className="userSection">
                <img
                  className="user-loggedin-img"
                  src={profile.picture}
                  alt="user image"
                />
                {/* <h3>User Logged in</h3> */}
                <p>{profile.name}</p>
                {/* <p>Email Address: {profile.email}</p> */}
                {/* <br /> */}
                {/* <br /> */}
                <Button className="user-logged-out-btn" onClick={logOut}>
                  Log out
                </Button>
              </div>
            ) : (
              <Button className="user-logged-btn" onClick={login}>
                Sign in with Google 🚀{" "}
              </Button>
            )}
          </li>

          <li>
            <NavLink
              to="/cart"
              className="navbar-link cart-trolley--link"
              onClick={() => setMenuIcon(false)}
            >
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item">{total_item}</span>
            </NavLink>
          </li>
        </ul>
        {/* two button form close and open menu button */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />

          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Nav;
