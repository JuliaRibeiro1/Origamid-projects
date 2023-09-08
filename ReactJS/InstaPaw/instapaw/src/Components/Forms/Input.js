import styles from "../Forms/Input.module.css"

import React from 'react'

function Input({label,type,name,value,onChange,error, onBlur}) {
  return (
    <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={name}>{label}</label>
        <input id={name} className={styles.input} type={type} name={name} value={value} onChange={onChange} onBlur={onBlur}/>
        <p className={styles.error}>{error}</p>
    </div>
  )
}

export default Input