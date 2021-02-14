import React from 'react';
import MainLayout from "../components/Layout";

const Contact = () => {
   return (
       <MainLayout>
          <div className="about-section">
             <div className="container">
                <div className="row">
                   <div className="col-12">
                      <h2 className="text-center products-title">Contacts</h2>
                   </div>
                   <div className="col-6">
                      <p>Global Smart Distribution Company was founded in 2018 in Riga, Latvia. GSD is in the
                         international business of distribution and we help top-managers of these organizations to do
                         their business more effective and efficient.</p><p>The partnership with the top
                      manufacturers allows us to offer the most up-to-date products and solutions of our
                      suppliers.</p><p>We offer a wide range of products, expand capabilities and provide complete
                      solutions to our partners.</p><p>We can promise – choosing to work wtih us you will gain
                      stability, lasting partnership and smooth work processes.</p><p>Global Smart Distribution is an
                      official representative of AVTECH, LEGRAND &amp; LANDE companies.</p>
                   </div>
                   <div className="col-6">
                      <p className="text-center pt-3 pb-3 mb-5" style={{backgroundColor: '#f5f5f5'}}>
                         <h5><strong>Riga, Latvija</strong></h5>
                         <p><strong>Address:</strong> Latvija, Riga, Ernesta Birznieka-Upisa iela 20A-4</p>
                         <p><strong>Phone:</strong> +371 24 889 898</p>
                      </p>
                      <p className="text-center pt-3 pb-3" style={{backgroundColor: '#f5f5f5'}}>
                         <h5><strong>Tashkent, Uzbekistan</strong></h5>
                         <p><strong>Address:</strong> Uzbekistan, Tashkent, Abdulla Qahhor st., 49A</p>
                         <p><strong>Phone:</strong> +371 24 889 898</p>
                      </p>
                   </div>
                </div>
             </div>
          </div>
       </MainLayout>
   );
};

export default Contact;