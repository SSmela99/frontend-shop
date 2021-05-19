import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
  Product,
  Footer,
} from "./components/Components";

const App = () => {
  const NotFound = () => (
    <>
      <div className="center">
        <p>Site not Found</p>
      </div>
    </>
  );

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <MainSection />
            <PurchaseInformation />
            <CategoriesTop />
            <ItemsCarousel data={data} />
            <CategoriesBottom />
            <Recommended />
            <HandCraftInfo />
          </Route>
          <Route exact path="/product/:id">
            <Product products={data} />
          </Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default App;
