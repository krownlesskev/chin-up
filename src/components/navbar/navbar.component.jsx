import './navbar.styles.scss';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li className='nav-home'>Home</li>
                {/* Because api is not working right now, we will leave this out. */}
                {/* <li>Excuse Generator</li> */}
                <li>Resources</li>
                <li>About</li>
                <li>Contact Me</li>
            </ul>
        </nav>
    );
};


export default Navbar;