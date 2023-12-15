import "./contact.scss"
import Button from "../button/button"
import Tesla from "../../assets/img/tesla.png"
import Microsoft from "../../assets/img/microsoft.png"
import Hp from "../../assets/img/hp.png"
import Oracle from "../../assets/img/oracle.png"
import Google from "../../assets/img/google.png"
import Nvi from "../../assets/img/nvi.png"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"




function Contact() {
    return (
        <>
        <Header />
        <section className="contact">
            <div className="container">
                <h2 className="title">Submit a help request and
                    we’ll get in touch shortly.
                </h2>
                <div className="box">
                    <div>
                        <div className="input">
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email Address" />
                            <input type="text" placeholder="Company Name" />
                            <input type="text" placeholder="Title" />
                            <input className="message" type="text" placeholder="Message" />
                        </div>
                        <div className="check">
                            <input className="checkbox" type="checkbox" />
                            <h6>Stay up-to-date with company announcements and updates to our API</h6>
                        </div>
                        <button className="btnnn">
                            <a href="#">Submit</a>
                        </button>
                    </div>
                    <div>
                        <h4>
                            Join the thousands of innovators that are already building with us
                        </h4>
                        <ul className="list-1">
                            <li>
                                <img src={Tesla} alt="#" />
                            </li>
                            <li>
                                <img src={Microsoft} alt="#" />
                            </li>
                            <li>
                                <img src={Hp} alt="#" />
                            </li>
                        </ul>
                        <ul className="list-2">
                            <li>
                                <img src={Oracle} alt="#" />
                            </li>
                            <li>
                                <img src={Google} alt="#" />
                            </li>
                            <li>
                                <img src={Nvi} alt="#" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bottom">
                    <h2 className="bottom-title">
                        Ready to start?
                    </h2>
                    <div className="r-left">
                        <input className="ready-input" type="email" placeholder="Enter email address" />
                        <div className="ready-btn">
                            <Button btn="Schedule a Demo" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default Contact