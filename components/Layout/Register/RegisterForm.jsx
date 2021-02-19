import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
   Form,
   Input,
   InputNumber,
   Button
} from 'antd';
/* import * as actions from '../../redux/action/index'; */
import Link from "next/link";
import {Modal} from "react-bootstrap";
import {authRegister, userInfo} from "../../../redux/action/user";

const layout = {
   labelCol: {span: 24},
};
/* eslint-disable */
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

const RegisterForm = () => {
   const [statePassword, setPassword] = useState(false);
   const [confirmPassword, setConfirmPassword] = useState(false);
   const [messageType, setMessageType] = useState(null);
   const signUp = useSelector((state) => state.handleAuth);
   const user = useSelector(state => state.user);

   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const dispatch = useDispatch();

   const onFinish = (values) => {
      console.log(values);
      dispatch(authRegister(values.user))
      /* dispatch(actions.signUp(values)); */
   };

   const validatePassword = ({target}) => {
      const {value} = target;
      const regEx = new RegExp("^(?=.{6,})");
      const isPassValid = regEx.test(value);
      if (isPassValid) {
         setPassword(isPassValid);
         setMessageType('success');
      } else {
         setPassword(false);
         setMessageType('error');
      }
      return null;
   };


   return (
       <div className="login-container">

          <Modal show={show} onHide={handleClose}>
             <Modal.Header closeButton>
                <Modal.Title>Terms and conditions</Modal.Title>
             </Modal.Header>
             <Modal.Body>
                <div style={{maxHeight: '80vh', overflowY: 'scroll'}}>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
             </Modal.Body>
             {/*<Modal.Footer>*/}
             {/*   <Button className="btn-trans" variant="primary" onClick={handleClose}>*/}
             {/*      ok*/}
             {/*   </Button>*/}
             {/*</Modal.Footer>*/}
          </Modal>

          <h3 style={{textAlign: 'center'}}>{user.regSuccess ? 'Verify your email' :'Sign up'}</h3>

          {
             user.regSuccess ?
                 <div className="mt-5">
                    The verification code has been sent to your email, please verify your email and then login
                 </div>
                 :
                 <div className="login">
                    <Form
                        {...layout}
                        name="nest-messages"
                        onFinish={onFinish}
                        validateMessages={validateMessages}
                    >
                       <Form.Item
                           name={['user', 'org_name']}
                           label="Company"
                           rules={[{required: true}]}
                       >
                          <Input/>
                       </Form.Item>
                       <Form.Item
                           name={['user', 'reg_no']}
                           label="Registration nr."
                           rules={[{required: true}]}
                       >
                          <Input/>
                       </Form.Item>
                       <Form.Item
                           name={['user', 'first_name']}
                           label="Name"
                           rules={[{required: true}]}
                       >
                          <Input/>
                       </Form.Item>
                       <Form.Item
                           name={['user', 'last_name']}
                           label="Surname"
                           rules={[{required: true}]}
                       >
                          <Input/>
                       </Form.Item>
                       <Form.Item
                           name={['user', 'phone']}
                           label="Phone"
                           rules={[{required: true}]}
                       >
                          <Input
                              prefix="+"
                          />
                       </Form.Item>
                       <Form.Item
                           name={['user', 'email']}
                           label="Email"
                           rules={[{type: 'email'}]}
                       >
                          <Input/>
                       </Form.Item>
                       <Form.Item
                           label="Password"
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
                           label="Confirm Password"
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

                                       setConfirmPassword(true);
                                       return Promise.resolve();
                                    }
                                    setConfirmPassword(false);
                                    return Promise.reject('The two passwords that you entered do not match!');
                                 },
                              }),
                           ]}
                       >
                          <Input.Password/>
                       </Form.Item>


                       <div className="policy-confirm">
                          <div>
                             By continuing, you agree to GSD's
                             <button onClick={handleShow} type="button" className="btn policy-btn">
                                <strong>Conditions of Use and Privacy Notice.</strong>
                             </button>
                          </div>
                          <Form.Item>
                             <Link href="/login">
                                <a>Already have an account?</a>
                             </Link>
                             <Button
                                 htmlType="submit"
                                 className="btn-gsd"
                                 disabled={user.isRegistering}
                                 /* disabled={!statePassword || !confirmPassword}
                                 loading={signUp.signUpStatus === 'request'} */
                             >
                                Register
                             </Button>
                          </Form.Item>
                       </div>
                    </Form>
                 </div>
          }
       </div>
   );
};

export default RegisterForm;
