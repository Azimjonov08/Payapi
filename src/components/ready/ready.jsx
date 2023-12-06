import "./ready.scss"
import BankingImg from "../../assets/svg/banking.svg"
import PersonalImg from "../../assets/svg/personal.svg"
import ConsumerImg from "../../assets/svg/consumer.svg"
import Button from "../button/button"

function Ready() {
    return (
        <section className="ready">
            <div className="container ready-box">
                <ul className="ready-top">
                    <li>
                        <img src={PersonalImg} alt="#" width={105} height={105} />
                        <h4 className="title">Personal Finances</h4>
                        <p className="text">Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. </p>
                    </li>

                    <li>
                        <img src={BankingImg} alt="#" width={105} height={105} />
                        <h4 className="title">Banking & Coverage</h4>
                        <p className="text">With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts. </p>
                    </li>

                    <li>
                        <img src={ConsumerImg} alt="#" width={105} height={105} />
                        <h4 className="title">Consumer Payments</h4>
                        <p className="text"> It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account. </p>
                    </li>
                </ul>
                <div className="ready-bottom">
                    <h2 className="ready-title">Ready to start?</h2>
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

export default Ready