import { Link } from 'react-router-dom';

export default function Menu (){
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
    <div className="container">
        <Link className="navbar-brand" to="/">Catálogo de Livros</Link>
            
      <div className="navbar-nav">
        <Link className="nav-link active text-white" to="/">Lista de Livros</Link>
        <Link className="nav-link active text-white" to="/novo">Adcionar Livro</Link>
      
      </div>
    </div>
</nav>

  )
}