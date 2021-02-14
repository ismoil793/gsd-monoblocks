import {
   Form,
   Input,
   Button,
} from 'antd';
import MainLayout from "../../components/Layout";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {authLogin} from "../../redux/action/user";
import {useEffect} from "react";
import {useRouter} from "next/router";

const Login = () => {

   const dispatch = useDispatch();
   const user = useSelector((state) => state.user);
   const router = useRouter();

   const onFinish = (values) => {
      dispatch(authLogin(values))
   };

   const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
   };

   useEffect(() => {
      if (user.isLogin) {
         router.push('/cabinet?param=orders')
      }
   }, [user]);

   const layout = {
      labelCol: {span: 24},
   };

   return (
       <MainLayout>
          <div className="login-container">
             <h3 style={{textAlign: 'center'}}>Sign in</h3>
             <div className="login">
                <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
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

                   <Form.Item
                       label="Password"
                       name="password"
                       rules={[
                          {
                             required: true,
                             message: 'Please input your password!',
                          },
                       ]}
                   >
                      <Input.Password placeholder="Enter your password"/>
                   </Form.Item>
                   <Form.Item>
                      <div className="d-flex justify-content-between mt-3">
                         <Link href="/register">
                            <a>Do not have an account?</a>
                         </Link>
                         <Link href="/forgot">
                            <a>Forgot your password?</a>
                         </Link>
                         <Button
                             type="primary"
                             htmlType="submit"
                             className="btn-gsd"
                         >
                            Sign in
                         </Button>
                      </div>
                   </Form.Item>
                </Form>
             </div>
          </div>
       </MainLayout>
   );
};

export default Login;
