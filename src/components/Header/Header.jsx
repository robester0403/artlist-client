import { Link } from "react-router-dom";
import "./Header.scss"

function Header (){
    return(
        <header className="header">
            <Link to="/" className="header__logo-container">
                <img src="http://localhost:8080/logos/logo-black-on-white.png" alt="logo" className="header__logo"/>
            </Link>
            <div className="header__sign-in-container">
                <button className="header__button">Log in</button>
            </div>
        </header>
    )
}

export default Header;