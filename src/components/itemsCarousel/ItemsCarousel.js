import React from "react";
import { Link } from "react-router-dom";

import clsx from "clsx";
import styles from "./ItemsCarousel.module.scss";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";

const ItemsCarousel = ({ data }) => {
  return (
    <div className={clsx("w-100", styles.main)}>
      <div className={styles.container}>
        <Carousel
          plugins={[
            "infinite",
            "arrows",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 5,
              },
            },
          ]}
          breakpoints={{
            575: {
              plugins: [
                "arrows",
                "infinite",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            640: {
              plugins: [
                "arrows",
                "infinite",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
            900: {
              plugins: [
                "arrows",
                "infinite",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
            1700: {
              plugins: [
                "arrows",
                "infinite",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 4,
                  },
                },
              ],
            },
            1400: {
              plugins: [
                "arrows",
                "infinite",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 3,
                  },
                },
              ],
            },
            1100: {
              plugins: [
                "arrows",
                "infinite",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        >
          {data.map((item) => {
            return (
              <Link
                to={`/product/${item.id}`}
                key={item.id}
                className="d-flex flex-column text-center"
              >
                <div className={styles.box}>
                  <img src={item.firstImage} alt={item.name} />
                  <span className={styles.new}>New</span>
                </div>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.price}>{item.price} PLN</p>
              </Link>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default ItemsCarousel;
