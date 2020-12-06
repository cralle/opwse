import React from "react"
import { ProjectList } from "./ProjectList"
import { ContentWrapper } from "components/Layout"
import { Project } from "./ProjectTypes"

interface Props {
  data: {
    folder: {
      files: Array<ProjectFile>
    }
  }
}

interface ProjectFile {
  projects: Array<Project>
}

export const ProjectsContent: React.FC<Props> = ({ data }) => {
  const getData = () => {
    const projects = [].concat.apply([], data.folder.files.map(x => x.projects))
    return projects
  }

  return (
    <ContentWrapper>
      <ProjectList projects={getData()} />
    </ContentWrapper>
  )
}
