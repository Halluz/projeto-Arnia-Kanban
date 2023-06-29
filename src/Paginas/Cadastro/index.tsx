import { Formulario, Divisoria, Campo, RecipienteFormulario } from "../../Componentes/Estilo/estilo"
import { Botao } from "../../Componentes/Botao/estilo"
import {Link} from "react-router-dom"
import React, {useState} from "react"
import { Usuario } from "../../Servicos/Tipos/tipos"

const urlAPI = "https://arnia-kanban.vercel.app/"



export default function PaginaCadastro(){

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confSenha, setConfSenha] = useState('')
    
    /* const cadastrar = async (evento: React.FormEvent) => {
        evento.preventDefault */
        const cadastrar = async () => {

        if(nome === '' || email === '' || senha === '' || confSenha === ''){
            window.alert("Todos os campos precisam ser preenchidos!")
            return
        }
        if(senha !== confSenha){
            window.alert("Os campos Senha e Confirmar-Senha precisam ter conteúdos idênticos!")
            return
        }
        

        const usuario: Usuario = {
            "email": email,
            "password": senha,
            "name": nome
        }

        try{ 
            const resposta = await fetch(`${urlAPI}api/user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': '52a8b954-e25d-4cc5-86e5-c32e92f994bb'
                },
                body: JSON.stringify(usuario)
            })
            const respostaJSON = await resposta.json()
            console.log(respostaJSON)
        }catch(erro){
        console.log("Ocorreu um erro: ", erro)
        }
    }

    return (
        <>
                <RecipienteFormulario>
                    {/* <Formulario id="cadastro" onSubmit={cadastrar}> */}
                    <Formulario>
                        <h2>Arnia Trello</h2>
                        <h3>Cadastro</h3>
                        <p style={{margin: '0px'}}>{nome}, {email}, {senha}, {confSenha}</p>
                        <Divisoria>
                            <label htmlFor="nomeCadastro">Nome Completo</label>
                            <Campo id="nomeCadastro" type="text" value={nome} onChange={(evento) => setNome(evento.target.value)}/>
                        </Divisoria>
                    
                        <Divisoria>
                            <label htmlFor="emailCadastro">E-mail</label>
                            <Campo id="emailCadastro" value={email} type="email" onChange={evento => setEmail(evento.target.value)} />
                        </Divisoria>
                        <Divisoria>
                            <label htmlFor="senhaCadastro">Senha</label>
                            <Campo id="senhaCadastro" type="password" value={senha} onChange={(evento) => setSenha(evento.target.value) }/> {/*Colocar Olho para ver a senha */}
                        </Divisoria>
                        <Divisoria>
                            <label htmlFor="repetirSenhaCadastro">Confirmar Senha</label>
                            <Campo id="repetirSenhaCadastro" type="password" value={confSenha} onChange={(evento)=> setConfSenha(evento.target.value)}/>
                        </Divisoria>
                    
                        <Link to="/">Voltar</Link>
                    
                    </Formulario>
                    <Botao onClick={cadastrar}>CADASTRAR</Botao>
                </RecipienteFormulario>
        </>
    )
}