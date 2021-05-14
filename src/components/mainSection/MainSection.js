import React from "react";

import clsx from "clsx";
import styles from "./MainSection.module.scss";

const MainSection = () => {
  return (
    <main className="w-100">
      <div className={styles.margin} />
      <div className={styles.box}>
        <div className={styles.mainInfo}>
          <h1 className={styles.announcement}>Spring '21 New Arrivals</h1>
          <p className={styles.online}>ONLINE NOW</p>
          <div
            className={clsx(
              "d-flex flex-lg-row flex-column justify-content-center align-items-center",
              styles.buttons
            )}
          >
            <button>Shop Men's</button>
            <button>Shop Women's</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
