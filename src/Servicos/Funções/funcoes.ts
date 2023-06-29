import { TipoColuna } from "../Tipos/tipos"

const urlAPI = "https://arnia-kanban.vercel.app/"



export const adicionarTarefa = async (variavelEstadoTitulo: string, variavelEstadoConteudo: string, coluna: string) => {
    try{

        const respostaAPI = await fetch(`${urlAPI}api/card`,{
            method: 'POST',
            headers: {
                'Authorization': localStorage.getItem('token') || '',
                'Content-Type': 'application/json',
                'x-api-key': '52a8b954-e25d-4cc5-86e5-c32e92f994bb',
                'Accept': '*/*'
            },
            body: JSON.stringify({
                "title": variavelEstadoTitulo,
                "content": variavelEstadoConteudo,
                "column": coluna
            })
        })
        const respostaAPIjson = await respostaAPI.json()
        console.log(respostaAPIjson)
        return respostaAPIjson
    }catch(erro){
        console.log("Ocorreu um erro: ", erro)
    }
}

export const obterTodasAsTarefas = async () => {
    try{
        const resposta = await fetch(`${urlAPI}api/card`, {
            headers: {
                'Authorization': localStorage.getItem('token') || '',
                'Content-Type': 'application/json',
                'x-api-key': '52a8b954-e25d-4cc5-86e5-c32e92f994bb',
                'Accept': '*/*'
            }
        })
        const respostaJSON = await resposta.json()
        console.log(respostaJSON)
        return respostaJSON 
    }catch(erro){
        console.log("Ocorreu um erro: ", erro)
    }
}

export const editarTarefa = async (id_API: string, variavelEstadoTitulo: string, variavelEstadoConteudo: string, coluna: TipoColuna) => {
    const respostaAPI = await fetch(`${urlAPI}api/card/${id_API}`, {
        method: 'PUT',
        headers: {
            'Authorization': localStorage.getItem('token') || '',
            'Content-Type': 'application/json',
            'x-api-key': '52a8b954-e25d-4cc5-86e5-c32e92f994bb',
            'Accept': '*/*'
        },
        body: JSON.stringify({
            "title": variavelEstadoTitulo,
            "content": variavelEstadoConteudo,
            "column": coluna,
        })
    })

    const respostaAPIjson = await respostaAPI.json()
    return respostaAPIjson

}

export const deletarTarefa = async (id_API: string) => {
    const resposta = await fetch(`${urlAPI}api/card/${id_API}`, {
        method: 'DELETE',
        headers: {
            'Authorization': localStorage.getItem('token') || '',
            'x-api-key': '52a8b954-e25d-4cc5-86e5-c32e92f994bb',
        } 
    })
    const respostaAPIjson = await resposta.json()
    return respostaAPIjson
}

export const avancarEstado = (colunaAtual: TipoColuna) => {
    
    if(colunaAtual === 'TODO'){
        return 'DOING'
    }
    if(colunaAtual === 'DOING'){ // Na verdade este if é desnecessário
        return 'DONE'
    }
    return 'DONE'
}

export const retrocederEstado = (colunaAtual: TipoColuna) => {
    if(colunaAtual === 'DONE'){
        return 'DOING'
    }
    if(colunaAtual === 'DOING'){ // Na verdade este if é desnecessário
        return 'TODO'
    }
    return 'TODO'
}