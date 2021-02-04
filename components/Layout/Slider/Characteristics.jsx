import { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import * as actions from '../../../redux/action';
import { useDispatch } from 'react-redux';
import {
  Form,
  Button,
  Select,
  Input,
} from 'antd';

const { Option } = Select;

const Characteristics = ({ monoblocks }) => {
  const dispatch = useDispatch();
  const { monoblock, configuration } = monoblocks;
  const [componentSize, setComponentSize] = useState('default');
  const [oldPrice, setOldPrice] = useState({ price: 0 });
  const [baseCompPrice, setBaseCompPrice] = useState(configuration.base_components ? (
    configuration.base_components.reduce((acc, curValue) => {
      console.log('curValue.category.price: ', curValue.category);
      return {
        ...acc,
        [curValue.category]: curValue.component.price
      }
    }, {})
  ) : null);

   const [price, setPrice] = useState({ price: 0 });

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const onFinish = (values) => {
    console.log(values);
  }

  const displayInitialValues = (component) => {
    return component.reduce((acc, currValue) => {
      return {
        ...acc,
        [currValue.component]: currValue.component ? currValue.component.name : null,
      }
    }, {});
  };
  

  const handleChange = (value, info, component) => {
    setOldPrice(price);
    setPrice(prices => {
      return {
        ...prices,
        [component]: info.money
      }
    });
    return null;
  }

  return (
    <div>
      <p className="characteristic-title">
        {monoblock.name}
      </p>
      <Form
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        onFinish={onFinish}
        labelCol={{span: 24}}
        initialValues={{
          ...displayInitialValues(configuration.base_components),
          ...displayInitialValues(configuration.optional_components),
        }}
      >
        {configuration.optional_components.map((component, index) => {
          return (
            <Form.Item
              label={component.category}
              name={`component_ids[${index}]`}
              key={Math.random()*index}
            >
              <Select
                onChange={(value, info) => {
                  handleChange(value, info, component.category)
                }}
                key={Math.random()*index}
              >
                {component.components.map((category, index) => {
                  return (
                    <Option
                      key={`a${index}`}
                      value={category.id}
                      money={category.price}
                    >
                      {category.name}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          );
        })}
        {configuration.base_components.map((component, index) => {
          return (
            <Form.Item
              label={component.category}
              name={component.component}
              key={`M${index}`}
            >
              <Input
                disabled
                value={component.component.name}
              />
            </Form.Item>
          );
        })}
      </Form>
  
      <h6>Price</h6>
      <CountUp
        start={
          Object.values(baseCompPrice).reduce((acc, curValue) => acc + curValue, 0)
          + Object.values(oldPrice).reduce((acc, curValue) => acc + curValue, 0)
        }
        end={
          Object.values(baseCompPrice).reduce((acc, curValue) => acc + curValue, 0)
          + Object.values(price).reduce((acc, curValue) => acc + curValue, 0)
        }
        duration={1.5}
        prefix="€ "
        className="Number-Animation"
        style={{
          fontSize: 24,
        }}
      />
      <br/>
      <Button
        shape="round"
        style={{
          backgroundColor: '#ff7d06',
          marginTop: 20,
          color: 'white',
        }}
        onClick={() => dispatch(actions.addToCart())}
      >
          Add to cart
      </Button>
      <p style={{ fontSize: 14, marginTop: 10 }}><span style={{ color: 'red' }}>*</span>Required</p>
    </div>
  );
}

export default Characteristics;