
import { Contexto } from "./Servicos/Contexto/contexto"
import PaginaCadastro from "./Paginas/Cadastro"
import PaginaLogin from "./Paginas/Login"
import { PaginaKanban } from "./Paginas/Kanban"

import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <>
      <Contexto.Provider value={{
        nomeUsuario: "Anônimo",
        token: ""
        }}>

        <BrowserRouter>
          <Routes>
            <Route path="cadastro" element={<PaginaCadastro/>} />
              
            <Route path="/" element={<PaginaLogin/>}/>
              
            <Route path="kanban" element={<PaginaKanban/>}/>
              
          </Routes>
        </BrowserRouter>

      </Contexto.Provider>

    </>
  )
}

export default App
