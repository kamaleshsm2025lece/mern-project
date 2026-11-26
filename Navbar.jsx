import './Navbar.css'

const Navbar = () => {
  return (
    <div className = 'navbar display-block'>
      <ul className = 'nav'>
        <h1 className = 'heading'>frontend</h1>
            <li className = "list">Home</li>
            <li className = "list">About</li>
            <li className = "list">Contact</li>
            <li className = "list">Service</li>
        </ul>
    </div>
  )
}

export default Navbar
