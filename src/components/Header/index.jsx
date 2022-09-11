import { useNavigate } from "react-router-dom";
import { Butt, Heade } from "./style";
import { icons } from "../../assets";

export default function Header() {

//prequiça de criar um link como componente e muda tudo pra props :)
    let navigate = useNavigate(); 
    const routeCalculator = () =>{ 
      let path = `/`; 
      navigate(path);
    }
    const routeImc = () =>{ 
        let path = `/imc`; 
        navigate(path);
    }

    return(
        <Heade>
            <Butt onClick={routeCalculator}><img src={icons.calculadora} alt="icone de uma calculadora"/></Butt>
            <Butt onClick={routeImc}><img src={icons.balanca} alt="icone de uma balança" /></Butt>
        </Heade>
    )
}