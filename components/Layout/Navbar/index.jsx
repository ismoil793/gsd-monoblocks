import { Container } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

const CustomNavbar = () => {
  return (
    <Container>
      <div className="Inner-Wrapper">
        <div className="Site-Branding">
              <a href="http://thelongestdomainnameintheworldandthensomeandthensomemoreandmore.uz/" className="Custom-Logo-Link">
                <Image
                  src="/static/img/croppedlogo.png"
                  alt="Picture of the author"
                  width="100"
                  height="72"
                />
               {/*  <img src="/static/img/croppedlogo.png" /> */}
              </a>
        </div>
        {/* <div className="Main-Navbar">
            <nav className="Main-Navigation">
              <ul className="Primary-Menu">
                <li>Main</li>
                <li className="Dropdown">
                  About us
                  <ul className="Dropdown-Content">
                    <li>Company Profile</li>
                    <li>Mission and Vision</li>
                    <li>History</li>
                    <li>Our presence</li>
                    <li>Career</li>
                  </ul>
                 {/*  <div className="DropdownTest">
                    <p>Main</p>
                    <p>Company Profile</p>
                    <p>Services</p>
                    <p>Solutions</p>
                    <p>Career</p>
                  </div> 
                </li>
                <li className="Dropdown">
                  Solutions
                   <ul className="Dropdown-Content">
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                  </ul>
                </li>
                <li className="Dropdown">
                  Services
                   <ul className="Dropdown-Content">
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                  </ul>
                </li>
                <li>Vendors</li>
                <li>Newsroom</li>
                <li>Contacts</li>
              </ul>
            </nav>
        </div> */}
      </div>
    </Container>
  );
}

export default CustomNavbar;