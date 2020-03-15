import React from "react"
import styles from "./ProjectHeader.module.scss"

export const ProjectHeader: React.FC = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}
