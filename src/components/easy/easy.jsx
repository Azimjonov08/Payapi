import "./easy.scss"
import EasyImg from '../../assets/svg/easy.svg'

function Easy() {
    return (
        <section className="easy">
            <div className="container easy-box">
                <div>
                    <img src={EasyImg} alt="#" width={445} height={284}/>
                </div>
                <div>
                    <h2 className="easy-title">Easy to implement</h2>
                    <p className="easy-text">
                    Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Easy