import {ReactNode} from "react"
import { TabConteudo } from "./estilo"


type Props ={
    children: ReactNode
}


const Tabela = ({children}: Props) => {
    return (
        <TabConteudo>
            {children}
        </TabConteudo>
    )
}

export default Tabela