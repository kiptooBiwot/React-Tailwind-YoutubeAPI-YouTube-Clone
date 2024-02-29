import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/home'
import Video from './pages/video/video'
import { useState } from 'react'

const App = () => {
  const [sidebar, setSidebar] = useState(true)
  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />}></Route>
        <Route path="/video/:categoryId/:videoId" element={<Video />}></Route>
      </Routes>
    </div>
  )
}
export default App
