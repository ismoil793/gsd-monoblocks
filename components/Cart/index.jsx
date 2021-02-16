import {InputNumber, Button} from 'antd';
import removeButton from '../../static/img/remove.png';
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import {MdAdd, MdRemove} from 'react-icons/md'
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import PriceRefactor from "../../helpers/Refactors/PriceRefactor";
import {getCart, minusCartItem, plusCartItem, removeFromCart} from "../../redux/action/cart";

const onChange = (value) => {
   console.log('value: ', value);
};

const Cart = () => {

   const cart = useSelector(state => state.cart);
   const router = useRouter();
   const dispatch = useDispatch();
   const cartItems = cart.cartItems.subscriptions;

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
                                <th></th>
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

                                           <td>&euro;{item.total} <br/> for {item.months}month(s)</td>

                                           <td className="add-delete-prod noselect">

                                              <MdRemove onClick={() => handleCartActions('decrease', item.id)}/>
                                              <InputNumber
                                                  className="price-change-input noselect"
                                                  readOnly={true}
                                                  min={1}
                                                  value={item.quantity}
                                                  defaultValue={item.quantity}
                                                  onChange={onChange}
                                              />
                                              <MdAdd onClick={() => handleCartActions('increase', item.id)}/>
                                           </td>
                                           <td>&euro;{item.total * item.quantity}</td>
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
                                                     src={removeButton} width="25"
                                                     alt="removeButton"
                                                 />
                                              </OverlayTrigger>
                                           </td>
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
                   <div className="cartTotalWrapper">
                      <div className="text-right mt-4" style={{fontSize: 18}}>

                         {
                            cart.cartItems.total ?
                                <>
                                   <div><strong>Cart totals:</strong></div>
                                   <p>Total:&nbsp;
                                      <strong>&euro;{cart.cartItems.total}</strong>
                                   </p>
                                   <button
                                       onClick={() => router.push('/checkout')}
                                       className="btn-gsd-orange"
                                       style={{fontSize: 16}}
                                   >
                                      Proceed to checkout
                                   </button>
                                </>
                                :
                                <button
                                    onClick={() => router.push('/monoblock')}
                                    className="btn-gsd-orange"
                                    style={{fontSize: 16}}
                                >
                                   Shop now
                                </button>
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
