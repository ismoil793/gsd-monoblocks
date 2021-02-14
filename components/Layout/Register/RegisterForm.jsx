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
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dicta distinctio, dolore esse
                   eveniet fugit id in modi molestias porro quos repudiandae tempora totam, velit voluptatibus. Animi
                   dolor harum totam veritatis? Assumenda, deleniti dicta ducimus impedit minima nostrum odit officia
                   quam quod rem repudiandae rerum sequi veritatis. Ad dicta exercitationem pariatur possimus, quaerat
                   quia quo ut. A ad, assumenda cum, doloribus illo laboriosam magni maiores maxime nobis provident quis
                   reprehenderit saepe velit vitae voluptas! Cum dolor dolorem eius eum explicabo mollitia numquam quam
                   quis repellat sunt! Dicta earum quasi temporibus. A adipisci aliquid architecto commodi consectetur
                   corporis, cumque, dignissimos ducimus enim error est impedit iusto labore molestias neque nobis
                   quisquam quos repudiandae soluta temporibus veniam voluptate voluptatum. Aperiam consequatur,
                   maiores. Adipisci at, consequuntur doloribus eligendi, expedita fugiat ipsa ipsam minima natus nihil
                   non, pariatur possimus quae quaerat quo repellendus rerum sapiente sed sint ut voluptate voluptatem
                   voluptates? Animi commodi cum debitis dolor doloribus, facere perferendis quae sint ullam. Ad alias
                   aliquid animi cum dolor eum hic libero magnam minus, pariatur quisquam reiciendis repellendus vel.
                   Alias aliquam assumenda beatae consequatur dignissimos, ducimus eligendi eveniet facere fuga harum
                   illum itaque magni maxime modi molestias neque nobis odit possimus provident quae quaerat quas
                   recusandae reiciendis, rem repudiandae tempora, voluptate! Corporis cum deserunt illum repudiandae.
                   Alias aliquid commodi cumque deleniti distinctio dolorem ducimus esse ipsam, modi molestias nihil
                   repellendus unde voluptatum. Accusamus animi deleniti doloremque, dolores doloribus eligendi et ipsum
                   itaque laborum molestiae, nulla obcaecati porro quas saepe unde ut voluptate voluptates. Adipisci eum
                   magnam placeat praesentium quam quidem rem repellendus repudiandae unde? Accusantium beatae commodi
                   culpa dolore dolores illum inventore iure, laboriosam magni nihil perspiciatis rem temporibus! Neque
                   reiciendis, sint! Aliquid at consectetur hic magnam, odit reprehenderit? Ab in iure minus
                   necessitatibus obcaecati praesentium quasi quidem, repellat repellendus veritatis. Asperiores at
                   consequatur ea, exercitationem, laboriosam molestias quaerat quis recusandae repellendus sapiente
                   ullam vel. A commodi earum error harum odio qui quia quo ratione sint unde! Distinctio dolore facilis
                   fugiat iste molestiae necessitatibus obcaecati. Assumenda consequuntur ipsa mollitia possimus quaerat
                   rerum similique unde. Aliquid, assumenda aut commodi delectus deserunt dolores ducimus eligendi,
                   facilis fuga illum impedit in laboriosam natus, necessitatibus nemo neque nisi nulla officiis
                   possimus quam quis quod reiciendis repellat rerum tempore veritatis vero? Fugiat labore magnam
                   maiores porro sapiente veritatis? Accusantium, quas quasi! Dolores exercitationem ipsam libero, nobis
                   quos sit! Laborum magnam quam sit! Architecto aspernatur corporis, delectus deserunt, earum error id
                   impedit minus nostrum nulla omnis possimus praesentium quas quisquam quod, repudiandae sint? Adipisci
                   aspernatur corporis deleniti dolor ducimus eum explicabo facere impedit inventore iure libero, magnam
                   maxime minus molestias mollitia natus nesciunt nisi obcaecati odit perferendis quo rem voluptates?
                   Adipisci, aliquam asperiores assumenda, blanditiis dolore eum eveniet explicabo ipsum iure minima
                   neque, numquam odio pariatur provident quis ratione recusandae soluta voluptate voluptatibus
                   voluptatum? Aspernatur consectetur culpa explicabo iste laborum minus modi placeat similique sint?
                   Assumenda atque, deleniti est excepturi facere fugit iste labore laudantium minus natus placeat sunt
                   tempore temporibus! Autem consectetur, deserunt fugit hic magnam molestiae perferendis perspiciatis
                   voluptatum. Aliquid consequatur, dolore eius enim eos eveniet explicabo hic magnam magni minus, quae
                   recusandae, reprehenderit sed sequi vero. Adipisci aliquid architecto asperiores aspernatur
                   consectetur consequuntur cupiditate debitis dolorem ipsam, libero magni minus modi molestiae nobis,
                   nostrum nulla odit possimus qui quibusdam quis, rerum sit vel velit veniam voluptas! Illo laborum
                   laudantium libero nesciunt odio quaerat quia repellat temporibus vero voluptatibus? Adipisci
                   architecto aspernatur assumenda aut commodi cumque delectus deleniti dicta, distinctio, dolorem
                   doloribus ducimus et eum eveniet ex id illum in inventore itaque iure iusto libero magnam minus
                   molestiae necessitatibus non nostrum odit officiis perferendis perspiciatis quaerat quidem, saepe
                   sint sit sunt totam veniam? Accusamus consequuntur debitis, ea facere in incidunt labore nemo nobis,
                   non obcaecati omnis quos reiciendis rem rerum sequi, ut veniam voluptas? Distinctio earum ipsa
                   molestiae mollitia officiis quisquam rerum unde voluptatum. Aliquid animi atque blanditiis
                   consectetur eaque eius enim est itaque mollitia nesciunt, quidem quis rerum sed, similique suscipit
                   ullam ut voluptates. Accusamus adipisci alias aliquam aliquid amet at cum cupiditate debitis delectus
                   deserunt dolor dolores error est hic inventore iste iure laboriosam laborum maiores minima minus,
                   natus nihil, nisi optio porro quam quidem rem reprehenderit sed sit totam ullam ut vel veniam
                   voluptas voluptatem voluptatum? Alias aperiam deleniti dolor iste minima odit quaerat quo soluta
                   temporibus voluptatem? Aperiam in minus nihil optio. Aliquid culpa cupiditate deleniti deserunt
                   distinctio, doloremque eaque magni nostrum obcaecati pariatur quasi rerum sequi tenetur voluptatem
                   voluptatum. Alias architecto asperiores aut, blanditiis consectetur cum deserunt dicta distinctio
                   dolor dolores eius eum explicabo impedit itaque magnam minima, minus molestias natus nemo nostrum
                   officia pariatur perferendis possimus provident quae quasi qui quia quis quos recusandae reiciendis
                   repellendus reprehenderit, rerum soluta suscipit voluptate voluptates. Autem blanditiis est harum
                   minima molestiae neque, placeat reiciendis? Ab accusantium at autem consequuntur delectus, dolorum
                   ducimus eaque, exercitationem explicabo hic incidunt inventore ipsa nesciunt nisi officiis pariatur
                   perspiciatis praesentium quis vero voluptates. Aliquid assumenda aut consequatur, corporis dolorum
                   ducimus hic neque porro, quo ratione sint ullam vitae voluptas. Asperiores autem cum, cumque dolorum
                   eligendi laboriosam laborum libero minus non odio omnis optio quisquam recusandae repellat sequi
                   suscipit vel. A ab architecto aut itaque quas sit voluptate. Architecto aut illo ipsa modi nihil
                   obcaecati quia repellat voluptates. Blanditiis corporis delectus dolore facere, impedit in,
                   molestias, mollitia non officiis provident quod sequi similique voluptatum. Amet dignissimos ducimus
                   explicabo harum minima nam nemo obcaecati repellat, temporibus vitae! Culpa deleniti ea nam nobis,
                   soluta tenetur veritatis. Ad asperiores, assumenda aut autem cumque cupiditate deserunt dolor dolore
                   doloribus eos explicabo fugit id in, incidunt inventore iusto maiores molestiae molestias mollitia
                   natus necessitatibus nobis omnis pariatur perferendis, quae quaerat quasi recusandae repellat
                   repellendus similique ullam vero vitae voluptatem. A aperiam doloribus ipsam maiores perferendis quam
                   tempora vel? Consequuntur debitis dolor et quaerat qui quibusdam quo sed. Alias asperiores
                   consectetur cupiditate doloribus dolorum ducimus, eaque eius esse exercitationem facilis maiores
                   mollitia non perspiciatis rerum suscipit? Atque esse odit omnis quae quas recusandae voluptatibus.
                   Accusantium dolore molestiae unde voluptas? Cumque est ex harum id itaque quaerat temporibus ut!
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
