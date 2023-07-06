import { Cabecalho } from "../../Componentes/Cabecalho";
import Tabela from "../../Componentes/Tabela";
import { Coluna } from "../../Componentes/Coluna";
import { TarefaForm, Tarefa } from "../../Componentes/Tarefa";
import { obterTodasAsTarefas } from "../../Servicos/Funções/funcoes";
import { TarefaAPI } from "../../Servicos/Tipos/tipos";
import {useEffect, useState} from "react"




export const PaginaKanban: React.FC = () => {
    const [vetTodasTarefas, SetVetTodasTarefas] = useState<TarefaAPI[]>([])
    
    useEffect(() => {
        const respostaAPI = async () => {
            const ObterTodosCards = await obterTodasAsTarefas()
            SetVetTodasTarefas( ObterTodosCards) 
            
        }
            respostaAPI()
            console.log(respostaAPI())
    }, [])


    
    return (
        <>
            <Cabecalho/>
            <Tabela>
                <Coluna titulo="Novo">
                    <TarefaForm atualizarTarefas={SetVetTodasTarefas} />
                </Coluna>
                <Coluna titulo="To Do">
                    
                    {vetTodasTarefas.filter(ObjetoTarefaAPI => ObjetoTarefaAPI.column === "TODO")
                        .map((ObjetoTarefaAPI) => (
                            <Tarefa key={ObjetoTarefaAPI._id} titulo={ObjetoTarefaAPI.title} conteudo={ObjetoTarefaAPI.content} coluna={ObjetoTarefaAPI.column} atualizarTarefas={SetVetTodasTarefas} id_API={ObjetoTarefaAPI._id}/> 
                            
                        ))
                    }
                </Coluna>
                <Coluna titulo="Doing">
                
                    {
                        vetTodasTarefas.filter(ObjetoTarefaAPI => ObjetoTarefaAPI.column === "DOING")
                        .map((ObjetoTarefaAPI) => (
                            <Tarefa key={ObjetoTarefaAPI._id} titulo={ObjetoTarefaAPI.title} conteudo={ObjetoTarefaAPI.content} coluna={ObjetoTarefaAPI.column} atualizarTarefas={SetVetTodasTarefas} id_API={ObjetoTarefaAPI._id}/>
                        ))
                    }
                    

                </Coluna>
                <Coluna titulo="Done">
                    
                    {
                        vetTodasTarefas.filter(ObjetoTarefaAPI => ObjetoTarefaAPI.column === "DONE")
                        .map((ObjetoTarefaAPI) => (
                            <Tarefa key={ObjetoTarefaAPI._id} titulo={ObjetoTarefaAPI.title} conteudo={ObjetoTarefaAPI.content} coluna={ObjetoTarefaAPI.column} atualizarTarefas={SetVetTodasTarefas} id_API={ObjetoTarefaAPI._id}/>
                        ))
                    }
                </Coluna>
            </Tabela>
        </>
    )
}