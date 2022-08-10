import { Link } from 'react-router-dom';

import ChangeThemeButton from './ChangeThemeButton';

const Header = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/works">Works</Link>

            <ChangeThemeButton />
        </nav>
    );
};

export default Header;
