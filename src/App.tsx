import React from "react";
import "./App.css";
import { NavBar } from "./layouts/NavBar";
import { ExploreTopBooks } from "./layouts/homepage/ExploreTopBooks";
import { Carousel } from "./layouts/homepage/Carousel";

function App() {
  return (
    <div>
      <NavBar />
      <ExploreTopBooks />
      <Carousel />
    </div>
  );
}

export default App;
