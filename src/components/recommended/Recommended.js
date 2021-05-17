import React from "react";

import clsx from "clsx";
import styles from "./Recommended.module.scss";
import shirt from "assets/shirt.png";

const Recommended = () => {
  return (
    <div className={clsx("w-100", styles.main)}>
      <div className="container-lg h-100">
        <div className="d-flex flex-lg-row flex-column justify-content-center align-items-center">
          <div className={styles.imgContainer}>
            <img src={shirt} alt="shirt" className={styles.recommendedImg} />
          </div>
          <div className={styles.itemDetails}>
            <h1 className={styles.title}>Celine Shirt</h1>
            <p className={styles.category}>New: Shirts</p>
            <p className={styles.description}>
              Exercitation consequat dolore reprehenderit sit aute culpa in
              excepteur eu Lorem sint ipsum proident. Anim eiusmod qui occaecat
              qui pariatur aute qui commodo ut dolore pariatur velit quis. Amet
              culpa esse amet commodo officia consequat. Ullamco eu veniam
              dolore consequat. Nulla est in reprehenderit id magna eiusmod.
            </p>
            <button>Explore new shirts</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
