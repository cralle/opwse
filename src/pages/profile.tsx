import React from "react"
import { Link } from "gatsby"
import { RouteComponentProps } from "@reach/router"

import { Layout, ContentWrapper } from "components/Layout"
import SEO from "components/seo"
import { CycleUsps } from "components/CycleUsps"
import styles from "./index.module.scss"

const usps = [
  "tech-savvy leader",
  "solution architect",
  "system architect",
  "developer",
  "retail specialist",
]

const ProfilePage: React.FC<RouteComponentProps> = ({ location }) => (
  <Layout location={location}>
    <SEO title="Profile" />
    <Wrapper>
      <div className={styles.profile}>
        <img src="/img/patrik-wilhelmsson-2.jpg" />
      </div>
      <div className={styles.info}>
        <div>
          I&apos;m <span className={styles.highlight}>Patrik Wilhelmsson</span>.
          I love making life more efficient through software engineering.
          The focus on the experience of both the employees and the customers is crucial to succeed.
        </div>
        <p className={styles.subInfo}>
          My core <span className={styles.highlight}>strengths</span> include
          the ability to quickly immerse myself in{" "}
          <span className={styles.highlight}>new technology</span>. This,
          combined with <span className={styles.highlight}>curiosity</span>, has
          helped me gain deep knowledge in my areas of interest. My life centers
          around <span className={styles.highlight}>software engineering</span>,{" "}
          <span className={styles.highlight}>sports</span>,{" "}
          <span className={styles.highlight}>retail</span> and{" "}
          <span className={styles.highlight}>family</span>.
        </p>
        <p className={styles.subInfo}>
          Learn more about my <Link to="/projects">projects</Link>.
        </p>
      </div>
      <div>
        <div>Roles timeline</div>
        <div className={styles.subInfo}>
          <div>CTO</div>
          <div>Head of IT Development</div>
          <div>IT Manager</div>
          <div>Interim IT Manager</div>
          <div>Team Leader IT Service desk</div>
          <div>Store manager</div>
          <div>Store sales</div>
        </div>
      </div>
    </Wrapper>
  </Layout>
)

const Wrapper: React.FC = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
)

export default ProfilePage
