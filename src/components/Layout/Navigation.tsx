import React from "react"
import { RouteComponentProps } from "@reach/router"
import { ToggleMenu } from "./ToggleMenu"
import { Menu } from "./Menu"
import { Logo } from "./Logo"
import styles from "./Navigation.module.scss"

export const Navigation: React.FC<RouteComponentProps> = ({ location }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  React.useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <Wrapper>
      <Header>
        <Logo />
        <ToggleMenu open={isOpen} toggle={toggleMenu} />
      </Header>
      <MenuWrapper isOpen={isOpen}>
        <Menu />
      </MenuWrapper>
    </Wrapper>
  )
}

const Wrapper: React.FC = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
)

const Header: React.FC = ({ children }) => (
  <div className={styles.header}>{children}</div>
)

const MenuWrapper: React.FC<{ isOpen: boolean }> = ({ children, isOpen }) => {
  const wrapperStyles = isOpen
    ? `${styles.menuWrapper} ${styles.open}`
    : `${styles.menuWrapper} ${styles.closed}`

  return (
    <div className={wrapperStyles}>
      <div>{children}</div>
    </div>
  )
}
