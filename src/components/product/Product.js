import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

import clsx from "clsx";
import styles from "./Product.module.scss";
import placeholder from "assets/placeholder.png";
import { discount, delivery, globe, cart, heart } from "assets/Exports";

import Carousel from "@brainhubeu/react-carousel";

const Product = ({ products }) => {
  const location = useLocation();
  const [product, setProduct] = useState({});

  const [visDesc, setVisDesc] = useState(false);
  const [visDetails, setVisDetails] = useState(false);
  const [visFit, setVisFit] = useState(false);
  const [visDelivery, setVisDelivery] = useState(false);

  const id = parseInt(location.pathname.split("/").pop());

  useEffect(() => {
    setTimeout(window.scrollTo(0, 0), 100);
  }, []);

  useEffect(() => {
    const exist = products.find((x) => x.id === id);
    setProduct(exist);
  }, [id, products]);

  const MyCarousel = React.memo(() => (
    <div className={clsx("d-block d-lg-none", styles.carousel)}>
      <Carousel plugins={["infinite", "arrows"]}>
        <img
          src={product.firstImage}
          alt="product"
          className={styles.leftImage}
        />
        <img
          src={product.secondImage}
          alt="product"
          className={styles.leftImage}
        />
        <img src={placeholder} alt="product" className={styles.leftImage} />
        <img src={placeholder} alt="product" className={styles.leftImage} />
      </Carousel>
    </div>
  ));

  return (
    <main className={clsx("w-100", styles.main)}>
      {!product ? (
        <p>błąd</p>
      ) : (
        <div className="container-lg">
          <div className={clsx("d-lg-flex d-block w-100", styles.content)}>
            <div className={clsx("d-lg-block d-none", styles.leftImages)}>
              <div className={clsx("d-flex flex-column", styles.sticky)}>
                <a href="#first-image">
                  <img
                    src={product.firstImage}
                    alt="product"
                    className={styles.leftImage}
                  />
                </a>
                <a href="#second-image">
                  <img
                    src={product.secondImage}
                    alt="product"
                    className={styles.leftImage}
                  />
                </a>
                <a href="#third-image">
                  <img
                    src={placeholder}
                    alt="product"
                    className={styles.leftImage}
                  />
                </a>

                <a href="#fourth-image">
                  <img
                    src={placeholder}
                    alt="product"
                    className={styles.leftImage}
                  />
                </a>
              </div>
            </div>
            <MyCarousel />
            <div
              className={clsx(
                styles.bigImages,
                "d-lg-flex flex-column d-none justify-content-center align-items-center"
              )}
            >
              <img
                src={product.firstImage}
                alt="product"
                className={styles.bigImage}
                id="first-image"
              />
              <img
                src={product.secondImage}
                alt="product"
                className={styles.bigImage}
                id="second-image"
              />
              <img
                src={placeholder}
                alt="product"
                className={styles.bigImage}
                id="third-image"
              />
              <img
                src={placeholder}
                alt="product"
                className={styles.bigImage}
                id="fourth-image"
              />
            </div>
            <div className={clsx(styles.productDetails)}>
              <div className={styles.sticky}>
                <h3>{product.name}</h3>
                <p className={styles.price}>{product.price} PLN</p>
                <p className={styles.description}>
                  Dolore officia est ex labore commodo ad nisi laborum
                  deseruntion id sit esse incididunt excepteur velit.
                </p>
                <div className={clsx("d-flex w-100", styles.buttons)}>
                  <button className={styles.purchaseButton}>
                    <p className={styles.buttonText}>Add to cart</p>
                    <img src={cart} alt="cart" />
                  </button>
                  <button className={styles.wishButton}>
                    <img src={heart} alt="favourite" />
                  </button>
                </div>
                <div
                  className={clsx(
                    "d-flex justify-content-between align-items-center w-100",
                    styles.icons
                  )}
                >
                  <div className={styles.icon}>
                    <img src={discount} alt="discount" />
                    <p className={styles.textIcon}>15% Off First Order</p>
                  </div>
                  <div className={styles.icon}>
                    <img src={delivery} alt="discount" />
                    <p className={styles.textIcon}>30 Day Returns</p>
                  </div>
                  <div className={styles.icon}>
                    <img src={globe} alt="discount" />
                    <p className={styles.textIcon}>Worldwide Shipping</p>
                  </div>
                </div>
                <div className="w-100">
                  <div className={clsx("w-100", styles.tabs)}>
                    <div
                      className={styles.tab}
                      onClick={() => setVisDesc(!visDesc)}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <p>Description</p>
                        <div className="position-relative">
                          <span
                            className={clsx(
                              styles.cross,
                              visDesc && `${styles.on}`
                            )}
                          ></span>
                        </div>
                      </div>
                      <div
                        className={clsx(
                          styles.description,
                          visDesc && `${styles.on}`
                        )}
                      >
                        Occaecat minim elit eu dolor voluptate consectetur dolor
                        veniam irure in. Dolore culpa fugiat nulla laboris
                        pariatur cupidatat est minim sunt est excepteur. Veniam
                        voluptate adipisicing incididunt dolor consectetur aute
                        in ea quis duis enim cupidatat fugiat.
                      </div>
                    </div>
                    <div
                      className={styles.tab}
                      onClick={() => setVisDetails(!visDetails)}
                    >
                      <div
                        className={clsx(
                          "d-flex justify-content-between align-items-center"
                        )}
                      >
                        <p>Details</p>
                        <div className="position-relative">
                          <span
                            className={clsx(
                              styles.cross,
                              visDetails && `${styles.on}`
                            )}
                          ></span>
                        </div>
                      </div>
                      <div
                        className={clsx(
                          styles.description,
                          visDetails && `${styles.on}`
                        )}
                      >
                        Occaecat minim elit eu dolor voluptate consectetur dolor
                        veniam irure in. Dolore culpa fugiat nulla laboris
                        pariatur cupidatat est minim sunt est excepteur. Veniam
                        voluptate adipisicing incididunt dolor consectetur aute
                        in ea quis duis enim cupidatat fugiat.
                      </div>
                    </div>
                    <div
                      className={styles.tab}
                      onClick={() => setVisFit(!visFit)}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <p>Fit</p>
                        <div className="position-relative">
                          <span
                            className={clsx(
                              styles.cross,
                              visFit && `${styles.on}`
                            )}
                          ></span>
                        </div>
                      </div>
                      <div
                        className={clsx(
                          styles.description,
                          visFit && `${styles.on}`
                        )}
                      >
                        Occaecat minim elit eu dolor voluptate consectetur dolor
                        veniam irure in. Dolore culpa fugiat nulla laboris
                        pariatur cupidatat est minim sunt est excepteur. Veniam
                        voluptate adipisicing incididunt dolor consectetur aute
                        in ea quis duis enim cupidatat fugiat.
                      </div>
                    </div>
                    <div
                      className={styles.tab}
                      onClick={() => setVisDelivery(!visDelivery)}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <p>Delivery</p>
                        <div className="position-relative">
                          <span
                            className={clsx(
                              styles.cross,
                              visDelivery && `${styles.on}`
                            )}
                          ></span>
                        </div>
                      </div>
                      <div
                        className={clsx(
                          styles.description,
                          visDelivery && `${styles.on}`
                        )}
                      >
                        Occaecat minim elit eu dolor voluptate consectetur dolor
                        veniam irure in. Dolore culpa fugiat nulla laboris
                        pariatur cupidatat est minim sunt est excepteur. Veniam
                        voluptate adipisicing incididunt dolor consectetur aute
                        in ea quis duis enim cupidatat fugiat.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Product;
