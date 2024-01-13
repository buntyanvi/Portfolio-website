import React from 'react';
import styles from './Navbar.module.css';
import { useState } from 'react';
import menuIcon from '../../../assets/nav/menuIcon.png'; 
import closeIcon from '../../../assets/nav/closeIcon.png';
import { getImageUrl } from '../../utils';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const handleMenuItemClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href='/'>Portfolio</a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={menuOpen ? closeIcon : menuIcon}
                    alt='menu-btn'
                    onClick={() => setMenuOpen(!menuOpen)}
                />
               <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
    <li><a href='#about' onClick={handleMenuItemClick}>About</a></li>
    <li><a href='#experience' onClick={handleMenuItemClick}>Experience</a></li>
    <li><a href='#projects' onClick={handleMenuItemClick}>Projects</a></li>
    <li><a href='#contact' onClick={handleMenuItemClick}>Contact</a></li>
</ul>

            </div>
        </nav>
    );
}

export default Navbar;
