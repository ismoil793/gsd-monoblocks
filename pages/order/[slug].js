import React from 'react';
import MainLayout from "../../components/Layout";

const OrderDetail = () => {


   return (
       <MainLayout>
          <section className="section-order">
             <div className="container">
                <div className="row">
                   <div className="col-12 mb-3">
                      <h3 className="account-title">Order details</h3>
                      <div>
                         Order: <strong>#003</strong>
                      </div>
                      <div>
                         Placed on: <strong>08.10.2020</strong>
                      </div>
                      <div>
                         Status: <strong>Processing</strong>
                      </div>
                   </div>
                   <div className="col-12 mobile-overflow">
                      <table className="table-orange">
                         <thead>
                         <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                         </tr>
                         </thead>
                         <tbody>
                         <tr>
                            <td>
                               <div className="table-prod-wrap">
                                  <h5 className="mt-3 mb-3"><strong>AVTECH X5(Black) All-in-One PC</strong></h5>
                                  <table className="mb-4">
                                     <thead>
                                     <tr>
                                        <th>Name</th>
                                        <th>Value</th>
                                        <th>Amount</th>
                                     </tr>
                                     </thead>
                                     <tbody>
                                     <tr>
                                        <td>CPU</td>
                                        <td>Intel Pentium DualCore G5420 - 3.8 GHz, 4M Intel Pentium DualCore G5420 -
                                           3.8 GHz, 4M Intel Pentium DualCore G5420 - 3.8 GHz, 4M
                                        </td>
                                        <td>€ 50.00</td>
                                     </tr>
                                     <tr>
                                        <td>RAM</td>
                                        <td>Intel Pentium DualCore G5420 - 3.8 GHz, 4M
                                        </td>
                                        <td>€ 50.00</td>
                                     </tr>
                                     <tr>
                                        <td>HDD/SSD</td>
                                        <td>Intel Pentium DualCore G5420 - 3.8 GHz, 4M
                                        </td>
                                        <td>€ 50.00</td>
                                     </tr>
                                     <tr>
                                        <td>Graphic Card</td>
                                        <td>Intel Pentium DualCore G5420 - 3.8 GHz, 4M
                                        </td>
                                        <td>€ 50.00</td>
                                     </tr>
                                     <tr>
                                        <td>Keyboard and mouse</td>
                                        <td>Intel Pentium DualCore G5420 - 3.8 GHz, 4M
                                        </td>
                                        <td>€ 50.00</td>
                                     </tr>
                                     <tr>
                                        <td>Barebone</td>
                                        <td>Intel Pentium DualCore G5420 - 3.8 GHz, 4M
                                        </td>
                                        <td>€ 50.00</td>
                                     </tr>
                                     <tr>
                                        <td><strong>Total</strong></td>
                                        <td></td>
                                        <td><strong>€ 368.00</strong></td>
                                     </tr>
                                     </tbody>
                                  </table>
                               </div>
                            </td>
                            <td><strong>368.00 €</strong></td>
                            <td><span>1</span></td>
                            <td><strong>368.00 €</strong></td>
                         </tr>
                         </tbody>
                      </table>
                   </div>
                </div>
             </div>
          </section>
       </MainLayout>
   );
};

export default OrderDetail;