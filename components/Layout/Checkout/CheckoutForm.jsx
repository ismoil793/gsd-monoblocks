import countryList from 'country-list';
import {Button, Form, Input, Select,} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {httpGet} from "../../../api";
import {clearCreatedOrder, createOrder} from "../../../redux/action/order";
import {useRouter} from "next/router";
import {getCart} from "../../../redux/action/cart";

const {Option} = Select;

// const form = Form.useForm();

const CheckoutForm = (props) => {
   const [form] = Form.useForm();

   const dispatch = useDispatch();
   const router = useRouter();
   const user = useSelector(state => state.user);
   const order = useSelector(state => state.order);
   const cart = useSelector(state => state.cart);
   const [countries, setCountries] = useState([]);
   const [cities, setCities] = useState([]);

   const onSearch = (country) => {
      console.log('country: ', country);
   };

   useEffect(() => {
      form.setFieldsValue({
         first_name: user.info.first_name,
         last_name: user.info.last_name,
         phone: user.info.phone,
         org_name: user.info.org_name,
         email: user.info.email,
      });
      httpGet({
         url: '/countries'
      }).then(r => setCountries(r.data.data))
   }, [user]);

   useEffect(() => {
      if(order.orderCreated) {
         router.push('/cabinet?param=orders');
         dispatch(clearCreatedOrder())
      }
   }, [order]);

   const onFinish = async (values) => {
      await dispatch(createOrder(values));
      await dispatch(getCart());
   };

   const handleCountryChange = (val) => {
      httpGet({
         url: `/cities/${val}`
      }).then(r => setCities(r.data.data))
   };

   return (
       <section className="checkout-section">
          <div className="container">
             <div className="row">
                <div className="col-12">
                   <Form
                       labelCol={{
                          span: 24,
                       }}
                       onFinish={onFinish}
                       form={form}
                       /* wrapperCol={{
                         span: 14,
                       }} */
                       // initialValues={{
                       //    first_name: user.info.first_name,
                       //    last_name: user.info.last_name,
                       //    country: 'Latvia',
                       //    org_name: user.info.org_name
                       // }}
                   >
                      <div className="CheckoutFormWrapper">
                         <div>
                            <h3 className={"account-title mb-5"}>Billing details</h3>

                            <div>
                               <Form.Item
                                   label="Name"
                                   name="first_name"
                                   rules={[{
                                      required: true,
                                      message: 'First Name is required',
                                   }]}
                                   // initialValue={user.info.first_name}
                               >
                                  <Input placeholder="First name" autoComplete="off"/>
                               </Form.Item>

                               <Form.Item
                                   label="Surname"
                                   name="last_name"
                                   rules={[{
                                      required: true,
                                      message: 'Last Name is required',
                                   }]}
                               >
                                  <Input placeholder="Last name" autoComplete="nope"/>
                               </Form.Item>

                               <Form.Item
                                   label="Company name"
                                   name="org_name"
                                   rules={[{
                                      required: true,
                                      message: 'Company name is required',
                                   }]}
                               >
                                  <Input autoComplete="off"/>
                               </Form.Item>


                               <Form.Item
                                   className="special-input"
                                   label="Phone"
                                   name="phone"
                                   rules={[{
                                      required: true,
                                      message: 'Phone is required',
                                   }]}
                               >
                                  <Input autoComplete="nope" prefix="+"/>
                               </Form.Item>


                               <Form.Item
                                   name="email"
                                   label="Email"
                                   rules={[{type: 'email', required: true, message: 'Email is required'}]}
                               >
                                  <Input placeholder="email" autoComplete="nope"/>
                               </Form.Item>


                               <Form.Item
                                   style={{opacity: 0}}
                                   name="asd"
                                   label="asd"
                               >
                                  <Input/>
                               </Form.Item>

                               <Form.Item
                                   className="special-bg-select"
                                   label="Country/Region"
                                   name="country"
                                   rules={[{
                                      required: true,
                                      message: 'Country/Region is required',
                                   }]}
                               >
                                  <Select
                                      onSearch={onSearch}
                                      showSearch
                                      filterOption={(input, option) =>
                                          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                      }
                                      autoComplete="nope"
                                      onChange={handleCountryChange}
                                  >
                                     {countries.map((country) => (
                                         <Option
                                             value={country.id}
                                             key={country.id}
                                         >
                                            {country.name}
                                         </Option>
                                     ))}
                                  </Select>
                               </Form.Item>

                               <Form.Item
                                   label="Town/City"
                                   name="city_id"
                               >
                                  <Select
                                      onSearch={onSearch}
                                      showSearch
                                      filterOption={(input, option) =>
                                          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                      }
                                      autoComplete="nope"
                                  >
                                     {cities.map((city) => (
                                         <Option
                                             value={city.id}
                                             key={city.id}
                                         >
                                            {city.name}
                                         </Option>
                                     ))}
                                  </Select>
                               </Form.Item>

                               <Form.Item
                                   label="Street address"
                                   name="address"
                                   rules={[{
                                      required: true,
                                      message: 'Address is required',
                                   }]}
                               >
                                  <Input autoComplete="nope" placeholder="House number and street name"/>
                               </Form.Item>


                               <Form.Item
                                   label="Postcode/ZIP"
                                   name="postcode"
                                   rules={[{
                                      required: true,
                                      message: 'Postcode is required',
                                   }]}
                               >
                                  <Input autoComplete="nope" placeholder="Postcode/ZIP"/>
                               </Form.Item>


                            </div>
                         </div>
                         <div>
                            <Form.Item
                                label="Order notes (optional)"
                                name="order_notes"
                            >
                               <Input.TextArea placeholder="Notes about your order, e.g. special notes for delivery"/>
                            </Form.Item>
                         </div>
                      </div>

                      <div className="text-right">
                         {
                            cart.cartItems.total ?
                                <Button
                                    htmlType="submit"
                                    shape="round"
                                    className="btn-gsd-orange"
                                >
                                   Place order
                                </Button>
                                : null
                         }

                      </div>

                   </Form>
                </div>
             </div>
          </div>
       </section>
   );
};

export default CheckoutForm;