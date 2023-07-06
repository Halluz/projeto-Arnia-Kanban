import { Escuro, Janela, BotaoModal, BotaoModal2, RecipienteBotoes } from "./estilo"
import { deletarTarefa } from "../../Servicos/Funções/funcoes"
import {Dispatch, SetStateAction} from "react"
import { TarefaAPI } from "../../Servicos/Tipos/tipos"

type PropsModal = {
    funcAbrirModal: (boleano: boolean) => void,
    id_tarefa: string,
    atualizarTarefas: Dispatch<SetStateAction<TarefaAPI[]>>
}


export const ModalDeletarTarefa = ({funcAbrirModal, id_tarefa, atualizarTarefas}: PropsModal) => {
    return (
        <Escuro>
            <Janela>
                <div>TU DESEJAS REALMENTE EXCLUIR ESTA TAREFA?</div>
                <RecipienteBotoes>
                    <BotaoModal onClick={() => funcAbrirModal(false)}>NÃO</BotaoModal>
                    <BotaoModal2 onClick={async () => {
                        const arrayTarefas = await deletarTarefa(id_tarefa)
                        console.log(arrayTarefas)
                        atualizarTarefas(arrayTarefas)
                        funcAbrirModal(false)
                    }}>SIM</BotaoModal2>
                </RecipienteBotoes>
            </Janela>
        </Escuro>
    )
    
}