import './navbar.styles.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <Link to='/' className='link'>Home</Link>
                <li>Resources</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};


export default Navbar;