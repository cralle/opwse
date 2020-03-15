import React from "react"
import styles from "./ContentWrapper.module.scss"

export const ContentWrapper: React.FC = ({ children }) => {
  return <div className={styles.contentWrapper}>{children}</div>
}
