import styles from "./Header.module.css";

import React from 'react'

export default function header() {
  return (
    <div className={styles.header}>
        <div className={styles.textdiv}>
            <h1 className={styles.textdivtitle}>Bienvenido a la wallet digital.</h1>
        </div>
        <div className={styles.imagediv}>
            <img src={require("./assets/card-front-color.png")} alt="Mountain" className={styles.headerimage} />
        </div>
        <div className={styles.divisor}></div>
    </div>
  )
}
