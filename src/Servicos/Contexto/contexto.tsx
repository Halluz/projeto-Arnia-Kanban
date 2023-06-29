import { createContext} from "react";




type TipoContexto = {
    nomeUsuario: string,
    token: string
}



//createContext cria um contexto
export const Contexto = createContext<TipoContexto>({
    nomeUsuario: "Anônimo",
    token: ""
})

