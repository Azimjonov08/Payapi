import "./simple.scss"
// import IphonexImg from '../../assets/img/iphone-x.png'
import Iphones from '../../assets/svg/iphones.svg'


function Simple() {
    return (
        <section className="simple">
            <div className="container simple-box">
                <div className="simple-left">
                    <h2 className="simple-title">Simple UI & UX</h2>                 
                    <p className="simple-text">Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. </p>
                </div>
                <div className="simple-right">
                    <img className="iphone-xnpm run dev
                    " src={Iphones} alt="#"/>
                    {/* <img className="iphone-xs" src={IphonexsImg} alt="#"/> */}
                </div>
            </div>
        </section>
    )
}

export default Simple