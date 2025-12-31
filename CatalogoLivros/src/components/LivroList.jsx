import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import api from "../services/api"

export default function LivroList(){
  const [livros, setLivros] = useState([])

  useEffect(() => { carregarLivros () }, [])

    const carregarLivros = async () => {
        const resposta = await api.get('/')
        setLivros(resposta.data)
    }
    const excluir = async (id) => {
      if (!window.confirm("Confirma a exclusão deste livro?")) {
        return
      }
      await api.delete(`/${id}`)
      carregarLivros()
    }
  

  return(
    <div className="container card p-0 mt-5" >
        <div class="card-header">
          <h4>Livros no catálogo</h4>
        </div>
        <div class="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                  <th>Título</th>
                  <th>Páginas</th>
                  <th>Categoria</th>
                  <th>Descrição</th>                  
              </tr>
            </thead>
            <tbody>
              {livros.map( livro => (
              <tr key={livro.id}>
                <td>{livro.id}</td>
                <td>{livro.titulo}</td>
                <td>{livro.paginas}</td>
                <td>{livro.categoria}</td>
                <td>{livro.descricao}</td>
                <td>
                  <Link className="btn btn-primary btn-sm" to={`/editar/${livro.id}`}>Editar</Link>
                </td>
                <td>
                  <Link className="btn btn-danger btn-sm" onClick={() => excluir(livro.id)}>Excluir</Link> 
                </td>
              </tr>
              ))}
            </tbody>
          </table>
          
        </div>
    </div>
    

  )
}