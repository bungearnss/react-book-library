import React from "react";
import "./App.css";
import { NavBar } from "./layouts/NavBar";
import { Footer } from "./layouts/Footer";
import { HomePage } from "./layouts/homepage/HomePage";
import { SearchBooksPage } from "./layouts/searchbook/SearchBooksPage";
import { Redirect, Route, Switch } from "react-router-dom";
import { BookCheckoutPage } from "./layouts/checkout/BookCheckoutPage";
import { ReviewListPage } from "./layouts/review/ReviewListPage";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
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
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
