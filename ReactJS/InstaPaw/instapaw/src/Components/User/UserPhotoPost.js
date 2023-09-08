import React from 'react'
import styles from "./UserPhotoPost.module.css"
import Input from '../Forms/Input'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'

function UserPhotoPost() {

  const nome = useForm()
  const peso = useForm("number")
  const idade = useForm("number")
  const [img, setImg] = React.useState({})
  const {data, error, loading, request} = useFetch()

  function handleSubmit(e) {
    e.preventDefault()
  }
fefeffef bhrhrhrhrh
  function handleImgChange({target}) {
    setImg({
      raw: target.files[0]
    })rhrhrhrhrh
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome"/>
        <Input label="Peso" type="text" name="peso"/>
        <Input label="Idade" type="text" name="idade"/>
        <input type='file' name='img' id='img' onChange={handleImgChange}/>
        <Button>Enviar</Button>
      </form>
    </section>
  )
}

export default UserPhotoPost