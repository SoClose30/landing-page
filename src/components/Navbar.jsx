import React from 'react';
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div>
        <nav className={styles.headernav}>
            <p className={styles.navlogo}>EasyMoney</p>
            <button className={styles.navbtn}>Empezar ahora</button>
        </nav>
    </div>
  )
}
