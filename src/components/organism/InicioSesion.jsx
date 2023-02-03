import LoginHeader from '../atoms/LoginHeader'
import LogoCuadrado from '../../assets/img/logoCuadrado.png'

import '../../assets/styles/orgInicioSesion.css';
import LoginForm from '../atoms/LoginForm';
function DivInicioSesion() {
    return ( 
        <div className='divInicioSesion'>
            <div className='login-card-logo'><img className='login-card-logo-img' src={LogoCuadrado}/></div>
            <LoginHeader/>
            <LoginForm/>
        </div>
     );
}

export default DivInicioSesion;