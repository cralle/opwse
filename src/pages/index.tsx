import React from "react"
import { Link } from "gatsby"
import { RouteComponentProps } from "@reach/router"
import { ContentWrapper, Layout } from "components/Layout"
import { CycleUsps } from "components/CycleUsps"
import SEO from "components/seo"

import styles from "./index.module.scss"

const usps = [
  "tech-savvy leader",
  "system architect",
  "developer",
  "retail specialist",
]

const IndexPage: React.FC<RouteComponentProps> = ({ location }) => (
  <Layout location={location}>
    <SEO title="Hi" />
    <Wrapper>
      <div className={styles.profile}>
        <img src="/img/patrik-wilhelmsson-2.jpg" />
      </div>
      <div className={styles.info}>
        <div>
          I&apos;m <span className={styles.highlight}>Patrik Wilhelmsson</span>.
          I love making life more efficient through software engineering.
        </div>
        <p>
          A <CycleUsps usps={usps} /> working <br />
          for the world&apos;s largest sporting goods retailer,{" "}
          <a href="https://www.intersport.se">INTERSPORT</a>.
        </p>
        Read more <Link to="/profile">about me</Link>.
      </div>
    </Wrapper>
  </Layout>
)

const Wrapper: React.FC = ({ children }) => (
  <section className={styles.wrapper}>{children}</section>
)

export default IndexPage
