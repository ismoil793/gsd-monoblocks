import React from 'react';
import {Button, Form, Input} from "antd";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {updateUserInfo} from "../../redux/action/user";

const Details = () => {

   const layout = {
      labelCol: {span: 24},
   };

   const dispatch = useDispatch();

   const user = useSelector(state => state.user);

   const onFinish = (values) => {
      const {first_name, last_name, password, password_confirmation, password_old} = values;
      console.log(password_old || password || password_confirmation)
      if (password || password_confirmation || password_old) {
         dispatch(updateUserInfo({...values}))
      } else {
         dispatch(updateUserInfo({first_name, last_name}))
      }
   };

   return (
       <div
           style={{
              backgroundColor: '#f9f9f9',
              padding: 30,
              borderRadius: 10
           }}
       >
          <div>
             <h5 className="font-weight-bold mb-3">Account details</h5>
             <Form
                 name="basic"
                 onFinish={onFinish}
                 // onFinishFailed={onFinishFailed}
                 {...layout}
                 className="form-user-details"
             >
                {
                   user.info.id ?
                       <>
                          <Form.Item
                              label="First Name"
                              name="first_name"
                              className="half-field"
                              initialValue={user.info.first_name}
                          >
                             <Input placeholder="Enter your name"/>
                          </Form.Item>

                          <Form.Item
                              label="Last Name"
                              name="last_name"
                              className="half-field"
                              initialValue={user.info.last_name}
                          >
                             <Input placeholder="Enter your surname"/>
                          </Form.Item>

                          <h5 className="font-weight-bold mt-3 mb-3">Password change</h5>
                          <Form.Item
                              label="Current password"
                              className="half-field mr-5"
                              name="password_old"
                          >
                             <Input.Password placeholder="Enter your password"/>
                          </Form.Item>

                          <Form.Item
                              label="New password"
                              className="half-field"
                              name="password"
                          >
                             <Input.Password placeholder="New password"/>
                          </Form.Item>

                          <Form.Item
                              label="Confirm new password"
                              className="half-field"
                              name="password_confirmation"
                              rules={[
                                 ({getFieldValue}) => ({
                                    validator(rule, value) {
                                       if (!value || getFieldValue('password') === value) {
                                          return Promise.resolve();
                                       }
                                       return Promise.reject('The two passwords that you entered do not match!');
                                    },
                                 })
                              ]}
                          >
                             <Input.Password placeholder="Confirm new password"/>
                          </Form.Item>


                          <Form.Item>
                             <div className="d-flex mt-3">
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="btn-gsd"
                                >
                                   Save changes
                                </Button>
                             </div>
                          </Form.Item>
                       </>
                       : null
                }
             </Form>
          </div>
       </div>
   );
};

export default Details;