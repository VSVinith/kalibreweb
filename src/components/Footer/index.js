// import { Link } from "react-router-dom"
import "./index.css"

const Footer = () => {

    return (
        <div className="footer-container text-start">
            <div>
                <img alt="logo" />
                <p>&copy; <sub>Tech Kalibre</sub></p>
            </div>
            <div>
                <a className="links" href="/about">About Us</a><br></br>
                <a className="links" href="services">Services</a><br></br>
                <a className="links" href="contact">Contact Us</a><br></br>
            </div>
            <div>
                <a className="links" href="services">Privacy Policy</a><br></br>
                <a className="links" href="services">Terms & Conditions</a>
            </div>
            <div className="address-details">
                <span>47 Circle, City Center  500098</span>
                <br></br>
                <span>Tel:  (+91) 910.369.2580</span>
                <br></br>
                <span>support@techkalibre.com</span>
            </div>
        </div>
    )
}

export default Footer