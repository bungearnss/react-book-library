import React from "react";
import "./App.css";
import { NavBar } from "./layouts/NavBar";
import { Footer } from "./layouts/Footer";
import { HomePage } from "./layouts/homepage/HomePage";

function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
