import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@brainhubeu/react-carousel/lib/style.css";
import "./App.scss";

import data from "data/products.json";

import {
  Navbar,
  MainSection,
  PurchaseInformation,
  CategoriesTop,
  CategoriesBottom,
  Recommended,
  HandCraftInfo,
  ItemsCarousel,
  Footer,
} from "./components/Components";

const App = () => {
  return (
    <>
      <Navbar />
      <MainSection />
      <PurchaseInformation />
      <CategoriesTop />
      <ItemsCarousel data={data} />
      <CategoriesBottom />
      <Recommended />
      <HandCraftInfo />
      <Footer />
    </>
  );
};

export default App;
