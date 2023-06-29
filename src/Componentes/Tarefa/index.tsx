import { TituloTarefa, ConteudoTarefa, Cartao, CartaoForm, CampoTitulo, CampoAreaDeTexto, Cab, Rodape, Rodape2, ImagemBotao } from "./estilo"
import ImagemAdicionar from "../../assets/imagens/adicionar.png"
import ImagemEditar from "../../assets/imagens/editar.png"
import ImagemAnterior from "../../assets/imagens/anterior.png"
import ImagemLixeira from "../../assets/imagens/lixeira.png"
import ImagemProximo from "../../assets/imagens/proximo.png"
import ImagemSalvar from "../../assets/imagens/salvarEdicao.png"
import ImagemFechar from "../../assets/imagens/fecharFormEdicao.png"
import {Dispatch, SetStateAction, useState} from "react"
import { TarefaAPI, TipoTarefa } from "../../Servicos/Tipos/tipos"
import { adicionarTarefa, editarTarefa, avancarEstado, retrocederEstado, deletarTarefa } from "../../Servicos/Funções/funcoes"



export const Tarefa = ({titulo, conteudo, coluna, atualizarTarefas, id_API}: TipoTarefa) => {
    const [ehParaEditar, setEhParaEditar] = useState(false)
    const [tituloEdicao, setTituloEdicao] = useState(titulo)
    const [conteudoEdicao, setConteudoEdicao] = useState(conteudo)
    
        return (
            ehParaEditar === false ?  (
                <Cartao>
                    <Cab>
                        <TituloTarefa>{titulo}</TituloTarefa>
                        <ImagemBotao src={ImagemEditar} alt="Imagem Editar" onClick={() => setEhParaEditar(!ehParaEditar)} />
                    </Cab>
                    <ConteudoTarefa>{conteudo}</ConteudoTarefa>
                    
                    {coluna === "TODO" && (
                        
                        <Rodape>
                            <ImagemBotao src={ImagemLixeira} alt="Imagem Deletar" onClick={async () => {
                                const arrayTarefas = await deletarTarefa(id_API)
                                atualizarTarefas(arrayTarefas)
                            }} />
                            <ImagemBotao src={ImagemProximo} alt="Imagem Próximo" onClick={async () => {
                                const proximoEstado = avancarEstado(coluna)
                                const arrayTarefas = await editarTarefa(id_API, titulo, conteudo, proximoEstado)
                                atualizarTarefas(arrayTarefas)
                            }} />
                        </Rodape>
                    )}

                    {coluna === "DOING" && (
                        <Rodape>
                            <ImagemBotao src={ImagemAnterior} alt="Imagem Anterior" onClick={async () => {
                                const estadoAnterior = retrocederEstado(coluna)
                                const arrayTarefas = await editarTarefa(id_API, titulo, conteudo, estadoAnterior)
                                atualizarTarefas(arrayTarefas)
                            }} />
                            <ImagemBotao src={ImagemLixeira} alt="Imagem Deletar" onClick={async () => {
                                const arrayTarefas = await deletarTarefa(id_API)
                                atualizarTarefas(arrayTarefas)
                            }}/>
                            <ImagemBotao src={ImagemProximo} alt="Imagem Próximo"  onClick={async () => {
                                const proximoEstado = avancarEstado(coluna)
                                const arrayTarefas = await editarTarefa(id_API, titulo, conteudo, proximoEstado)
                                atualizarTarefas(arrayTarefas)
                            }} />
                        </Rodape>
                    )}
                    
                    {coluna === "DONE" && (
                        <Rodape>
                            <ImagemBotao src={ImagemAnterior} alt="Imagem Anterior" onClick={ async () => {
                                const estadoAnterior = retrocederEstado(coluna)
                                const arrayTarefas = await editarTarefa(id_API, titulo, conteudo, estadoAnterior)
                                atualizarTarefas(arrayTarefas)
                            }}/>
                            <ImagemBotao src={ImagemLixeira} alt="Imagem Deletar" onClick = {async () => {
                                const arrayTarefas = await deletarTarefa(id_API)
                                atualizarTarefas(arrayTarefas)
                            }}/>
                        </Rodape>
                    )}
                </Cartao> ) : (
                    <CartaoForm>
                        <CampoTitulo type="text" value={tituloEdicao} onChange={(evento) => setTituloEdicao(evento.target.value)}/>
                        <CampoAreaDeTexto value={conteudoEdicao} onChange={(evento) => setConteudoEdicao(evento.target.value)} />
                        <Rodape>
                            <ImagemBotao src={ImagemFechar} alt="Imagem X" onClick={() => setEhParaEditar(!ehParaEditar)}  />
                            <ImagemBotao src={ImagemSalvar} alt="Imagem Disquete" onClick={ async () => {
                                const arrayTarefas = await editarTarefa(id_API, tituloEdicao, conteudoEdicao, coluna)
                                atualizarTarefas(arrayTarefas)
                                setEhParaEditar(!ehParaEditar)
                            }} />
                        </Rodape>
                    </CartaoForm>)
        )
}

type TarefaFormProps = {
    atualizarTarefas:  Dispatch<SetStateAction<TarefaAPI[]>>
}

export const TarefaForm = ({atualizarTarefas}: TarefaFormProps ) => {
    const [tituloNovo, setTituloNovo] = useState('')
    const [conteudoNovo, setConteudoNovo] = useState('')


    return (
        <CartaoForm>
            <CampoTitulo type="text" placeholder="Título" value={tituloNovo} onChange={evento => setTituloNovo(evento.target.value)}/>
            <CampoAreaDeTexto placeholder="Conteúdo" value={conteudoNovo} onChange={(evento) => setConteudoNovo(evento.target.value)}/>
            <Rodape2>
                <ImagemBotao src={ImagemAdicionar} alt="Imagem Adicionar" onClick={async () =>  { 
                    if(tituloNovo === '' || conteudoNovo === ''){
                        window.alert("Todos os campos precisam ser preenchidos!")
                        return []
                    }
                    const Tarefas = await adicionarTarefa(tituloNovo, conteudoNovo, "TODO")
                    setTituloNovo('')
                    setConteudoNovo('')
                    atualizarTarefas(Tarefas)
                } } />
            </Rodape2>
        </CartaoForm>
    )
}