import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { RouteComponentProps } from "@reach/router"

import { Layout } from "components/Layout"
import SEO from "../components/seo"
import { ProjectsContent } from "components/Projects"

const projectsQuery = graphql`
  query ProjectItemsQuery {
    folder: allProjectsJson {
      files: nodes {
        projects {
          tech
          title
          url
          year
          featured
          client
          category
        }
      }
    }
  }
`

const Projects: React.FC<RouteComponentProps> = ({ location }) => (
  <Layout location={location}>
    <SEO title="Projects" />
    <StaticQuery
      query={projectsQuery}
      render={data => <ProjectsContent data={data} />}
    />
  </Layout>
)

export default Projects
