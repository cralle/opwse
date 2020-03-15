import React from "react"
import idx from "idx"
import { ProjectList } from "./ProjectList"
import { ContentWrapper } from "components/Layout"
import { Project } from "./ProjectTypes"

interface Props {
  data: {
    projects: {
      edges: Array<{ project: Project }>
    }
  }
}

export const ProjectsContent: React.FC<Props> = ({ data }) => {
  const getData = () => {
    const exp = idx(data, _ => _.projects.edges)
    return exp?.map(x => x.project) as Array<Project>
  }

  return (
    <ContentWrapper>
      <ProjectList projects={getData()} />
    </ContentWrapper>
  )
}
