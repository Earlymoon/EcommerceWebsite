import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productcontext";
import { Auth0Provider } from "@auth0/auth0-react";
import { FilterContextProvider } from "./context/Filter_context";
import { CartProvider } from "./context/cart_context";
const root = ReactDOM.createRoot(document.getElementById("root"));
// require("dotenv").config();

root.render(
  // <Auth0Provider
  //   domain="dev-eeuzg1zf6ff17qof.us.auth0.com"
  //   clientId="iutqgqIlU9eYewqrTTNNds7xYqXd1q6L"
  //   authorizationParams={{
  //     redirect_uri: window.location.origin,
  //   }}
  // >
 
  <GoogleOAuthProvider clientId="733040857642-1en8qj3o3r9fecrn5daou2r0ode8l0jt.apps.googleusercontent.com">
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </GoogleOAuthProvider>
  // </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
