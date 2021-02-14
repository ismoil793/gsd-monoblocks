/* import { Container } from 'react-bootstrap'; */
import Link from 'next/link';
import Image from 'next/image';
import DownArrow from '../../../static/img/down-arrow.png';

const CustomNavbar = () => {
   return (
       <div style={{padding: '15px 0', borderBottom: '1px solid #ddd'}}>
          <div className="Container">
             <div className="Inner-Wrapper">
                <div className="Site-Branding">
                   <Link href="/"
                         className="Custom-Logo-Link">
                      <a>
                         <Image
                             src="/static/img/croppedlogo.png"
                             alt="GSD "
                             width="100"
                             height="72"
                         />
                      </a>
                   </Link>
                </div>
                <div className="Main-Navbar">
                   <nav className="Main-Navigation">
                      <ul className="Primary-Menu">
                         <li className="Root-Menu-li">Main</li>
                         <li className="Dropdown Root-Menu-li">
                            About us <img className="dropdown-icon" src={DownArrow} alt="arrow"/>
                            <ul className="Dropdown-Content">
                               <li><a>Company Profile</a></li>
                               <li><a>Mission and Vision</a></li>
                               <li><a>History</a></li>
                               <li><a>Our presence</a></li>
                               <li><a>Career</a></li>
                            </ul>
                         </li>
                         <li className="Dropdown Dropdown Root-Menu-li">
                            Solutions <img className="dropdown-icon" src={DownArrow} alt="arrow"/>
                            <ul className="Dropdown-Content">
                               <li>hello</li>
                               <li>hello</li>
                               <li>hello</li>
                            </ul>
                         </li>
                         <li className="Dropdown Dropdown Root-Menu-li">
                            Services <img className="dropdown-icon" src={DownArrow} alt="arrow"/>
                            <ul className="Dropdown-Content">
                               <li>hello</li>
                               <li>hello</li>
                               <li>hello</li>
                            </ul>
                         </li>
                         <li className="Dropdown Root-Menu-li">Vendors</li>
                         <li className="Dropdown Root-Menu-li">Newsroom</li>
                         <li className="Dropdown Root-Menu-li">Contacts</li>
                      </ul>
                   </nav>
                </div>
             </div>
          </div>
       </div>
   );
}

export default CustomNavbar;