import styled from "styled-components";


export const Calculadora = styled.div`
    position: absolute;
    background: rgba(251, 229, 213, 0);
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 15px;
    padding: 10px;
`;

export const InputNumb = styled.input`
    background: rgba(255, 255, 255, 0.4);
    width: 150px;
    height: 30px;
    margin:10px;
    border:none;
    border-radius:3px;
    padding:5px;
    font-size:15px;
    color: #2D112A;
`;

export const Buttcalular = styled.button`
    display:flex;
    justify-content:center;
    width: 340px;
    height: 30px;
    margin-left:10px;
    padding:5px;
    font-size: 15px;
    cursor: pointer;
    background-color: #C9273C;
    border: none;
    color: #ffffff;
    border-radius: 3px;
    &:hover {
        background-color: #FF6C40;
    }
`;

export const Texto = styled.textarea`
    background: rgba(255, 255, 255, 0.7);
    width: 315px;
    height: 70px;
    margin: 10px;
    font-size: 15px;
    color: #2D112A;
    border-radius: 5px;
    padding: 10px;
    border:none;
    resize: none;
    outline: none;
    resize: none;
`;