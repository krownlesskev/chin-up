import './navbar.styles.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <Link to='/' className='link'>Home</Link>
                {/* Because api is not working right now, we will leave this out. */}
                {/* <li>Excuse Generator</li> */}
                <li>Resources</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};


export default Navbar;