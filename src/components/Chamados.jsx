import { useState, useEffect } from 'react'
import { Chamado } from './Chamado'


export function Chamados() {

	const [usuarios, setUsuarios] = useState([])
  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(resposta => resposta.json())
      .then(dados => {
        const usuarios = dados.data.map(usuario => {
          return {
            id: usuario.id,
            nome: usuario.first_name,
            sobrenome: usuario.last_name,
            email: usuario.email
          }
        })

        setUsuarios(usuarios)

      })
  }, [])


  const removerUsuario = usuario => {
    if (window.confirm(`Tem certeza que deseja remover "${usuario.nome} ${usuario.sobrenome}"?`)) {

      fetch(`https://reqres.in/api/users/${usuario.id}`, {
        method: 'DELETE'
      })
        .then(resposta => {
          if (resposta.ok) {
            setUsuarios(usuarios.filter(x => x.id !== usuario.id))
          }
        })
    }
  }

  return (
    <>
      {usuarios.map(usuario => (
        <Chamado key={usuario.id}
          usuario={usuario}
          removerUsuario={() => removerUsuario(usuario)}
        />
      ))}
    </>
  )

}