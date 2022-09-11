import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Wrapper } from "../HomeCalculadora/style"
import { Buttcalular, Calculadora, InputNumb, Texto } from "./style"

export default function Imc() {


  function calcularImc() {
    var altura = document.getElementById("altura").value
    var peso = document.getElementById("peso").value

    var imc = (peso / altura ** 2) * 10000;

    var resultado = ""
    if (imc <= 18.5) {
      resultado = "Classificação 	Obesidade (grau) Magreza   	0"
    } else if (imc < 24.9) {
      resultado = "Classificação 	Obesidade (grau) Normal 	 	0"
    } else if (imc < 29.9) {
      resultado = "Classificação 	Obesidade (grau) Sobrepeso 	I"
    } else if (imc < 39.9) {
      resultado = "Classificação 	Obesidade (grau) Obesidade 	II"
    } else if (imc > 39.9) {
      resultado = "Classificação 	Obesidade (grau) Obesidade Grave 	III"
    }
    document.getElementById("textoImc").innerText = resultado
  }


  return (
    <Wrapper>
      <Header />  
      <Calculadora>
        <InputNumb id="altura" placeholder="altura (cm)" type="number" />
        <InputNumb id="peso" placeholder="peso (kg)" type="number" />
        <Buttcalular onClick={calcularImc}>IMC</Buttcalular>
        <Texto disabled id="textoImc"></Texto>
      </Calculadora>
      <Footer />
    </Wrapper>
  )
}