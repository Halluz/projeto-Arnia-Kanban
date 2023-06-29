import styled from "styled-components"

export const TituloTarefa = styled.div`
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #575757;
`

export const ConteudoTarefa = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #575757;
`

export const Cartao = styled.div`
    background: #F8F8F8;
    box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.28);
    border-radius: 25px;
    box-sizing: border-box;
    padding: 19px 30px 27px 21px;
    width: 290px;
`

export const CartaoForm = styled.form`
    background: #F8F8F8;
    box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.28);
    border-radius: 25px;
    width: 290px;
    box-sizing: border-box;
    padding: 19px 30px 27px 21px;
`

export const CampoTitulo = styled.input`
    border: 1px solid #575757;
    border-radius: 25px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #575757;
    padding-left: 10px;
    width: 95%;
    margin-bottom: 5px;
`

export const CampoAreaDeTexto = styled.textarea`
    border: 1px solid #575757;
    border-radius: 25px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #575757;
    padding-left: 15px;
    padding-top: 10px;
    width: 95%;
`

export const Cab = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Rodape = styled.div`
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
`

export const Rodape2 = styled.div`
    margin-top: 8px;
    display: flex;
    justify-content: center;
`

export const RodapePosition = styled.div`
    position: relative;
`

export const ImagemBotao = styled.img`
    &:hover {
        transform: scale(1.4); // Aumento do elemento
        cursor: pointer;
    }
`