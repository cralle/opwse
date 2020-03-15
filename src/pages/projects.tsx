import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { RouteComponentProps } from "@reach/router"

import { Layout } from "components/Layout"
import SEO from "../components/seo"
import { ProjectsContent } from "components/Projects"

const projectsQuery = graphql`
  query ProjectsQuery {
    projects: allProjectsJson {
      edges {
        project: node {
          title
          category
          client
          tech
          year
          url
          featured
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
