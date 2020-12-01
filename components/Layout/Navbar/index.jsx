import { Container } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

const CustomNavbar = () => {
  return (
    <Container>
      <div className="Inner-Wrapper">
        <div className="Site-Branding">
          <Link href="#">
              <a className="Custom-Logo-Link">
                {/* <Image
                  src="/static/img/croppedlogo.png"
                  alt="Picture of the author"
                /> */}
                <img src="/static/img/croppedlogo.png" />
              </a>
          </Link>
        </div>
        <div className="Main-Navbar">
            <nav className="Main-Navigation">
              <ul className="Primary-Menu">
                <li>Main</li>
                <li>About us</li>
                <li>Solutions</li>
                <li>Services</li>
                <li>Vendors</li>
                <li>Newsroom</li>
                <li>Contacts</li>
              </ul>
            </nav>
        </div>
      </div>
    </Container>
  );
}

export default CustomNavbar;