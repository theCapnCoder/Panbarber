import { FC } from "react"

import styles from "./style.module.scss"

type Props = {
  children: React.ReactNode
}

export const Button: FC<Props> = ({ children }) => {
  return (
    <button className={styles.button}>{children}</button>
  )
}
