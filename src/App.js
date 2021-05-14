import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { Navbar, MainSection } from "./components/Components";

const App = () => {
  return (
    <>
      <Navbar />
      <MainSection />
    </>
  );
};

export default App;
