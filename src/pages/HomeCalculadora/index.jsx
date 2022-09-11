import { useState } from "react";
import { Wrapper, Calculadora, Resultado, Butt, Buttigual, Buttzero } from "./style"
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function HomeCalculadora() {

    const [numero, setNumero] = useState("");
    const [oldnumero, setOldnumero] = useState(0);
    const [operador, setOperado] = useState();

    //função para pegar o valor do input
    function inputNumero(e) {
        var input = e.target.value
        if (numero === 0) {
            setNumero(input);
        } else {
            setNumero(numero + input)
        }
    }

    // função limpa a tela
    function clear(e) {
        setNumero(0)
    }

    //função porcentagem
    function porcentagem(e) {
        setNumero(numero / 100)
    }

    //função selecionar operador
    function operadores(e) {
        var operadorInput = e.target.value
        setOperado(operadorInput)
        setOldnumero(numero) //numero que eu digitei antes
        setNumero("")
    }

    //função calcular
    function calcular(e) {
        if (operador === "/") {
            setNumero(parseFloat(oldnumero) / parseFloat(numero))
        } else if (operador === "X") {
            setNumero(parseFloat(oldnumero) * parseFloat(numero))
        } else if (operador === "-") {
            setNumero(parseFloat(oldnumero) - parseFloat(numero))
        } else if (operador === "+") {
            setNumero(parseFloat(oldnumero) + parseFloat(numero))
        }
    }

    return (
        <>
            <Wrapper>
                <Header />            
                    <Calculadora>
                    <Resultado>{numero}</Resultado>
                    <table>
                        <tr>
                            <td><Butt onClick={clear}>C</Butt></td>
                            <td><Butt onClick={porcentagem}>%</Butt></td>
                            <td><Butt onClick={operadores} value={"/"}>/</Butt></td>
                            <td><Butt onClick={operadores} value={"X"}>X</Butt></td>
                        </tr>
                        <tr>
                            <td><Butt onClick={inputNumero} value={7}>7</Butt></td>
                            <td><Butt onClick={inputNumero} value={8}>8</Butt></td>
                            <td><Butt onClick={inputNumero} value={9}>9</Butt></td>
                            <td><Butt onClick={operadores} value={"-"}>-</Butt></td>
                        </tr>
                        <tr>
                            <td><Butt onClick={inputNumero} value={4}>4</Butt></td>
                            <td><Butt onClick={inputNumero} value={5}>5</Butt></td>
                            <td><Butt onClick={inputNumero} value={6}>6</Butt></td>
                            <td><Butt onClick={operadores} value={"+"}>+</Butt></td>
                        </tr>
                        <tr>
                            <td><Butt onClick={inputNumero} value={1}>1</Butt></td>
                            <td><Butt onClick={inputNumero} value={2}>2</Butt></td>
                            <td><Butt onClick={inputNumero} value={3}>3</Butt></td>
                            <td rowSpan={2}><Buttigual onClick={calcular} value={"="}>=</Buttigual></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><Buttzero onClick={inputNumero} value={0}>0</Buttzero></td>
                            <td><Butt onClick={inputNumero} value={"."}>,</Butt></td>
                        </tr>
                    </table>
                </Calculadora>
                <Footer />
            </Wrapper>
        </>
    )
}