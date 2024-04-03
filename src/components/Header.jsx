import React, { useState } from 'react';
import '../styles/MobileMenu.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`mobile_menu position-relative ${isOpen ? 'open' : ''}`}>
      <div className="mobile_menu_wrap">
        <div className="mobile_menu_overlay open_mobile_menu" onClick={toggleMenu}></div>
        <div className="mobile_menu_content">
          <div className="m-brand-logo">
            <a className="commonlogo" href="https://themexriver.com/wp/gesto/">
              <img src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/10/logo-main.svg" alt="" title="" />
            </a>
          </div>
          <div className="mobile-search-bar position-relative">
            <form action="https://themexriver.com/wp/gesto/">
              <input type="text" name="s" placeholder="Search Here" value="" />
              <button>
                <i className="fal fa-search"></i>
              </button>
            </form>
          </div>
          <nav className="mobile-main-navigation clearfix ul-li">
            <ul id="menu-onepage-menu-1" className="nav navbar-nav clearfix">
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4741">
                <a href="#home">Home</a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4742">
                <a href="#about">About</a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4743">
                <a href="#service">Service</a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4744">
                <a href="#project">Project</a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4746">
                <a href="#blog">Blog</a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4745">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="mobile_menu_button open_mobile_menu d-lg-none" onClick={toggleMenu}>
        <div className="icon">
          <span className="icon-dot"></span>
          <span className="icon-dot"></span>
          <span className="icon-dot"></span>
          <span className="icon-dot"></span>
          <span className="icon-dot"></span>
          <span className="icon-dot"></span>
          <span className="icon-dot"></span>
          <span className="icon-dot"></span>
          <span className="icon-dot"></span>
        </div>
        <span className="text">menu</span>
      </div>
    </div>
  );
};

export default Header;