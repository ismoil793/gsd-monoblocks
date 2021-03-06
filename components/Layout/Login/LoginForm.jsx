import Link from 'next/link'
import {
  Form,
  Input,
  Button,
  Checkbox,
} from 'antd';

const layout = {
  labelCol: { span: 24 },
};

const LoginForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login-container">
      <div className="login">
        <h3 style={{ textAlign: 'center' }}>Login</h3>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username or email address"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please enter your username or email address!',
              },
            ]}
          >
            <Input />
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
            <Input.Password />
          </Form.Item>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <Form.Item
                name="remember"
                valuePropName="checked"
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </div>

            <Form.Item>
              <Button className="register-button">
                <Link
                  href="/register"
                >
                  <a>Register</a>
                </Link>
              </Button>
            </Form.Item>

            <Form.Item>
              <Button
                htmlType="submit"
                style={{
                  backgroundColor: '#ff7d06',
                  color: 'white',
                }} 
              >
                Log in
              </Button>
            </Form.Item>
          </div>
          <Form.Item>
            <Link href="/">
                <a className="password-recovery">
                  Lost your password?
                </a>
            </Link>
          </Form.Item>
        </Form>
  
      </div>
    </div>  
  );
};

export default LoginForm;
