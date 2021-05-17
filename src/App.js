import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import {
  Navbar,
  MainSection,
  PurchaseInformation,
  CategoriesTop,
  CategoriesBottom,
} from "./components/Components";

const App = () => {
  return (
    <>
      <Navbar />
      <MainSection />
      <PurchaseInformation />
      <CategoriesTop />
      <CategoriesBottom />
    </>
  );
};

export default App;
