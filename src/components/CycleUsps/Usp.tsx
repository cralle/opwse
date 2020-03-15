import React from "react"
import styles from "./Usp.module.scss"

export const Usp: React.FC = ({ children }) => (
  <span className={styles.usp}>{children}</span>
)
