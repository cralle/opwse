import React from "react"
import { RouteComponentProps } from "@reach/router"
import styles from "./ToggleMenu.module.scss"

type Props = RouteComponentProps<{
  open: boolean
  toggle: () => void
}>

export const ToggleMenu: React.FC<Props> = ({ open, toggle }) => {
  return (
    <div
      className={`${styles.wrapper} ${open ? styles.open : styles.closed}`}
      onClick={toggle}
    >
      <span />
      <span />
      <span />
    </div>
  )
}
