import'../styles/Header.css';
import { SlPaperPlane } from "react-icons/sl";
import { FaPhoneAlt } from "react-icons/fa";

function Header (){
    return (
       <header className="header">
      <div className="header-top">
        
        <div className="header-contact">
          <span className="header-contact-icon">
            <SlPaperPlane />
          </span>
          <p className="header-contact-text">info@horseclub.com</p>
        </div>
      

        
        <div className="logo">
          <img src="./src/assets/images/horse.png" alt="logo" width="40px" />
          <p className="logo-text">horse club</p>
        </div>
        

        
        <div className="header-contact">
          <p className="header-contact-text">+254 793534060</p>
          <span className="header-contact-icon">
            <FaPhoneAlt />
          </span>
        </div>
      
      </div>
      <div className="header-bottom">
        <nav>
          <ul className="nav-list">
            <li className="nav-list-item">
              <a href="#home" className="nav-list-item-link">home</a>
            </li>
            <li className="nav-list-item">
              <a href="#about" className  ="nav-list-item-link">about us</a>
            </li>
            <li className="nav-list-item">
              <a href="#services" className ="nav-list-item-link">services</a>
            </li>
            <li className="nav-list-item">
              <a href="#reasons" className="nav-list-item-link">why us</a>
            </li>
            <li className="nav-list-item">
              <a href="#team" className="nav-list-item-link">team</a>
            </li>
            <li className="nav-list-item">
              <a href="#blog" className="nav-list-item-link">blog</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>


    )
}

export default Header;