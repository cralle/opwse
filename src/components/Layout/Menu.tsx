import React from "react"
import styles from "./Menu.module.scss"
import { Link } from "gatsby"
import { LinkProps } from "@reach/router"
import { Github, LinkedIn } from "components/Icons"

const links = {
  external: [
    {
      href: "https://github.com/cralle",
      title: "Github",
      icon: <Github />,
    },
    {
      href: "https://linkedin.com/in/patrik-wilhelmsson",
      title: "LinkedIn",
      icon: <LinkedIn />,
    },
  ],
  internal: [
    {
      href: "/",
      title: "Summary",
    },
    {
      href: "/profile",
      title: "Profile",
    },
    {
      href: "/projects",
      title: "Projects",
    },
    {
      href: "/blog",
      title: "Blog",
    },
  ],
}

export const Menu: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Nav>
        {links.external.map((x, i) => (
          <ExternalLink key={i} to={x.href}>
            {x.icon} {x.title}
          </ExternalLink>
        ))}
      </Nav>
      <Nav>
        {links.internal.map((x, i) => (
          <InternalLink key={i} to={x.href}>
            {x.title}
          </InternalLink>
        ))}
      </Nav>
    </div>
  )
}

const ExternalLink: React.FC<{ to: string }> = ({ children, to }) => (
  <NavItem>
    <a href={to} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  </NavItem>
)

const InternalLink: React.FC<{ to: string }> = ({ children, to }) => (
  <NavItem>
    <NavLink to={to}>{children}</NavLink>
  </NavItem>
)

const Nav: React.FC = ({ children }) => (
  <ul className={styles.nav}>{children}</ul>
)

const NavItem: React.FC = ({ children }) => (
  <li className={styles.navItem}>{children}</li>
)

const NavLink: React.FC<LinkProps<{}>> = ({ children, to }) => (
  <Link to={to} className={styles.navLink} activeClassName={styles.active}>
    {children}
  </Link>
)
