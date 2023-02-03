import { Link } from "react-router-dom";
import Gmail from '../../assets/img/Gmail Logo.png'
import Security from '../../assets/img/Security Shield Green.png'

import '../../assets/javaScript/sesion-register'
import '../../assets/styles/loginForm.css'

function LoginForm() {
    return ( 
        <form className='login-form' id="formulario">
            <div className='login-form-item'>
                <img className='sPan1' src={Gmail}/>
                <input className="login-form-input-gmail" type="email" name="correo" id="correo" placeholder="user@gmail.com" />
            </div>
            <div>
                <img className='sPan2' src={Security}/>
                <input className="login-form-input-password" type="password" name="password" id="password" placeholder="**********"/>
            </div>
            <button className="btn-iniciar" type="submit">Iniciar Sesion</button>
            <div className="irRegister">
                <p>¿No tienes ninguna cuenta?</p>
                <Link className="linkRegister" to='/register' id="registro" >Registrate</Link>
            </div>            
        </form>
     );
}

export default LoginForm;