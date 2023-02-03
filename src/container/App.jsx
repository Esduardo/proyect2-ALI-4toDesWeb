import {BrowserRouter, Routes, Route } from "react-router-dom";
import InicioSesion from "../pages/InicioSesion";
import LandingPage from "../pages/LandingPage";
import NotFound from "../pages/NotFound"
import Register from "../pages/Register";

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage/>}/>
                <Route path="/login" element={<InicioSesion/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>   
     );
}

export default App;