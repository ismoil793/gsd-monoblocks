import React, {useEffect} from 'react';
import MainLayout from "../../components/Layout";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {getSingleOrder} from "../../redux/action/order";
import DateRefactor from "../../helpers/Refactors/DateRefactor";
import PriceRefactor from "../../helpers/Refactors/PriceRefactor";

const OrderDetail = () => {

   const dispatch = useDispatch();
   const order = useSelector(state => state.order.order);
   const router = useRouter();

   useEffect(() => {
      if (router.query.id)
         dispatch(getSingleOrder(router.query.id))
   }, [router]);
   return (
       <MainLayout>
          <section className="section-order">
             <div className="container">
                <div className="row">
                   <div className="col-12 mb-3">
                      <h3 className="account-title">Order details</h3>
                      <div>
                         Order: <strong>#{order.id}</strong>
                      </div>
                      <div>
                         Placed on: <strong><DateRefactor date={order.created_at} dots={true}/></strong>
                      </div>
                      <div>
                         Status: <strong>{order.order_state}</strong>
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


                         {
                            order.subscriptions && order.subscriptions.length ?
                                order.subscriptions.map((subscr, i) => (
                                    <tr key={i}>
                                       <td>
                                          <div className="table-prod-wrap">
                                             <h5 className="mt-3 mb-3"><strong>{subscr.monoblock.name}</strong></h5>
                                             <table className="mb-4">
                                                <thead>
                                                <tr>
                                                   <th>Name</th>
                                                   <th>Value</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                   subscr.components && subscr.components.length ?
                                                       subscr.components.map((comp, idx) => (
                                                           <tr key={++i * idx}>
                                                              <td>{comp.category.name}</td>
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
                                                 price={subscr.total}/><br/>for {subscr.months} month(s)
                                          </strong></td>
                                       <td><span>{subscr.quantity}</span></td>
                                       <td><strong><PriceRefactor price={(subscr.total * subscr.quantity)}/></strong></td>
                                    </tr>
                                ))
                                : null
                         }

                         <tr>
                            <td><strong>Total:</strong></td>
                            <td></td>
                            <td></td>
                            <td><strong><PriceRefactor price={order.total}/></strong></td>
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