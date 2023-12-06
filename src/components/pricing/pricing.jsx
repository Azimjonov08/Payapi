import "./pricing.scss"
import PathImg from "../../assets/svg/Path.svg"
import Path3Img from "../../assets/svg/Path3.svg"
import Buttonn from "../buttonn/buttonn"
import Button from "../button/button"


function Pricing() {
    return (
        <section className="pricing">
            <div className="container">
                <h2 className="title">Pricing</h2>
                <ul>
                    <li>
                        <h4>Free Plan</h4>
                        <p className="text">Build and test using our core set of products with up to 100 API requests </p>
                        <h2>$0.00</h2>
                        <div className="span"></div>
                        <div className="plan">
                            <img src={PathImg} alt="#" />
                            <p>Transactions</p>
                        </div>
                        <div className="plan">
                            <img src={PathImg} alt="#" />
                            <p>Auth</p>
                        </div>
                        <div className="plan">
                            <img src={PathImg} alt="#" />
                            <p>Identity</p>
                        </div>
                        <div className="plan">
                            <img src={Path3Img} alt="#" />
                            <p className="plan-text">Investments</p>
                        </div>
                        <div className="plan">
                            <img src={Path3Img} alt="#" />
                            <p className="plan-text">Assets</p>
                        </div>
                        <div className="plan">
                            <img src={Path3Img} alt="#" />
                            <p className="plan-text">Liabilities</p>

                        </div>
                        <div className="plan">
                            <img src={Path3Img} alt="#" />
                            <p className="plan-text">Income</p>
                        </div>
                        <div className="span"></div>
                        <Buttonn btnn="Request Access" />
                    </li>

                    <li>
                        <h4>Basic Plan</h4>
                        <p className="text">Build and test using our core set of products with up to 100 API requests </p>
                        <h2>$249.00</h2>
                        <div className="span"></div>
                        <div className="plan">
                            <img src={PathImg} alt="#" />
                            <p>Transactions</p>
                        </div>
                        <div className="plan">
                            <img src={PathImg} alt="#" />
                            <p>Auth</p>
                        </div>
                        <div className="plan">
                            <img src={PathImg} alt="#" />
                            <p>Identity</p>
                        </div>
                        <div className="plan">
                            <img src={PathImg} alt="#" />
                            <p>Investments</p>
                        </div>
                        <div className="plan">
                            <img src={PathImg} alt="#" />
                            <p>Assets</p>
                        </div>
                        <div className="plan">
                            <img src={Path3Img} alt="#" />
                            <p className="plan-text">Liabilities</p>

                        </div>
                        <div className="plan">
                            <img src={Path3Img} alt="#" />
                            <p className="plan-text">Income</p>
                        </div>
                        <div className="span"></div>
                        <Buttonn btnn="Request Access" />

                    </li>

                    <li>
                        <h4>Premium Plan</h4>
                        <p className="text">Get tailored solutions, volume pricing, and dedicated support for your team </p>
                        <h2>$499.00</h2>
                        <div className="span"></div>
                        <div className="plan">
                            <img src={PathImg} alt="#" />
                            <p>Transactions</p>
                        </div>
                        <div className="plan">
                            <img src={PathImg} alt="#" />
                            <p>Auth</p>
                        </div>
                        <div className="plan">
                            <img src={PathImg} alt="#" />
                            <p>Identity</p>
                        </div>
                        <div className="plan">
                            <img src={PathImg} alt="#" />
                            <p>Investments</p>
                        </div>
                        <div className="plan">
                            <img src={PathImg} alt="#" />
                            <p>Assets</p>
                        </div>
                        <div className="plan">
                            <img src={PathImg} alt="#" />
                            <p>Liabilities</p>

                        </div>
                        <div className="plan">
                            <img src={PathImg} alt="#" />
                            <p>Income</p>
                        </div>
                        <div className="span"></div>
                        <Buttonn btnn="Request Access" />

                    </li>
                </ul>
                <div className="bottom">
                    <h2 className="title">Ready to start?</h2>
                    <div className="r-left">
                        <input className="ready-input" type="email" placeholder="Enter email address" />
                        <div className="ready-btn">
                            <Button btn="Schedule a Demo" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing