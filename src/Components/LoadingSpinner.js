import React from "react";
import styles from "../styles/Spinner.module.scss";

const LoadingSpinner = ({ loadState }) => {
  return (
    <>
      {loadState ? (
        <div className={styles.container}>
          <span className={styles.loader}></span>
        </div>
      ) : <></>}
    </>
  );
};

export default LoadingSpinner;
