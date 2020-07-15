import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';

import "./assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "./views/Components/Components.js";
import LandingPage from "./views/LandingPage/LandingPage.js";
import ProfilePage from "./views/ProfilePage/ProfilePage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import HomePage from "./views/HomePage/HomePage.js";
import PurchasePage from "./views/PurchasePage/PurchasePage.js";
//      <Route path="/landing-page" component={LandingPage} />
//       <Route path="/profile-page" component={ProfilePage} />
//       <Route path="/login-page" component={LoginPage} />
//       <Route path="/comp" component={Components} />
var hist = createBrowserHistory();
const stripePromise = loadStripe("pk_test_51H4TqMCUChgYYpJHcb7NIu9VZtf1bzfCrau78MG8CmFuumNakj9uehR70a2LuDVXYUEM4Ho3wm1IAwwjiZyOisLF00yei7AlVp");


function App() {
  return (
    <Elements stripe={stripePromise}>
      <Router history={hist}>
        <Switch>
          <Route path="/purchase" component={PurchasePage} />
          <Route path="/" component={HomePage} />
        </Switch>
        <CheckoutForm />
      </Router>
    </Elements>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
