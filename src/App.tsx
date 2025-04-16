import React from "react";
import "./App.css";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { NavBar } from "./layouts/NavBar";
import { Footer } from "./layouts/Footer";
import { HomePage } from "./layouts/homepage/HomePage";
import { SearchBooksPage } from "./layouts/searchbook/SearchBooksPage";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { BookCheckoutPage } from "./layouts/checkout/BookCheckoutPage";
import { ReviewListPage } from "./layouts/review/ReviewListPage";
import { oktaConfig } from "./configs/oktaConfig";
import { Security, LoginCallback, SecureRoute } from "@okta/okta-react";
import LoginWidget from "./Auth/LoginWidget";
import { ShelfPage } from "./layouts/shelfpage/ShelfPage";
import { MessagesPage } from "./layouts/message/MessagesPage";

const oktaAuth = new OktaAuth(oktaConfig);

function App() {
  const history = useHistory();
  const customAuthHandler = () => {
    history.push("/login");
  };

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Security
        oktaAuth={oktaAuth}
        restoreOriginalUri={restoreOriginalUri}
        onAuthRequired={customAuthHandler}
      >
        <NavBar />
        <div className="flex-grow-1">
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/search">
              <SearchBooksPage />
            </Route>
            <Route path="/reviewlist/:bookId">
              <ReviewListPage />
            </Route>
            <Route path="/checkout/:bookId">
              <BookCheckoutPage />
            </Route>
            <Route
              path="/login"
              render={() => <LoginWidget config={oktaConfig} />}
            />
            <Route path="/login/callback" component={LoginCallback} />
            <Route path="/shelf" component={ShelfPage} />
            {/* <SecureRoute path='/shelf'> <ShelfPage/> </SecureRoute> */}
            <Route path="/messages" component={MessagesPage} />
            {/* <SecureRoute path='/messages'> <MessagesPage /> </SecureRoute> */}
          </Switch>
        </div>
        <Footer />
      </Security>
    </div>
  );
}

export default App;
