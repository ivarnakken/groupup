import * as React from 'react';
import Home from "../Home/index";
import styles from "./style.css"


const Login = () => {
    
    const [showLogin, setShowLogin] = React.useState(false);

    const handleClick = () => {
        setShowLogin(false);
    }

    return (
        
        <div className="Login">
            <h2>Logg inn!</h2>
            
            <input type="text" placeholder="Brukernavn..."/>
            
            <input type="text" placeholder="Passord..."/>

            <button onClick={handleClick}>Logg inn</button>

            {showLogin == false &&
            <Home/>}
        </div>

    )

}

export default Login;