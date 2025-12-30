import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import api from "../services/api"


export default function LivroForm (){
  const [titulo, setTitulo] = useState("");
  const [paginas, setPaginas] = useState("");
  const [categoria, setCategoria] = useState("Romance");
  const [descricao, setDescricao] = useState("");

  const { id } = useParams();
  //const navigate = useNavigate();

  return(
    <div className="container card p-0 mt-5" style={{ maxWidth: "500px"}}>
      <div className="card-header">
        <h5>{id ? "Editar Livro" : "Novo Livro"}</h5>
      </div>
      <div className="card-body">
        <form>
          <div className="mb-3">
            <label className="form-label">Título</label>
            <input  type="text" 
                    className="form-control" 
                    value={titulo}
                    onChange={e => setTitulo(e.target.value)}
                    required
            />            
          </div>
            {/* Preço e Categoria lado a lado */}

          <div className=" row mb-3">
            <div className="col-md-6">
              <label className="form-label">Nr Páginas</label>
              <input  type="number" 
                    className="form-control" 
                    value={paginas}
                    onChange={e => setPaginas(e.target.value)}
                    required
              />
          </div>

          <div className="col-md-6">
            <label className="form-label">Categoria</label>
            <select  className="form-select"
                      value={categoria}
                      onChange={e => setCategoria(e.target.value)}
                      required
            >
              <option value="Romance">Romance</option>
              <option value="Ficção">Ficção</option>
              <option value="Suspense">Suspense</option>
              <option value="Biografia">Biografia</option>
            </select>
          </div>
        </div>

          <div className="mb-3">
            <label className="form-label">Descrição</label>
            <textarea  className="form-control"
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                        rows="3"
                        required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-success">Salvar</button>
          <Link className="btn btn-warning ms-2" to={"/"} >Voltar</Link>
        </form>
      </div>

    </div>

  )
}