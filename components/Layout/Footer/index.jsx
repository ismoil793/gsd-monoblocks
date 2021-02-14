import {
   Col,
   Row,
   /* Container */
} from 'react-bootstrap';
import Link from "next/link";
import {useSelector, useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {httpGet} from "../../../api";
import {FaInstagram, FaFacebook} from 'react-icons/fa'
import {footerLinks} from "../../../redux/action/footer";

const Footer = () => {

   const [products, setProducts] = useState([]);

   const footer = useSelector(state => state.footer);
   const dispatch = useDispatch();

   useEffect(() => {
      if(!footer.links.length) {
         dispatch(footerLinks())
      }
   }, []);

   return (
       <div className="Footer">
          <div className="Footer-Menu-Container">
             <div className="container">
                <Row>
                   <div className="col">
                      <h3 className="Footer-Menu-Header">Products</h3>
                      <div>
                         <ul className="Footer-Menu-List">
                            {
                               footer.links.length ?
                                   footer.links.map((prod, i) => (
                                       <li key={i}>
                                          <Link
                                              href={{pathname: '/monoblock/[slug]'}}
                                              as={`/monoblock/${prod.slug}`}>
                                             <a>{prod.name}</a>
                                          </Link>
                                       </li>
                                   ))
                                   : null
                            }
                            <li>
                               <Link href={'/monoblock'}><a>More AIO...</a></Link>
                            </li>
                         </ul>
                      </div>
                   </div>
                   <div className="col">
                      <h3 className="Footer-Menu-Header">Information</h3>
                      <div>
                         <ul className="Footer-Menu-List">
                            <li>
                               <Link href={'/about'}><a>About us</a></Link>
                            </li>
                            <li>
                               <Link href={'/contact'}><a>Contacts</a></Link>
                            </li>
                         </ul>
                      </div>
                   </div>
                   <div className="col">
                      <div>
                         <ul className="Footer-Menu-List">
                            <p>
                               <span className="Prefix">+371</span>
                               <span className="Number-Ph">24 889 898</span>
                            </p>
                            <p>rent@gsdas.eu</p>
                            <div className="text-right">We are in social:</div>
                            <p className="footer-socials">
                               <a href="https://google.com" target="_blank">
                                  <FaFacebook/>
                               </a>
                               <a href="https://google.com" target="_blank">
                                  <FaInstagram/>
                               </a>
                            </p>
                         </ul>
                      </div>
                   </div>
                </Row>
             </div>
          </div>
          <footer className="Footer-Bottom">
             <div className="container">
                <div className="row">
                   <div className="col-12">
                      <div className="Footer-Bottom-Inner">
                         <p>Global Smart Distribution<span style={{fontFamily: 'sans-serif'}}>©</span> All rights
                            reserved.</p>
                      </div>
                   </div>
                </div>
             </div>
          </footer>
       </div>
   )
};

export default Footer;
