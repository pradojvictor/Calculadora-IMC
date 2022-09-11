import styled from "styled-components";
import {images} from "../../assets" 

export const Wrapper = styled.section`
    background: url(${images.fundo}) no-repeat center center fixed;
    background-size: cover;
    height: 100vh;

`;

export const Calculadora = styled.div`
    position: absolute;
    background: rgba(251, 229, 213, 0);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 15px;
    padding: 10px;
`;

export const Resultado = styled.p`
    background: rgba(255, 255, 255, 0.8);
    width: 200px;
    height: 35px;
    margin: 5px;
    font-size: 25px;
    color: #530030;
    border-radius: 2px;
    text-align: right;
    padding: 5px;
    overflow: hidden;
`;

export const Butt = styled.button`
    width: 50px;
    height: 50px;
    font-size: 15px;
    cursor: pointer;
    background-color: #C9273C;
    border: none;
    color: #ffffff;
    margin: 1px;
    border-radius: 3px;
    &:hover {
        background-color: #FF6C40;
    }
`;

export const Buttigual = styled(Butt)`
    height: 105px;
`;

export const Buttzero = styled(Butt)`
    width: 105px;
`;