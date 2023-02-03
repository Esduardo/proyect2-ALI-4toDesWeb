import '../assets/styles/NotFound.css'
import Fondo403 from '../assets/img/fondo-403.jpg'
import Time from '../assets/img/time.gif'
import Gato from '../assets/img/gato.gif'

import Caption from "../components/atoms/Caption";
function NotFound() {
    return ( 
        <div className='NotFound'>
           <img className='Fondo403' src={Fondo403}/>
           <img className='time' src={Time}/>
           <img className='gato' src={Gato}/>
           <div className='divFondo'/>
           <Caption msn={"404. Página no encontrada"}></Caption>
        </div>
     );
}

export default NotFound;