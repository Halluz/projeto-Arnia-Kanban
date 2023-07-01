import { isPrimeNumber, isPrimeNumber2 } from "./testeNumeroPrimo";
import {useState} from "react"

export const LayoutNumeroPrimo = () => {
    const [input, setInput] = useState(0)

    return (
        <>
            <input type="number" value={input} onChange={(evento) => setInput( Number.parseInt(evento.target.value))}/>
            <h1>O número {input} é primo? Resposta: {`${isPrimeNumber(input)}`}</h1>
            <h1>O número {input} é primo? Resposta(2): {`${isPrimeNumber2(input)}`}</h1>
        </>
    )
}