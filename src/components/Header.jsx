import { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function Header() {

    const [isScrolled, setScrolled] = useState(false);

    // État pour gérer l'affichage du menu mobile
    const [showMenu, setShowMenu] = useState(false);    

    // Fonction pour basculer l'affichage du menu mobile
    const handleMenu = () => {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        let timeoutId;
    
        const handleScroll = () => {
          setScrolled(true);
          clearTimeout(timeoutId);
    
          timeoutId = setTimeout(() => {
            setScrolled(false);
          }, 2000); // Ajustez la durée selon vos préférences
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          clearTimeout(timeoutId);
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);    

    return (
        <header id='header' className={`header ${isScrolled ? 'header_hidden' : 'header_visible'}`}>
        <nav className='header_nav flux'>
            <Link className='header_logo' to='/'>
            <p><span className="magenta">[ </span><span className="cyan">Portfolio</span><span className="magenta"> ]</span></p>
            </Link>
            <div className={`mobile_header_menu-button ${showMenu ? 'close' : ''}`} onClick={handleMenu}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.9912 22.7422C18.9746 22.7422 23.0879 18.6289 23.0879 13.6543C23.0879 8.67969 18.9658 4.56641 13.9824 4.56641C9.00781 4.56641 4.90332 8.67969 4.90332 13.6543C4.90332 18.6289 9.0166 22.7422 13.9912 22.7422ZM14.9756 16.5459C14.3779 17.1787 13.6133 17.1787 13.0156 16.5459L9.52637 12.8281C9.21875 12.5029 9.20996 12.0195 9.49121 11.7295C9.81641 11.4043 10.3174 11.4043 10.6162 11.7207L14 15.3154L17.3838 11.7207C17.6738 11.4043 18.166 11.4131 18.5 11.7295C18.79 12.0107 18.7812 12.5029 18.4648 12.8281L14.9756 16.5459Z"/>
              </svg>
            </div>
            <div className={`header_menu ${showMenu ? 'show' : 'hide'}`}>
            <ul className='header_menu-list'>
                <li className='header_menu-item'><Link className='header_menu-link' to='/' onClick={handleMenu}>hOme</Link></li>
                <li className='header_menu-item'><Link className='header_menu-link' to='/#conception' onClick={handleMenu}>cOnception</Link></li>
                <li className='header_menu-item'><Link className='header_menu-link' to='/#projects' onClick={handleMenu}>prOjets</Link></li>
                <li className='header_menu-item'><a className='header_menu-link' href='/#contact' onClick={handleMenu}>say hellO!</a></li> 
            </ul>
            </div>        
        </nav>
        </header>
    );
}

export default Header;