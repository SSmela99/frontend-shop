import React from "react";
import clsx from "clsx";

const NavMobileCategory = ({ styles, func, state, array, title }) => {
  return (
    <>
      <div className={clsx("w-100", styles.mobileCategories)}>
        <div className={styles.mobileCategory} onClick={() => func()}>
          <div className="d-flex align-items-center justify-content-between">
            <h5 className={styles.title}>{title}</h5>
            <span className={styles.arrow}></span>
          </div>
        </div>
      </div>
      <div className={clsx(styles.categoryBox, state && `${styles.on}`)}>
        <ul>
          {array.map((item, i) => {
            return (
              <li key={i} className={styles.mobileCategoryItem}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default NavMobileCategory;
