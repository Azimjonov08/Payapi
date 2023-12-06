import "./work.scss"
import TeslaImg from '../../assets/svg/tesla.svg'
import GoogleImg from '../../assets/svg/google.svg'
import HpImg from '../../assets/svg/hp.svg'
import OracleImg from '../../assets/svg/oracle.svg'
import MicrosoftImg from '../../assets/svg/microsoft.svg'
import NvidaImg from '../../assets/svg/nvida.svg'





function Work() {
    return (
        <section className="work">
            <div className="container work-box">
                <div className="work-left">
                    <h2 className="work-title">Who we work with</h2>
                    <p className="work-text">Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users. </p>
                    <button className="work-btn"><a href="#">About Us</a></button>
                </div>
                <div className="work-right">
                    <ul className="top">
                        <li>
                            <img src={TeslaImg} alt="#" width={130} height={18} />
                        </li>
                        <li>
                            <img src={MicrosoftImg} alt="#" width={145} height={32}/>
                        </li>
                        <li>
                            <img src={HpImg} alt="#" width={140} height={28} />
                        </li>
                    </ul>

                    <ul className="bottom">
                        <li>
                            <img src={OracleImg} alt="#" width={131} height={18}/>
                        </li>
                        <li>
                            <img src={GoogleImg} alt="#" width={96} height={34}/>
                        </li>
                        <li>
                            <img src={NvidaImg} alt="#" width={137} height={27}/>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Work