import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <p className={styles.logo}>Logo</p>
      <p>all rights are taken in this site</p>
    </div>
  );
};

export default Footer;
