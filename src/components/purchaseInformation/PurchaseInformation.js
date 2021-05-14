import React from "react";

import clsx from "clsx";
import styles from "./PurchaseInformation.module.scss";
import { delivery, discount, globe } from "assets/Exports";

const PurchaseInformation = () => {
  return (
    <div className={clsx("container-lg w-100", styles.purchaseContainer)}>
      <div className="d-flex align-items-center justify-content-between">
        <div className={clsx("d-flex flex-column", styles.purchaseBox)}>
          <img src={discount} alt="delivery" className={styles.purchaseIcon} />
          <p className={styles.title}>15% Off First Order</p>
          <p className={clsx("d-none d-sm-block", styles.desc)}>
            Subscribe to our newsletter
          </p>
        </div>
        <div className={clsx("d-flex flex-column", styles.purchaseBox)}>
          <img src={delivery} alt="delivery" className={styles.purchaseIcon} />
          <p className={styles.title}>30 Day Returns</p>
          <p className={clsx("d-none d-sm-block", styles.desc)}>
            Shop with certainty with a 30 day returns policy.
          </p>
        </div>
        <div className={clsx("d-flex flex-column", styles.purchaseBox)}>
          <img src={globe} alt="delivery" className={styles.purchaseIcon} />
          <p className={styles.title}>Worldwide Shipping</p>
          <p className={clsx("d-none d-sm-block", styles.desc)}>
            Free worldwide shipping on all orders over 50$.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseInformation;
