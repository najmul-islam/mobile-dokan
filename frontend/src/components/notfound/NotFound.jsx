import React from "react";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.main}>
      <div className={styles.pop}>
        <h1 className={styles.heading}>Error 404</h1>
      </div>
    </div>
  );
};

export default NotFound;
