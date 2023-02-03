import '../../assets/styles/Dashboard.css'

import { Link } from "react-router-dom";
function Dashboard() {
    return ( 
        <div className="Dashboard">
            <div>Home</div>
            <div><Link to="/login">Iniciar Sesión</Link></div>
        </div>
     );
}

export default Dashboard;