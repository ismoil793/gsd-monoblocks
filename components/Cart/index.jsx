import {InputNumber} from 'antd';
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import {MdAdd, MdRemove} from 'react-icons/md'
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {getCart, minusCartItem, plusCartItem, removeFromCart} from "../../redux/action/cart";
import {useEffect} from "react";
import {userInfo} from "../../redux/action/user";
import {notifyWarn} from "../../helpers/NotifyBtn";
import Cookies from "universal-cookie";
import PriceRefactor from "../../helpers/Refactors/PriceRefactor";

const onChange = (value) => {
   console.log('value: ', value);
};

const Cart = ({checkout = false}) => {

   const cookies = new Cookies();
   const cart = useSelector(state => state.cart);
   const user = useSelector(state => state.user);
   const router = useRouter();
   const dispatch = useDispatch();
   const cartItems = cart.cartItems.subscriptions;

   useEffect(() => {
      if (!user.info.id && cookies.get('access_token')) {
         dispatch(userInfo())
      }
   }, []);

   const handleCartActions = async (type, id) => {
      switch (type) {
         case 'decrease':
            await dispatch(minusCartItem(id));
            break;
         case 'increase':
            await dispatch(plusCartItem(id));
            break;
         case 'delete':
            await dispatch(removeFromCart(id));
            break;
      }
      dispatch(getCart())
   };

   const handleCheckoutButton = () => {
      if (user.info.id)
         router.push('/checkout');
      else {
         notifyWarn("Only registered users can place an order!", 3000);
         router.push('/login')
      }
   };

   return (
       <section className="section-cart">
          <div className="container">
             <div className="row">
                <div className="col-12 mobile-overflow">
                   <div className="account-title">
                      <h3>My cart</h3>
                   </div>
                   {
                      cart.cartItems.total ?
                          <table className="table-orange">
                             <thead>
                             <tr>
                                <th className="product-name">Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                {
                                   !checkout ? <th></th> : null
                                }
                             </tr>
                             </thead>
                             <tbody>
                             {
                                cartItems && cartItems.length ?
                                    cartItems.map((item, i) => (
                                        <tr key={i}>
                                           <td>
                                              <div className="table-prod-wrap">
                                                 <h5 className="mt-3 mb-3"><strong>{item.monoblock.name}</strong></h5>
                                                 <table className="mb-4">
                                                    <thead>
                                                    <tr>
                                                       <th>Name</th>
                                                       <th>Value</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                       item.components && item.components.length ?
                                                           item.components.map((val, idx) => (
                                                               <tr key={(i + 1) * (idx + 1)}>
                                                                  <td>{val.category.name}</td>
                                                                  <td>{val.name}</td>
                                                               </tr>
                                                           ))
                                                           : null
                                                    }

                                                    </tbody>
                                                 </table>
                                              </div>
                                           </td>
                                           <td><PriceRefactor price={item.total} /> <br/> for {item.months}month(s)</td>
                                           <td className="add-delete-prod noselect">
                                              {
                                                 !checkout ?
                                                     <MdRemove onClick={() => handleCartActions('decrease', item.id)}/>
                                                     : null
                                              }
                                              <InputNumber
                                                  className="price-change-input noselect"
                                                  readOnly={true}
                                                  min={1}
                                                  value={item.quantity}
                                                  defaultValue={item.quantity}
                                                  onChange={onChange}
                                              />
                                              {
                                                 !checkout ?
                                                     <MdAdd onClick={() => handleCartActions('increase', item.id)}/>
                                                     : null
                                              }
                                           </td>
                                           <td><PriceRefactor price={item.total * item.quantity} /></td>
                                           {
                                              !checkout ?
                                                  <td>
                                                     <OverlayTrigger
                                                         placement={'bottom'}
                                                         overlay={
                                                            <Tooltip id={`tooltip-delete`}>
                                                               Delete from cart
                                                            </Tooltip>
                                                         }
                                                     >
                                                        <img
                                                            onClick={() => handleCartActions('delete', item.id)}
                                                            style={{cursor: 'pointer'}}
                                                            src="/static/img/remove.png" width="25"
                                                            alt="removeButton"
                                                        />
                                                     </OverlayTrigger>
                                                  </td>
                                                  : null
                                           }
                                        </tr>
                                    ))
                                    : null
                             }
                             </tbody>
                          </table>
                          :
                          <div className="mt-5 pt-5 mb-3">
                             <h4>Your cart is empty</h4>
                          </div>
                   }
                </div>


                <div className="col-12">
                   <div className="cartTotalWrapper" style={cart.cartItems.total ? {} : {justifyContent: 'flex-start'}}>
                      <div className={`text-right mt-4`} style={{fontSize: 18}}>

                         {
                            !checkout && cart.cartItems.total ?
                                <>
                                   <div><strong>Cart totals:</strong></div>
                                   <p>Total:&nbsp;
                                      <strong><PriceRefactor price={cart.cartItems.total} /></strong>
                                   </p>
                                   <button
                                       onClick={handleCheckoutButton}
                                       className="btn-gsd-orange"
                                       style={{fontSize: 16}}
                                   >
                                      Proceed to checkout
                                   </button>
                                </>
                                :
                                !checkout ?
                                    <button
                                        onClick={() => router.push('/monoblock')}
                                        className="btn-gsd-orange"
                                        style={{fontSize: 16}}
                                    >
                                       Shop now
                                    </button> : null
                         }
                      </div>
                   </div>
                </div>


             </div>
          </div>
       </section>
   );
};

export default Cart;
