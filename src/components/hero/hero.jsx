import "./hero.scss"
import Button from "../button/button"
import PhoneImg from '../../assets/svg/phone.svg'

function Hero() {
    return (
        <section className="hero">
            <div className="container hero-box">
                <div className="hero-left">
                    <h2 className="hero-title">
                        Start building with our APIs for absolutely free.
                    </h2>
                    <div className="hero-btn-input">
                        <input className="hero-input" type="email" placeholder="Enter email address" />
                        <div className="hero-btn">
                            <Button btn="Schedule a Demo" />
                        </div>
                    </div>
                    <p>Have any questions?<b> Contact Us</b></p>
                </div>
                <div className="hero-right">
                    <img src={PhoneImg} alt="#" />
                </div>
            </div>
        </section>
    )
}

export default Hero