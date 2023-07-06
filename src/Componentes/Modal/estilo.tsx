import styled from "styled-components";

export const Escuro = styled.div`
    background-color: rgba(0, 0, 0, 0.753);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Janela = styled.div`
    width: 535px;
    height: 238px;
    border-radius: 10px;
    background: #FFF;
    color: #575757;
    font-size: 20px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const BotaoModal = styled.button`
    width: 180px;
    height: 59px;
    border-radius: 25px;
    border: 1px solid #0A2668;
    background: #FCFCFC;

    color: #3A72F8;
    text-align: center;
    font-size: 24px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
`

export const BotaoModal2 = styled.button`
    width: 180px;
    height: 59px;
    border-radius: 25px;
    border: 1px solid #0A2668;
    background: #0A2668;
    cursor: pointer;

    color: #FFF;
    text-align: center;
    font-size: 24px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
` 

export const RecipienteBotoes = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    width: 80%;
`