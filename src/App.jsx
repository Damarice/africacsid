import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import AreasOfFocus from './components/AreasOfFocus'
import Approach from './components/Approach'
import AtAGlance from './components/AtAGlance'
import Partners from './components/Partners'
import NewsArticles from './components/NewsArticles'
import Downloads from './components/Downloads'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <AreasOfFocus />
      <Approach />
      <AtAGlance />
      <Partners />
      <NewsArticles />
      <Downloads />
      <Footer />
    </div>
  )
}

export default App
