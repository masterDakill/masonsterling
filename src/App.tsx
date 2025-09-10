import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

// Layout Components
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import DynamicBackground from './components/DynamicBackground'
import SmoothScrolling from './components/SmoothScrolling'

// Page Components
import HomePage from './pages/HomePage'
import EPLovesJourney from './pages/EPLovesJourney'
import SingleDrawnToTheUnknown from './pages/SingleDrawnToTheUnknown'
import SingleMoreThanMyName from './pages/SingleMoreThanMyName'
import MerchPage from './pages/MerchPage'
import NewsletterPage from './pages/NewsletterPage'

function App() {
  return (
    <div className="App">
      <DynamicBackground />
      <ScrollProgress />
      <SmoothScrolling />
      <Header />
      
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<HomePage />} />
        
        {/* Music Routes */}
        <Route path="/music/ep-loves-journey" element={<EPLovesJourney />} />
        <Route path="/single/drawn-to-the-unknown" element={<SingleDrawnToTheUnknown />} />
        <Route path="/single/more-than-my-name" element={<SingleMoreThanMyName />} />
        
        {/* Redirects for smartlinks */}
        <Route path="/go/ep-loves-journey" element={<Navigate to="/music/ep-loves-journey" replace />} />
        
        {/* Shop */}
        <Route path="/merch" element={<MerchPage />} />
        <Route path="/collections/:category" element={<MerchPage />} />
        
        {/* Newsletter */}
        <Route path="/newsletter" element={<NewsletterPage />} />
        
        {/* 404 - Redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App