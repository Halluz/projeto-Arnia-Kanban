import { EstiloCabecalho, FontLogo, Saudacao } from "./estilo"
// import {useContext} from "react"
// import { Contexto } from "../../Servicos/Contexto/contexto"

export const LogoEmpresa = () => {
    return (
        <FontLogo>
            Arnia Trello
        </FontLogo>
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
            <div>Sair</div>
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