import { EstiloCabecalho, FontLogo, Saudacao } from "./estilo"
import { useNavigate } from "react-router-dom"

// import {useContext} from "react"
// import { Contexto } from "../../Servicos/Contexto/contexto"

export const LogoEmpresa = () => {
    return (
        <FontLogo>
            Arnia Trello
        </FontLogo>
    )
}


export const Sair = () => {
    const navegacao = useNavigate()
    const deslogar = () => {
        localStorage.setItem('Usuario', '')
        localStorage.setItem('token', "")
        navegacao("/")
    }

    return (
        <div style={{textDecoration: "underline", cursor: "pointer"}} onClick={() => deslogar()}>
            Sair
        </div>
    )

}

export const SaudacaoUsuario = () => {
    // const ObjetoContexto = useContext(Contexto)
    

    return (
        <Saudacao>
            <div>
                {/* Olá, <strong>{ObjetoContexto.nomeUsuario}</strong> */}
                Olá, <strong>{localStorage.getItem('Usuario')}</strong>
            </div>
            <Sair/>
        </Saudacao>
    )
}

export const Cabecalho = () => {
    return (
        <>
            <EstiloCabecalho>
                <LogoEmpresa/>
                <SaudacaoUsuario/>
            </EstiloCabecalho>
        </>
    )
}