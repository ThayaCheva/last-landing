
import "./landing.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Landing() {
    return (
        <section className="landing-page">
            <nav>
                <div className="btn-container">
                    <button className="sign-btn sign-up"><p>SIGN UP</p></button>
                    <button className="sign-btn sign-in">SIGN IN</button>
                </div>
            </nav>
            <div className="welcome">
                <h1 className="intro">Welcome to</h1>
                <h1 className="name">LASTBITE</h1>
                <p>With every leftover meal delivered, you're helping the planet - enjoy fresh, eco-friendly food near you.</p>
                <form className="address">
                    <div className="add-input">
                        <FontAwesomeIcon className="icon" icon={faLocationDot}></FontAwesomeIcon>
                        <input type="text" id="address-input" name="address" placeholder="Enter your address"></input>
                    </div>
                    <button className="submit-btn" type="submit"><FontAwesomeIcon className="icon" icon={faArrowRight}>    </FontAwesomeIcon></button>
                </form>
            </div>
        </section>
    )
}