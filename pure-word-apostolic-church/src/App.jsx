import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import MainLayout from './components/layout/MainLayout'
import Home from './components/pages/Home/Home'
import About from './components/pages/About/About'
import Events from './components/pages/Events/Events'
import Gallery from './components/pages/Gallery/Gallery'
import Contact from './components/pages/Contact/Contact'
import Admin from './components/pages/Admin/Admin'
import { EventProvider } from './context/EventContext'
import { GalleryProvider } from './context/GalleryContext'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <EventProvider>
      <GalleryProvider>
        <MainLayout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/*" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </MainLayout>
      </GalleryProvider>
    </EventProvider>
  )
}

export default App
