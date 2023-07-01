import { Formulario, Divisoria, Campo, RecipienteFormulario } from "../../Componentes/Estilo/estilo"
import { Link } from "react-router-dom"
import { Botao } from "../../Componentes/Botao/estilo"
import { Contexto } from "../../Servicos/Contexto/contexto"
import { useNavigate } from "react-router-dom"
import { useState, useContext} from "react"

const urlAPI = "https://arnia-kanban.vercel.app/"

export default function PaginaLogin(){
    
    const contexto = useContext(Contexto)

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navegacao = useNavigate()

    const logar = async () =>{
        try{
            const resposta = await fetch(`${urlAPI}api/user/login`,{
                method: 'POST',
                headers: {
                    'x-api-key': '52a8b954-e25d-4cc5-86e5-c32e92f994bb',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password: senha
                })
            } )
            if(resposta.ok){
                const dados = await resposta.json()
                localStorage.setItem('Usuario', dados.name) 
                localStorage.setItem('token', dados.token)
                contexto.nomeUsuario = dados.name
                contexto.token = dados.token
                console.log("Resposta Login: ", dados)
                console.log(`Contexto => NomeUsuario: ${contexto.nomeUsuario} / Token: ${contexto.token}`)
                console.log(contexto)
                navegacao("kanban") // Redireciona para a página Kanban
                // return dados
            }
        }catch(erro){
            console.log("Ocorreu um erro: ", erro)
        }
    }

    return (
        <>
          <RecipienteFormulario>
            <Formulario>
                <h2>Arnia Trello</h2>
                <h3>Login</h3>
                <Divisoria>
                    <label htmlFor="emailLogin">E-mail</label>
                    <Campo id="emailLogin" type="email" value={email} onChange={ (evento) =>setEmail(evento.target.value)} />
                </Divisoria>

                <Divisoria>
                    <label htmlFor="senhaLogin">Senha</label>
                    <Campo type="password" value={senha} onChange={ (evento) => setSenha(evento.target.value)} />
                </Divisoria>
            </Formulario>
            <Botao onClick={logar} >Entrar</Botao>
                    <Link to="Cadastro" style={{color: "white"}}>Cadastre-se</Link>
                    {/* <Link to="kanban" style={{color: "white"}}>Kanban</Link> */}
          </RecipienteFormulario>

        </>
    )
}