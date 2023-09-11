import React from 'react'
import styles from "./PhotoDelete.module.css"
import { PHOTO_DELETE } from '../../Api'
import useFetch from '../../Hooks/useFetch'

function PhotoDelete({id}) {
  const {loading, request} = useFetch()

  async function handleClick() {
    const confirm = window.confirm("Tem certezsa que deseja deletar?")
    const {url, options} = PHOTO_DELETE(id)
    const {response} = await request(url, options)
    if(response.ok) window.location.reload()
  }
  return (
    <div>
        {loading ? <button className={styles.delete} disabled>Deletando</button> :
        <button className={styles.delete} onClick={handleClick}>Deletar</button> }
    </div>
  )
}

export default PhotoDelete