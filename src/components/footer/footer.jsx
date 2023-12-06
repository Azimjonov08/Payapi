import "./footer.scss"
import FooterImg from "../../assets/svg/footer-logo.svg"
import NetImg from "../../assets/svg/net.svg"



function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-box">
                <div className="footer-left">
                    <img src={FooterImg} alt="#" />
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