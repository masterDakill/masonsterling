import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Multiverse from './components/Multiverse'
import LyricsVisualized from './components/LyricsVisualized'
import BehindTheIA from './components/BehindTheIA'
import LinktreeSection from './components/LinktreeSection'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import DynamicBackground from './components/DynamicBackground'
import SmoothScrolling from './components/SmoothScrolling'

function App() {
  return (
    <div className="App">
      <DynamicBackground />
      <ScrollProgress />
      <SmoothScrolling />
      <Header />
      <main>
        <Hero />
        <About />
        <Multiverse />
        <LyricsVisualized />
        <BehindTheIA />
        <LinktreeSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App