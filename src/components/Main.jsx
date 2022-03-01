import React from 'react';
import styles from "./Main.module.css";

export default function Main() {
  return (
    <div className={styles.main}>
        <h2 className={styles.maintitle}>¿Quienes somos?</h2>
        <div className={styles.presentation}>
            <div className={styles.presentationtext}>
                <p>Somos innovación</p>
            </div>
            <div className={styles.presentationimage}></div>
        </div>
        <div className={styles.presentation2}>
        <div className={styles.presentationimage2}></div>
            <div className={styles.presentationtext2}>
                <p>Somos tecnología</p>
            </div>
        </div>
        <div className={styles.presentation}>
            <div className={styles.presentationtext}>
                <p>Somos confianza</p>
            </div>
            <div className={styles.presentationimage3}></div>
        </div>
    </div>
  )
}
