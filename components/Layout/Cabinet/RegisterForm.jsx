import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Form,
  Input,
  Button,
} from 'antd';
/* import * as actions from '../../redux/action/index'; */


const layout = {
  labelCol: { span: 24 },
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
  const signUp = useSelector((state) => state.handleAuth)
  /* const dispatch = useDispatch(); */
  const onFinish = (values) => {
    console.log(values);
    /* dispatch(actions.signUp(values)); */
  };

  const validatePassword = ({ target }) => {
    const { value } = target;
    const regEx = new RegExp("^(?=.{8,})");
    const isPassValid = regEx.test(value);
    if (isPassValid) {
      setPassword(isPassValid);
      setMessageType('success');
    } else {
      setPassword(false);
      setMessageType('error');
    }
    return null;
}

  return (
    <div className="login-container">
      <div className="login">
        <h3 style={{ textAlign: 'center' }}>Register</h3>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={['user', 'org_name']}
            label="Company"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['user', 'reg_no']}
            label="Registration nr."
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['user', 'first_name']}
            label="Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
           <Form.Item
            name={['user', 'last_name']}
            label="Lastname"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['user', 'phone']}
            label="Phone"
            rules={[{ required: true }]}
          >
            <Input
              prefix="+"
            />
          </Form.Item>
          <Form.Item
            name={['user', 'email']}
            label="Email"
            rules={[{ type: 'email' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            hasFeedback
            validateStatus={messageType}
            help={messageType === 'error' ? `Should be at least 8 characters` : null}
            rules={[{ required: true }]}
            name={['user', 'password']}
            >
            <Input.Password onChange={validatePassword} />
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
                ({ getFieldValue }) => ({
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
              <Input.Password />
            </Form.Item>


          <Form.Item>
            <Button
              htmlType="submit"
              style={{
                backgroundColor: '#ff7d06',
                color: 'white',
              }}
              /* disabled={!statePassword || !confirmPassword}
              loading={signUp.signUpStatus === 'request'} */
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
