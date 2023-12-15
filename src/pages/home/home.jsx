import Easy from "../../components/easy/easy"
import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import Hero from "../../components/hero/hero"
import Ready from "../../components/ready/ready"
import Simple from "../../components/simple/simple"
import Work from "../../components/work/work"

function Home() {
    return(
        <>
        <Header />
        <Hero/>
        <Work />
        <Easy />
        <Simple />
        <Ready />
        <Footer />
        </>
    )
}
export default Home 