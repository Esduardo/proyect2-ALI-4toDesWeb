import Logo from '../assets/img/logoSinFondo.png'
import Dashboard from '../components/atoms/Dashboard';
import Welcome from '../components/atoms/Welcome';

import '../assets/styles/LandingPage.css';

function LandingPage() {
    return ( 
        <div className='LandingPage'>
            <div className='LandingLogo'>
                <img className='logo' src={Logo}/>
            </div>
            <div className='Information'>
                <Dashboard/>
                <Welcome/>
            </div>
        </div>
     );
}

export default LandingPage;