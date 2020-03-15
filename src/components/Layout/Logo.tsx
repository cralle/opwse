import React from "react"
import { Link } from "gatsby"
import Code from "./code.inline.svg"
import styles from "./Logo.module.scss"

export const Logo: React.FC = () => {
  return (
    <Wrapper>
      <Link to="/" activeClassName={styles.active}>
        <Back width={22} height={22} />
      </Link>
      <div className={styles.code} />
    </Wrapper>
  )
}

const Wrapper: React.FC = ({ children }) => (
  <div className={styles.wrapper}>
    <div>{children}</div>
  </div>
)

const Back = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M5 3.737l12.395 8.263-12.395 8.263v-16.526zm-2-3.737v24l18-12-18-12z" />
  </svg>
)
