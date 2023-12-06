import Header from './components/header/header'
import Hero from './/components/hero/hero'
import Work from './components/work/work'
import Easy from './components/easy/easy'
import Simple from './components/simple/simple'
import Ready from './components/ready/ready'
import Footer from './components/footer/footer'
import Pricing from './components/pricing/pricing'
import Atop from './components/about-top/atop'
import './App.scss'


function App() {

  return (
    <>
      <Header />
      <Hero />
      <Work />
      <Easy />
      <Simple />
      <Ready />
      <Footer />
      <div className="span-span"></div>
      <h1 className='pricing-title'>Pricing department</h1>
      <div className="span-span1"></div>
      <Header />
      <Pricing />
      <Footer />
      <div className="span-span"></div>
      <h1 className='pricing-title'>About department</h1>
      <div className="span-span1"></div>
      <Header />
      <Atop />
      <Footer />
    </>
  )
}

export default App
