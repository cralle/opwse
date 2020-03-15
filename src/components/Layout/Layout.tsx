import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./Layout.global.scss"
import styles from "./Layout.module.scss"

import { Navigation } from "./Navigation"
import { RouteComponentProps } from "@reach/router"

export const Layout: React.FC<RouteComponentProps> = ({
  children,
  location,
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <main>
      {children}
      <Navigation location={location}></Navigation>
    </main>
  )
}
