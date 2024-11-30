import "../css/Navbar.css";
import Link from "./Link.jsx";

function Navbar() {
    return (
        <ul>
            <li><Link>Home</Link></li>  
            <li><Link>About</Link></li>  
            <li><Link>Shop</Link></li>  
            <li><Link>Contact</Link></li>  
        </ul>
    )
}

export default Navbar;
