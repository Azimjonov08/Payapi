import "./footer.scss"
import FooterImg from "../../assets/svg/footer-logo.svg"
import NetImg from "../../assets/svg/net.svg"
import { NavLink } from "react-router-dom"



function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-box">
                <div className="footer-left">
                    <NavLink to={'/'}>
                        <img src={FooterImg} alt="#" />
                    </NavLink>
                    <ul>
                        <li>
                            <NavLink to={'/pricing'}>
                                <a href="">Pricing</a>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/about'}>
                                <a href="">About</a>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/contact'}>
                                <a href="">Contact</a>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <a href="#">
                        <img src={NetImg} alt="#" width={120} height={25} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer