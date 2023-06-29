import {Dispatch, SetStateAction} from "react"

export type Usuario = {
        "name": string,
        "email": string,
        "password": string,
}

/* type TarefaFormProps = {
        atualizarTarefas:  Dispatch<SetStateAction<TarefaAPI[]>>
} */

export type TipoTarefa = {
        titulo: string,
        conteudo: string,
        coluna: "TODO" | "DOING" | "DONE",
        id_API: string,
        atualizarTarefas: Dispatch<SetStateAction<TarefaAPI[]>> 
}

export type TarefaAPI ={
        title: string,
        content: string,
        column: "TODO" | "DOING" | "DONE",
        userId: string,
        _id: string 
        
}


export type TipoColuna = "TODO" | "DOING" | "DONE"