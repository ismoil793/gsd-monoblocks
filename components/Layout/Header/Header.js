import React, {useEffect, useState} from 'react';
import {HiMenuAlt2} from 'react-icons/hi'
import Link from "next/link";
import Cookies from "universal-cookie";
import uuid from 'uuid'
import {useDispatch, useSelector} from "react-redux";
import {getCart} from "../../../redux/action/cart";
import {userInfo} from "../../../redux/action/user";

const Header = () => {

   const dispatch = useDispatch();
   const cart = useSelector(state => state.cart);
   const user = useSelector(state => state.user);

   useEffect(() => {

      const cookies = new Cookies();
      fetchCart();

      if(!user.info.id && cookies.get('access_token')) {
         dispatch(userInfo())
      }

      const nextYear = new Date();
      nextYear.setFullYear(new Date().getFullYear() + 1);

      cookies.set('device_type', 'web',
          {path: '/', expires: nextYear});
      if(!cookies.get('device_token')) {
         let device_id = uuid.v1();
         cookies.set('device_token', device_id, {
            path: '/', expires: nextYear
         })
      }
   }, []);


   const fetchCart = () => {
      if(!cart.cartItems.id) {
         dispatch(getCart())
      }
   };

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
                               user.info.id ? <Link href="/cabinet?param=orders"><a>My account</a></Link>
                                   : <Link href="/login"><a>Login</a></Link>
                            }
                            <Link href="/cart">
                               <a>My cart <span className="cart-num">{cart.cartCount}</span></a>
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