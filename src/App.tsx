import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Multiverse from './components/Multiverse'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Multiverse />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App