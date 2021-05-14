import React from "react";
import clsx from "clsx";

const NavCategory = ({ styles, state, setState, array }) => {
  return (
    <>
      <div
        className={clsx(
          "w-100 d-none d-lg-block",
          styles.categories,
          state && `${styles.on}`
        )}
        onMouseEnter={() => setState(state)}
        onMouseLeave={() => setState(false)}
        on
      >
        <div className={clsx("container h-100 w-100")}>
          <ul className="d-flex align-items-center h-100 w-100">
            {array.map((item, i) => {
              return (
                <li key={i} className={styles.categoryItem}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavCategory;
