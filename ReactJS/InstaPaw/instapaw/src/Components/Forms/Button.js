import styles from "../Forms/Button.module.css"

import React from 'react'

function Button({children}) {
  return (
    <button className={styles.button} >{children}</button>
  )
}

export default Button