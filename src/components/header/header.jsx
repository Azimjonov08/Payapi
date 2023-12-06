import "./header.scss"
import HeaderImg from "../../assets/svg/logo.svg"
import Button from "../button/button"

function Header() {
    return (
        <header>
            <div className="header">
                <div className="container">
                    <div className="header-box">
                        <div className="header-left">
                            <img src={HeaderImg} alt="#" />
                            <ul>
                                <li>
                                    <a href="">Pricing</a>
                                </li>
                                <li>
                                    <a href="">About</a>
                                </li>
                                <li>
                                    <a href="">Contact</a>
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