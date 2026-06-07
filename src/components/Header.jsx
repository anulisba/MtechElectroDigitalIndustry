// Header.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="header-component">
            <div className="header-logo">
                <Link to="/" onClick={() => setMenuOpen(false)}>
                    <img src={logo} alt="logo" />
                </Link>
            </div>

            <div className={`header-navbar ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <a href="#home" onClick={() => setMenuOpen(false)}>
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#about" onClick={() => setMenuOpen(false)}>
                            About Us
                        </a>
                    </li>

                    <li>
                        <a href="#services" onClick={() => setMenuOpen(false)}>
                            Services
                        </a>
                    </li>

                    <li>
                        <a href="#products" onClick={() => setMenuOpen(false)}>
                            Products
                        </a>
                    </li>

                    <li>
                        <a href="#contact" onClick={() => setMenuOpen(false)}>
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>

            {/* Desktop Button */}
            {/* <div className="desktop-only book-btn">
                <button onClick={handlebooknow}>
                    Book an Appointment
                    <div className="book-btn-hover-effect"></div>
                </button>
            </div> */}

            <div className="hamburger-icon" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default Header;
