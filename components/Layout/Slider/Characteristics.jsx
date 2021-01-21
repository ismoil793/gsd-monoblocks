import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import Navs from '../Navs';
import {
  Form,
  Button,
  Select,
} from 'antd';

const Characteristics = () => {
  const [componentSize, setComponentSize] = useState('default');
  const [cpu, setCPU] = useState(100);
  const [ram, setRAM] = useState(400);
  const [hddsdd, setHDDSDD] = useState(700);
  const [graphicCard, setGraphicCard] = useState(1000);
  const [keyboardMouse, setKeyboardMouse] = useState(1300);
  const [price, setPrice] = useState(0);
  const [oldPrice, setOldPrice] = useState(0);
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const onFinish = (values) => {
    console.log(values)
  }

  useEffect(() => {
    setOldPrice(price);
    setPrice(cpu+ram+hddsdd+graphicCard+keyboardMouse);
  }, [cpu, ram, hddsdd, graphicCard, keyboardMouse])


  return (
    <div>
      <p className="characteristic-title">
        AVTECH X5 (Black) All-in-One PC
      </p>
      <Form
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        onFinish={onFinish}
        labelCol={{span: 24}}
        initialValues={{
          cpu: 100,
          ram: 400,
          hddSdd: 700,
          graphCard: 1000,
          keyMouse: 1300,
        }}
      >
        <Form.Item
          label="CPU"
          name="cpu"
          style={{
          fontSize: '24px !important',
          color: 'red',
        }}
          rules={[{ required: true }]}
           colon={false}
        >
          <Select
            onChange={setCPU}
          >
            <Select.Option value={100}>Intel Pentium DualCore G5420 - 3.8 GHz, 4M</Select.Option>
            <Select.Option value={200}>1</Select.Option>
            <Select.Option value={300}>2</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="RAM"
          rules={[{ required: true }]}
          name="ram"
        >
          <Select
            onChange={setRAM}
          >
            <Select.Option value={400}>3</Select.Option>
            <Select.Option value={500}>4</Select.Option>
            <Select.Option value={600}>5</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="HDD/SDD"
          rules={[{ required: true }]}
          name="hddSdd"
        >
          <Select
            onChange={setHDDSDD}
          >
            <Select.Option value={700}>HDD 1000GB 2,5"</Select.Option>
            <Select.Option value={800}>7"</Select.Option>
            <Select.Option value={900}>8</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Graphic card"
          name="graphCard"
        >
          <Select
            onChange={setGraphicCard}
          >
            <Select.Option value={1000}>PH-GT 1030-02G</Select.Option>
            <Select.Option value={1100}>10</Select.Option>
            <Select.Option value={1200}>11</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Keyboard and Mouse"
          name="keyMouse"
        >
          <Select
            onChange={setKeyboardMouse}
          >
            <Select.Option value={1300}>AVT KBM301M101</Select.Option>
            <Select.Option value={1400}>12</Select.Option>
            <Select.Option value={1500}>13</Select.Option>
          </Select>
        </Form.Item>
      </Form>
      {/* {animateValue(oldPrice,price,2000)} */}
      <h6>Price</h6>
      <CountUp
        start={oldPrice}
        end={price}
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
      >
          Add to cart
      </Button>
      <p style={{ fontSize: 14, marginTop: 10 }}><span style={{ color: 'red' }}>*</span>Required</p>
    </div>
  );
}

export default Characteristics;