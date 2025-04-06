import React from "react";
import "./App.css";
import { NavBar } from "./layouts/NavBar";
import { Footer } from "./layouts/Footer";
import { HomePage } from "./layouts/homepage/HomePage";
import { SearchBooksPage } from "./layouts/searchbook/SearchBooksPage";
import { Redirect, Route, Switch } from "react-router-dom";

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
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
