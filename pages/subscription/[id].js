import React, {useEffect, useState} from 'react';
import {clearSubscription, getSingleSubscription} from "../../redux/action/subscription";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import MainLayout from "../../components/Layout";
import DateRefactor from "../../helpers/Refactors/DateRefactor";
import PriceRefactor from "../../helpers/Refactors/PriceRefactor";
import {Spin} from "antd";

const SubscriptionDetail = () => {

   const [loading, setLoading] = useState(true)
   const dispatch = useDispatch();
   const subscription = useSelector(state => state.subscription.subscription);
   const router = useRouter();


   useEffect(async () => {
      if (+router.query.id) {
         await dispatch(clearSubscription())
         await dispatch(getSingleSubscription(router.query.id))
         setLoading(false)
      }
   }, [router]);

   return (
       <MainLayout>
          <section className="section-order">
             <div className="container">
                {
                   loading ?
                       <div className="my-ant-spinner">
                          <Spin size="large"/>
                       </div>
                       :
                       <div className="row">
                          <div className="col-12 mb-3">
                             <h3 className="account-title subscr">Subscription details</h3>
                             <div>
                                Subscription: <strong>#{subscription.id}</strong>
                             </div>
                             <div>
                                {/*Placed on: <strong><DateRefactor date={order.created_at} dots={true}/></strong>*/}
                             </div>
                             <div className="row">
                                <div className="col-lg-8">
                                   <div className="subscription-price-plans">
                                      {
                                         subscription.payments && subscription.payments.length ?
                                             subscription.payments.map((item, i) => (
                                                 <div className="price-plan" key={i}>
                                                    <span className="gsd-orange"><PriceRefactor price={item}/></span>
                                                    <p>
                                                       {i + 1} {i === 0 ? 'month' : 'month'}
                                                       <br/>
                                                       {
                                                          subscription.months_paid[i] === 0 ?
                                                              <em className="payment-stat red">not paid</em>
                                                              : <em className={"payment-stat green"}>paid</em>
                                                       }
                                                    </p>
                                                 </div>
                                             ))
                                             : null
                                      }
                                   </div>
                                </div>
                                <div className="col-lg-4">
                                   <div className="position-relative">
                               <span
                                   style={{position: 'absolute', bottom: '46%'}}
                               >
                                  x{subscription.quantity}
                               </span>
                                      {
                                         subscription.monoblock ?
                                             <img
                                                 style={{display: 'block', width: '100%', marginLeft: 'auto'}}
                                                 src={subscription.monoblock.image}
                                                 alt={subscription.monoblock.name}
                                             />
                                             : null
                                      }
                                   </div>
                                </div>
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
                                         <h5 className="mt-3 mb-3">
                                            <strong>
                                               {subscription.monoblock ? subscription.monoblock.name : null}
                                            </strong>
                                         </h5>
                                         <table className="mb-4">
                                            <thead>
                                            <tr>
                                               <th>Name</th>
                                               <th>Value</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                               subscription.components && subscription.components.length ?
                                                   subscription.components.map((comp, idx) => (
                                                       <tr key={idx}>
                                                          <td>{comp.name}</td>
                                                          <td>{comp.name}</td>
                                                       </tr>
                                                   ))
                                                   : null
                                            }
                                            </tbody>
                                         </table>
                                      </div>
                                   </td>
                                   <td>
                                      <strong>
                                         <PriceRefactor
                                             price={subscription.total}/><br/>for {subscription.months} month(s)
                                      </strong></td>
                                   <td><span>{subscription.quantity}</span></td>
                                   <td><strong><PriceRefactor
                                       price={(subscription.total * subscription.quantity)}/></strong>
                                   </td>
                                </tr>


                                <tr>
                                   <td><strong>Total:</strong></td>
                                   <td></td>
                                   <td></td>
                                   <td><strong><PriceRefactor
                                       price={subscription.total * subscription.quantity}/></strong>
                                   </td>
                                </tr>

                                </tbody>
                             </table>
                          </div>
                       </div>
                }
             </div>
          </section>
       </MainLayout>
   );
};

export default SubscriptionDetail;