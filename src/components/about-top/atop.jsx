import "./atop.scss"
import Button from "../button/button"

function Atop() {
    return (
        <section className="A-top">
            <div className="container a-top-box">
                <h2 className="title">
                    We empower innovators
                    by delivering access to the financial system
                </h2>
                <div className="visun">
                    <h4>Our Vision</h4>
                    <p>Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology. </p>
                </div>
                <div className="biznes">
                    <h4>Our Business</h4>
                    <p>At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers. </p>
                </div>
            </div>
            <div className="bg">
            </div>
            <div className="container">
                <ul>
                    <li>
                        <div className="span"></div>
                        <p className="text">Team Members</p>
                        <h3 className="number-title">300+</h3>
                        <div className="span"></div>
                    </li>

                    <li>
                        <div className="span"></div>
                        <p className="text">Offices in the US</p>
                        <h3 className="number-title">3</h3>
                        <div className="span"></div>
                    </li>

                    <li>
                        <div className="span"></div>
                        <p className="text">Transactions analyzed</p>
                        <h3 className="number-title">10M+</h3>
                        <div className="span"></div>
                    </li>
                </ul>

                <div className="culture">
                    <h3>
                        The Culture
                    </h3>
                    <p>
                        We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.
                    </p>
                </div>

                <div className="people">
                    <h3>
                        The People
                    </h3>
                    <p>
                        We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.
                    </p>
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
    )
}

export default Atop