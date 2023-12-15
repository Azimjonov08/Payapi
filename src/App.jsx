import './App.scss'
import Apages from './pages/about/apages'
import Home from './pages/home/home'
import  {Routes, Route} from 'react-router-dom'
import Ppages from './pages/pricing-pages/ppages'
import Cpages from './pages/contact-pages/cpages'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Apages />} />
        <Route path='/pricing' element={<Ppages />} />
        <Route path='/contact' element={<Cpages />} />
      </Routes>
    </>
  )
}

export default App
