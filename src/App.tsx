import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Multiverse from './components/Multiverse'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

function App() {
  return (
    <div className="App">
      <ScrollProgress />
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