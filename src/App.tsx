import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Discography from './components/Discography'
import About from './components/About'
import Tour from './components/Tour'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Discography />
        <About />
        <Tour />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
