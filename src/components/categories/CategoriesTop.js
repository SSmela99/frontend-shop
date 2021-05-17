import React from "react";

import clsx from "clsx";
import styles from "./Categories.module.scss";

const Categories = () => {
  return (
    <div className={clsx("w-100", styles.categoriesContainer)}>
      <div className="d-flex flex-lg-row flex-column d w-100 h-100">
        <div
          className={clsx(
            "d-flex align-items-center justify-content-center",
            styles.menCategory
          )}
        >
          <h1 className={styles.title}>Men</h1>
        </div>
        <div
          className={clsx(
            "d-flex align-items-center justify-content-center",
            styles.womenCategory
          )}
        >
          <h1 className={styles.title}>Women</h1>
        </div>
      </div>
    </div>
  );
};

export default Categories;
