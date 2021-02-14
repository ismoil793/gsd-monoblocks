import React, {useEffect, useState} from 'react';
import HeaderTopContainer from '../../components/Layout/Header/HeaderTop';
import Footer from '../../components/Layout/Footer/index';
import CustomNavbar from '../../components/Layout/Navbar';
import {Select, Pagination} from 'antd';
import {
   Col,
   Row
} from 'react-bootstrap';
import Slider from "react-slick";
import CustomCard from '../../components/Layout/Cards/Card';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../redux/action';
import MainLayout from "../../components/Layout";
import {GrNext, GrPrevious} from 'react-icons/gr'
import {BsDot} from 'react-icons/bs'
import ProductsWrap from "../../components/Products";

export async function getStaticProps() {
   const response = await fetch('https://apigsd.rrpo.uz/api/monoblocks?page=1&per_page=6', {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json'
      },
   });
   const monoblocks = await response.json();
   return {
      props: {
         monoblocks: monoblocks ? monoblocks : [],
      }
   }
}

const Home = ({monoblocks}) => {
   const dispatch = useDispatch();
   const monoblockTable = useSelector((state) => state.handleHomePage);

   const [deviceWidth, setDeviceWidth] = useState(0);

   useEffect(() => {
      setDeviceWidth(window.innerWidth)
   }, []);

   useEffect(() => {
      dispatch(actions.getMonoblocksSuccess(monoblocks));
   }, [monoblocks]);


   const onChange = (page) => {
      dispatch(actions.setPage(page));
      dispatch(actions.getMonoblocks({page, per_page: 6}));
   }

   const settings = {
      autoplay: true,
      infinite: true,
      arrows: deviceWidth > 769,
      accessibility: true,
      autoplaySpeed: 5000,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <GrNext/>,
      prevArrow: <GrPrevious/>,
      dots: true
   };

   return (
       <MainLayout>

          <div className="container">
             <div className="row">
                <div className="col-12">

                   <Slider {...settings} className="homepage-banner">
                      <img className="banner-img" src="/static/img/banner1.png" alt="banner 1"/>
                      <img className="banner-img" src="/static/img/banner1.png" alt="banner 1"/>
                      <img className="banner-img" src="/static/img/banner1.png" alt="banner 1"/>
                   </Slider>

                </div>
             </div>
          </div>


          <div className="container recommended-monoblocks">
             <div className="row">

                <div className="col-12">
                   <h3 className="text-center products-title">Our Products</h3>
                </div>

                <div className="col-12">
                   <div className="row">
                      {
                         monoblockTable.monoblockList && monoblockTable.monoblockList.length ?
                          <ProductsWrap
                              products={monoblockTable.monoblockList}
                              current={monoblockTable.monoblockCurrentPage}
                              total={monoblockTable.monoblockTotal}
                              onChange={onChange}
                          />
                          : null
                      }
                   </div>
                </div>
             </div>




             <div className="container">
                <div className="row">
                   <div className="col-12">
                      <div className="about-block">
                         <h3 className="text-center products-title">About Us</h3>
                         <p>
                            Global Smart Distribution Company was founded in 2018 in Riga, Latvia. GSD is in the
                            international business of
                            distribution and we help top-managers of these organizations to do their business more
                            effective and efficient.
                         </p>

                         <p>
                            The partnership with the top manufacturers allows us to offer the most up-to-date products
                            and
                            solutions of our
                            suppliers.
                         </p>

                         <p>
                            We offer a wide range of products, expand capabilities and provide complete solutions to our
                            partners.
                         </p>

                         <p>
                            We can promise – choosing to work wtih us you will gain stability, lasting partnership and
                            smooth work
                            processes.
                         </p>

                         <p>
                            Global Smart Distribution is an official representative of AVTECH, LEGRAND & LANDE
                            companies.
                         </p>
                      </div>
                   </div>
                </div>
             </div>


          </div>
       </MainLayout>
   );
};


export default Home;
