import './NavBar.css';

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navBar">
        <h2>
            <Link to={'/'}>BLOG</Link>
        </h2>
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/new'} className="new_btn">Novo Post</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar