import { Link } from "react-router-dom"
import "./Footer.scss"

function Footer (){
    return(
        <footer className="footer">
            <div className="footer__copyright-container">
                <p className="footer__copyright">copyright message</p>
            </div>
            <div className="footer__post-container">
                <Link to="/" className="footer__post">Post Your Event</Link>
            </div>
        </footer>
    )
}

export default Footer