import countryList from 'country-list';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';
import OrderDetails from './OrderDetails';

const { Option } = Select;

const CheckoutForm = (props) => {
  console.log('props: ', props);
  const onSearch = (country) => {
    console.log('country: ', country);
  }
  const makeButtonBlock = () => {
    if (typeof window !== 'undefined') {
      console.log('test: ', window.innerWidth);
      if (window.innerWidth <= 767) {
        return true
      }
      return false;
    }
  }

  return (
   <>
      <Form
        labelCol={{
          span: 24,
        }}
        /* wrapperCol={{
          span: 14,
        }} */
        initialValues={{
          country: 'Latvia',
        }}
      >
      <div className="CheckoutFormWrapper">
        <div>
        <h3>Billing details</h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Form.Item
          label="First name"
          name="first_name"
          rules={[{
            required: true,
            message: 'First Name is required',
          }]}
        >
          <Input style={{ width: '90%' }} />
        </Form.Item>

        <Form.Item
          label="Last name"
          name="last_name"
          rules={[{
            required: true,
            message: 'Last Name is required',
          }]}
        >
          <Input style={{ width: '90%' }} />
        </Form.Item>
        </div>

        <Form.Item
          label="Company name (optional)"
          name="comp_name"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Country/Regions"
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
          >
            {countryList.getNames().map((country) => (
              <Option
                value={country}
                key={country}
              >
                {country}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Street address1"
          name="street_address1"
          rules={[{
            required: true,
            message: 'Streen address is required',
          }]}
        >
          <Input placeholder="House number and street name" />
        </Form.Item>

        <Form.Item
          label="Street address2"
          name="street_address2"
        >
          <Input placeholder="Apartment, suite, unit, etc. (optional)" />
        </Form.Item>

        <Form.Item
          label="Town/City"
          name="town_city"
          rules={[{
            required: true,
            message: 'Town/City is required',
          }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[{
            required: true,
            message: 'Phone is required',
          }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[{ type: 'email' }]}
        >
          <Input />
        </Form.Item>
      </div>
      <div>
        <h3>Additional information</h3>
        <Form.Item
          label="Order notes (optional)"
          name="order_notes"
        >
          <Input.TextArea placeholder="Notes about your order, e.g. special notes for delivery" />
        </Form.Item>
      </div>
      </div>
      
      <br/>
      <br/>
      <OrderDetails />

      <Form.Item>
        <Button
          className="CheckoutFormButton"
          htmlType="submit"
          block
        >
        Place Order
        </Button>
      </Form.Item>
      </Form>
   </>
  );
};

export default CheckoutForm;