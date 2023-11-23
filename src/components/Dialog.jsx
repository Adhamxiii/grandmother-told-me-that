import React from "react";

import styles from "./Dialog.module.css";

const Dialog = ({ children }) => {
  return (
    <div className={styles.dialog}>
      <div className={styles.dialog__content}>
        <p className={styles.dialog__text}>{children}</p>
      </div>
    </div>
  );
};

export default Dialog;
