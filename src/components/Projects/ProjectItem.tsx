import React from "react"
import { Project } from "./ProjectTypes"
import styles from "./ProjectItem.module.scss"

interface Props {
  item: Project
}

export const ProjectItem: React.FC<Props> = ({ item }) => {
  const { title, client, year, tech } = item
  return (
    <article className={styles.wrapper}>
      <header>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.info}>
          <span className={styles.year}>{year}</span>
        </div>
      </header>
      <div className={styles.info}>
        <div>{client}</div>
        {tech && <span> {tech.map(c => c).join(", ")}</span>}
      </div>
    </article>
  )
}
