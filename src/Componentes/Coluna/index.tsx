import {ReactNode} from "react"
import { ColunaEstilo, Titulo1, Recipiente } from "./estilo"

type Props = {
    titulo: string, 
    children:  ReactNode 
}


export const Coluna = ({titulo, children}: Props) =>{
    return (
        <ColunaEstilo>
            <Titulo1>{titulo}</Titulo1>
            <Recipiente>{children}</Recipiente>
        </ColunaEstilo>
    )
}