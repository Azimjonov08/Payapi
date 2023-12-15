import "./header.scss"
import HeaderImg from "../../assets/svg/logo.svg"
import Button from "../button/button"
import { NavLink } from "react-router-dom"

function Header() {
    return (
        <header>
            <div className="header">
                <div className="container">
                    <div className="header-box">
                        <div className="header-left">
                            <NavLink to={'/'}>
                                <img src={HeaderImg} alt="#" />
                            </NavLink>
                            <ul>
                                <li>
                                    <NavLink to={'/pricing'}>
                                        <a href="">Pricing </a>
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
                        <Button btn="Schedule a Demo" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header