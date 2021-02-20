import React from 'react';
import MainLayout from "../components/Layout";

const About = () => {
   return (
       <MainLayout>
          <div className="about-section">
             <div className="container">
                <div className="row">
                   <div className="col-12">
                      <h2 className="text-center products-title">About us</h2>
                   </div>
                   <div className="col-lg-6 mb-4">
                      <img src="/static/img/gsd-big.jpg" alt="GSD"/>
                   </div>
                   <div className="col-lg-6">
                      <div>
                         <p>Global Smart Distribution Company was founded in 2018 in Riga, Latvia. GSD is in the
                            international business of distribution and we help top-managers of these organizations to do
                            their business more effective and efficient.</p><p>The partnership with the top
                         manufacturers allows us to offer the most up-to-date products and solutions of our
                         suppliers.</p><p>We offer a wide range of products, expand capabilities and provide complete
                         solutions to our partners.</p><p>We can promise – choosing to work wtih us you will gain
                         stability, lasting partnership and smooth work processes.</p><p>Global Smart Distribution is an
                         official representative of AVTECH, LEGRAND &amp; LANDE companies.</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </MainLayout>
   );
};

export default About;