import {InputNumber, Button} from 'antd';
import removeButton from '../../static/img/remove.png';
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import {MdAdd, MdRemove} from 'react-icons/md'
import {useRouter} from "next/router";

const onChange = (value) => {
   console.log('value: ', value);
}

const Cart = () => {

   const router = useRouter();

   return (
       <section className="section-cart">
          <div className="container">
             <div className="row">
                <div className="col-12 mobile-overflow">
                   <div className="account-title">
                      <h3>My cart</h3>
                   </div>
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
                      <tr>
                         <td>
                            <div className="table-prod-wrap">
                               <h5 className="mt-3 mb-3"><strong>AVTECH X5(Black) All-in-One PC</strong></h5>
                               <table className="mb-4">
                                  <thead>
                                  <tr>
                                     <th>Name</th>
                                     <th>Value</th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  <tr>
                                     <td>CPU</td>
                                     <td>Intel core i 7900K</td>
                                  </tr>
                                  <tr>
                                     <td>GPU</td>
                                     <td>Nvidia GTX 1050 2GB</td>
                                  </tr>
                                  <tr>
                                     <td>RAM</td>
                                     <td>Kingston 16GB</td>
                                  </tr>
                                  </tbody>
                               </table>
                            </div>
                         </td>

                         <td>{295}&euro; <br/> for 12month(s)</td>

                         <td className="add-delete-prod noselect">
                            <MdRemove/>
                            <InputNumber
                                className="price-change-input noselect"
                                readOnly={true}
                                min={1} max={10}
                                defaultValue={3}
                                onChange={onChange}
                            />
                            <MdAdd/>
                         </td>
                         <td>885&euro;</td>
                         <td>
                            <OverlayTrigger
                                placement={'bottom'}
                                overlay={
                                   <Tooltip id={`tooltip-delete`}>
                                      Delete from cart
                                   </Tooltip>
                                }
                            >
                               <img style={{cursor: 'pointer'}} src={removeButton} width="25" alt="removeButton"/>
                            </OverlayTrigger>
                         </td>
                      </tr>
                      </tbody>
                   </table>
                </div>


                <div className="col-12">
                   <div className="cartTotalWrapper">
                      <div className="text-right mt-4" style={{fontSize: 18}}>
                         <div><strong>Cart totals:</strong></div>
                         <p>Total: <strong>885&euro;</strong></p>
                         <button
                             onClick={() => router.push('/checkout')}
                             className="btn-gsd-orange"
                             style={{fontSize: 16}}
                         >
                            Proceed to checkout
                         </button>
                      </div>
                   </div>
                </div>


             </div>
          </div>
       </section>
   );
};

export default Cart;
