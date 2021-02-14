import React, {useEffect, useState} from 'react';
import {HiMenuAlt2} from 'react-icons/hi'
import Link from "next/link";
import Cookies from "universal-cookie";
import uuid from 'uuid'

const Header = () => {

   const [hasToken, setToken] = useState('');

   useEffect(() => {
      const nextYear = new Date();
      const cookies = new Cookies();
      nextYear.setFullYear(new Date().getFullYear() + 1);

      cookies.set('device_type', 'web',
          {path: '/', expires: nextYear});
      if(!cookies.get('device_token')) {
         let device_id = uuid.v1();
         cookies.set('device_token', device_id, {
            path: '/', expires: nextYear
         })
      }
      if(cookies.get('access_token')) {
         setToken(true)
      }
   }, []);

   return (
       <header>
          <div className="container">
             <div className="row">
                <div className="col-12">

                   <div className="header-top">
                      <Link href="/">
                         <a><img src="/static/img/croppedlogo.png" alt="GSD logo"/></a>
                      </Link>
                      <div className="header-contacts">
                         <div>+371 <span className="gsd-orange">24 889 898</span></div>
                         <p className="text-right">rent@gsdas.eu</p>
                      </div>
                   </div>

                </div>
             </div>
          </div>

          <div className="header-line">
             <div className="container">
                <div className="row">
                   <div className="col-12">
                      <div className="line-navigation">

                         <div className="catalog-btn">
                            <Link href="/monoblock">
                               <a>
                                  <HiMenuAlt2/> AIO PC Rent
                               </a>
                            </Link>
                         </div>

                         <div className="nav-right">
                            {
                               hasToken ? <Link href="/cabinet?param=orders"><a>My account</a></Link>
                                   : <Link href="/login"><a>Login</a></Link>
                            }
                            <Link href="/cart">
                               <a>My cart <span className="cart-num">2</span></a>
                            </Link>
                         </div>

                      </div>
                   </div>
                </div>
             </div>
          </div>

       </header>
   );
};

export default Header;