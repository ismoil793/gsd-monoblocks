import {
  Button,
  Form, Input,
} from 'antd';

const PasswordReset = () => {
  return (
    <Form>
      <p>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
      <Form.Item
        label="User or email"
        name="user"
        labelCol={{ span: 24 }}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button
          style={{
            backgroundColor: '#ff7d06',
            color: 'white',
          }} 
        >
          Reset Password
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PasswordReset;
