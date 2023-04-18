import React from 'react'
import { FormPost, Input, TextArea } from './styled'
import useForms from '../../hooks/useForms'
import axios from 'axios'
import { BASE_URL } from '../../constants/BASE_URL'

export default function CriarPost() {

  const token = localStorage.getItem("token")
    
  const headers = {
    headers: {
      authorization: token
    }
  }


  const { form, onChange, limparCampos } = useForms({title: "", body: ""})

  const body = {
    title: form.title,
    body: form.body
  }

  const enviarPost = (e) => {
    e.preventDefault()

    console.log("entrou")   
    axios.post(`${BASE_URL}/posts`, body, headers)
    .then(() => {
      alert("Poste Criado com sucesso!")
    })
    .catch((error) => {
      console.log(error.response)
    })
  }



  return (
    <FormPost onSubmit={enviarPost}>
      <label htmlFor='tituloPost'>Título:</label>
      <Input 
      placeholder='digite um título para o seu post'
      name='title'
      value={form.title}
      onChange={onChange} 
      />
      <label htmlFor='textoPost'>Texto:</label>
      <TextArea placeholder='crie um post!' 
        name='body'
        value={form.body}
        onChange={onChange}
        
      />
      <button>Enviar</button>
    </FormPost>
  )
}
