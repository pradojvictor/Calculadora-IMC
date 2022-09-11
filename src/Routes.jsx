import { Routes as WrapperRoutes, Route, BrowserRouter } from "react-router-dom";
import HomeCalculadora from "./pages/HomeCalculadora";
import Imc from "./pages/HomeImc";

export default function Routes() {
    return(
        <BrowserRouter>
        <WrapperRoutes>
            <Route path="/" element={<HomeCalculadora/>}/>
            <Route path="/imc" element={<Imc/>}/>
        </WrapperRoutes>
        </BrowserRouter>
    )
}