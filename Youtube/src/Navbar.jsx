import './App.css'
// import Nav from './Nav'



function Navbar() {
  return (
    <>
    <header className="navbar">  
      <div className="logo">MyTube</div>  
      <nav className="nav-links">  
        <a href="/" className="nav-link">Home</a>  
        <a href="/trending" className="nav-link">Trending</a>  
        <a href="/subscriptions" className="nav-link">Subscriptions</a>  
        <a href="/library" className="nav-link">Library</a>  
      </nav>  
      <div className="search-area">  
        <input type="text" placeholder="Search" className="search-input" />  
        <button className="search-button">Search</button>  
      </div>  
      <div className="profile-icon">👤</div>  
    </header>  
    
    </>
  )
  
}

export default Navbar
