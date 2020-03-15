import React from "react"

import { Layout, ContentWrapper } from "components/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <ContentWrapper>
      <h1>404 NOT FOUND</h1>
      <p>
        Trying to serve you a simple webpage, and it doesn&#39;t even exist...
        the sadness.
      </p>
    </ContentWrapper>
  </Layout>
)

export default NotFoundPage
