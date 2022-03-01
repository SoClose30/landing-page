import React from 'react'
import styles from "./DownloadSection.module.css"

export default function DownloadSection() {
  return (
    <div className={styles.downloadsection}>
        <h1 className={styles.downloadsectiontitle}>Downloads</h1>
        <div className={styles.downloadbtn}>
            <p>Download now</p>
        </div>
        <div className={styles.downloadbtn}>
            <p>Download now</p>
        </div>
        <div className={styles.downloadbtn}>
            <p>Download now</p>
        </div>
    </div>
  )
}
