import './App.css'
import { FaHome, FaFire, FaListAlt, FaFolder, FaUserCircle } from 'react-icons/fa';


function Sidebar() {
  return (
    <div className="sidebar">  
      <h2>MyTube</h2>  
      <nav className="sidebar-links">  
        <a href="/" className="sidebar-link"><FaHome /> Home</a>  
        <a href="/trending" className="sidebar-link"><FaFire /> Trending</a>  
        <a href="/subscriptions" className="sidebar-link"><FaListAlt /> Subscriptions</a>  
        <a href="/library" className="sidebar-link"><FaFolder /> Library</a>  
        <a href="/profile" className="sidebar-link"><FaUserCircle /> Profile</a>  
        <hr />  
        <h3>Categories</h3>  
        <a href="/music" className="sidebar-link">🎶 Music</a>  
        <a href="/sports" className="sidebar-link">🏀 Sports</a>  
        <a href="/news" className="sidebar-link">📰 News</a>  
        <a href="/gaming" className="sidebar-link">🎮 Gaming</a>  
        <hr />  
        <h3>More</h3>  
        <a href="/about" className="sidebar-link">📖 About</a>  
        <a href="/contact" className="sidebar-link">✉️ Contact</a>  
        <a href="/help" className="sidebar-link">❓ Help</a>  
      </nav>  
      </div>
  )
}

export default Sidebar

