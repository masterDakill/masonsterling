import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Discography from './components/Discography'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Discography />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
