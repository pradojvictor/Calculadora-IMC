import { icons } from "../../assets";
import { Butt, Foooter, Linka } from "./style";


export default function Footer() {


    return(
        <Foooter> 
            <Linka target={"_blank"} href="https://github.com/pradojvictor/Calculadora-com-IMC"><Butt ><img src={icons.git} alt="" /></Butt></Linka>
        </Foooter>
    )
}