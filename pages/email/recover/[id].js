import React, {useState} from 'react';
import MainLayout from "../../../components/Layout";
import {Button, Form, Input} from "antd";
import Link from "next/link";
import {httpPost} from "../../../api";
import url from "../../../api/url";
import {useRouter} from "next/router";
import {notifyError, notifySuccess} from "../../../helpers/NotifyBtn";

const PasswordRecover = () => {

   const [messageType, setMessageType] = useState('');
   const router = useRouter();
   const {id, ...params} = router.query;

   const validateMessages = {
      required: '${label} is required!',
      types: {
         email: '${label} is not a valid email!',
         number: '${label} is not a valid number!',
      },
      number: {
         range: '${label} must be between ${min} and ${max}',
      },
   };

   // function for validating password of 6 chars
   const validatePassword = ({target}) => {
      const {value} = target;
      const regEx = new RegExp("^(?=.{6,})");
      const isPassValid = regEx.test(value);
      if (isPassValid) {
         setMessageType('success');
      } else {
         setMessageType('error');
      }
      return null;
   };


   const onFinish = (values) => {
      httpPost({
         url: `${url}/auth/user/password/new/${id}`,
         data: {
            ...params,
            password: values.user.password,
            password_confirmation: values.user.password_confirmation
         }
      }).then(r => {
         notifySuccess("Your account has been restored", 3000);
         router.push('/login')
      }).catch(e => notifyError(e.data.message))
   };


   const layout = {
      labelCol: {span: 24},
   };

   return (
       <MainLayout>
          <div className="container">
             <div className="row">
                <div className="col-12">
                   <div className="login-container">
                      <h3 style={{textAlign: 'center'}}>New password</h3>
                      <div className="login">
                         <Form
                             {...layout}
                             name="nest-messages"
                             onFinish={onFinish}
                             validateMessages={validateMessages}
                         >
                            <Form.Item
                                label="New Password"
                                hasFeedback
                                validateStatus={messageType}
                                help={messageType === 'error' ? `Should be at least 6 characters` : null}
                                rules={[{required: true}]}
                                name={['user', 'password']}
                            >
                               <Input.Password onChange={validatePassword}/>
                            </Form.Item>

                            <Form.Item
                                name={['user', 'password_confirmation']}
                                label="Confirm New Password"
                                dependencies={['user', 'password']}
                                hasFeedback
                                rules={[
                                   {
                                      required: true,
                                      message: 'Please confirm your password!',
                                   },
                                   ({getFieldValue}) => ({
                                      validator(rule, value) {
                                         if (!value || getFieldValue(['user', 'password']) === value) {
                                            return Promise.resolve();
                                         }
                                         return Promise.reject('The two passwords that you entered do not match!');
                                      },
                                   }),
                                ]}
                            >
                               <Input.Password/>
                            </Form.Item>

                            <Form.Item>
                               <div className="d-flex justify-content-end mt-3">
                                  <Button
                                      type="primary"
                                      htmlType="submit"
                                      className="btn-gsd"
                                  >
                                     Reset password
                                  </Button>
                               </div>
                            </Form.Item>
                         </Form>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </MainLayout>
   );
};

export default PasswordRecover;