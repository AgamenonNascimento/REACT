import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu.jsx";
import LivroList from "./components/LivroList";
import LivroForm from "./components/LivroForm";
function App() {
  

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<LivroList />} />
        <Route path="/novo" element={<LivroForm />} />
        <Route path="/editar/:id" element={<LivroForm />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
