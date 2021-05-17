import React from "react";

import handCraft from "assets/handcraft.png";
import styles from "./HandCraftInfo.module.scss";

const HandCraftInfo = () => {
  return (
    <div className="w-100 container">
      <div className={styles.infoContainer}>
        <img src={handCraft} alt="handCraft" className={styles.handImage} />
        <p className={styles.description}>
          Quis magna culpa ut esse anim dolore. Pariatur cillum non cillum
          incididunt mollit exercitation aliqua amet enim nulla. Aliqua
          cupidatat tempor laborum eu. Enim cupidatat nulla aliqua proident non.
          Ad laboris ad nostrud ad. Id aliqua tempor ipsum occaecat consectetur.
          Veniam amet sint est occaecat enim elit tempor deserunt sunt et
          excepteur.
        </p>
      </div>
    </div>
  );
};

export default HandCraftInfo;
