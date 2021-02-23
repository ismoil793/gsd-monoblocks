import MainLayout from "../../components/Layout";
import {
   Form,
   Input,
   Button,
} from 'antd';
import Link from "next/link";
import {httpPost} from "../../api";
import url from "../../api/url";
import {notifyError, notifySuccess} from "../../helpers/NotifyBtn";


const PasswordReset = () => {

   const onFinish = (values) => {
      httpPost({
         url: `${url}/auth/user/password/forgot`,
         data: {
            email: values.email
         }
      }).then(response => {
         notifySuccess("We have sent a message to your email", 3000);
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
                      <h3 style={{textAlign: 'center'}}>Reset password</h3>
                      <div className="login">
                         <Form
                             name="basic"
                             onFinish={onFinish}
                             {...layout}
                         >
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                   {
                                      required: true,
                                      message: 'Please enter your email!',
                                   },
                                   {
                                      type: 'email',
                                      message: 'Email format is wrong!'
                                   }
                                ]}
                            >
                               <Input placeholder="Enter your email"/>
                            </Form.Item>

                            <Form.Item>
                               <div className="d-flex justify-content-between mt-2">
                                  <Link href="/register">
                                     <a>Do not have an account?</a>
                                  </Link>
                                  <Link href="/login">
                                     <a>Login if you have account</a>
                                  </Link>
                                  <Button
                                      type="primary"
                                      htmlType="submit"
                                      className="btn-gsd"
                                  >
                                     Reset
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

export default PasswordReset;