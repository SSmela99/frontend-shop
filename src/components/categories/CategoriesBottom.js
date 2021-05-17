import React from "react";

import clsx from "clsx";
import styles from "./Categories.module.scss";

const CategoriesBottom = () => {
  return (
    <div className={clsx("w-100", styles.categoriesContainer)}>
      <div className="d-flex flex-lg-row flex-column d w-100 h-100">
        <div
          className={clsx(
            "d-flex align-items-center justify-content-center",
            styles.goodsCategory
          )}
        >
          <h1 className={styles.title}>Goods</h1>
        </div>
        <div
          className={clsx(
            "d-flex align-items-center justify-content-center",
            styles.journalCategory
          )}
        >
          <h1 className={styles.title}>Journal</h1>
        </div>
      </div>
    </div>
  );
};

export default CategoriesBottom;
