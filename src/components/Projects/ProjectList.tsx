import React from "react"
import { ProjectItem } from "./ProjectItem"
import { Project } from "./ProjectTypes"
import styles from "./ProjectList.module.scss"
import { ProjectHeader } from "./ProjectHeader"

interface Props {
  projects: Array<Project>
}

export const ProjectList: React.FC<Props> = ({ projects }) => {
  return (
    <Wrapper>
      <ProjectHeader>Projects</ProjectHeader>
      <main>
        {projects.map((project, i) => (
          <ProjectItem key={i} item={project} />
        ))}
      </main>
    </Wrapper>
  )
}

const Wrapper: React.FC = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
)
