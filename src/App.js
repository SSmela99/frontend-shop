import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import {
  Navbar,
  MainSection,
  PurchaseInformation,
  Categories,
} from "./components/Components";

const App = () => {
  return (
    <>
      <Navbar />
      <MainSection />
      <PurchaseInformation />
      <Categories />
    </>
  );
};

export default App;
