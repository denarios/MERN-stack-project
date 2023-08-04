import './navigation.css'
const Navigationbar=()=>{
return(
    <>
      {/* Navigation Bar */}
      <header className="header">
      <nav className="navbar">
        {/* <h1>Online Judge</h1> */}
        <div>
            <h1 className="logo">My Website</h1>
          </div>
          <div>
            <ul className="nav-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
    </header>
      </>
)
}
export default Navigationbar;