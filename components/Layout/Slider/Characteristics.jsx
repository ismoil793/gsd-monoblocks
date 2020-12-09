import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'
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

const Characteristics = () => {
  const [componentSize, setComponentSize] = useState('default');
  const [cpu, setCPU] = useState(100);
  const [ram, setRAM] = useState(400);
  const [hddsdd, setHDDSDD] = useState(700);
  const [graphicCard, setGraphicCard] = useState(1000);
  const [keyboardMouse, setKeyboardMouse] = useState(1300);
  const [price, setPrice] = useState(0)
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const onFinish = (values) => {
    console.log(values)
  }

  useEffect(() => {
    setPrice(cpu+ram+hddsdd+graphicCard+keyboardMouse);
  }, [cpu, ram, hddsdd, graphicCard, keyboardMouse])

//   const animateValue = (id, start, end, duration) => {
//     if (start === end) return;
//     const range = end - start;
//     let current = start;
//     const increment = end > start? 1 : -1;
//     const stepTime = Math.abs(Math.floor(duration / range));
//     // const obj = document.getElementById(id);
//     const timer = setInterval(() => {
//         current += increment;
//         // obj.innerHTML = current;
//         if (current == end) {
//             clearInterval(timer);
//         }
//     }, stepTime);

//     return current;
// }


const Odometer = dynamic(import('react-odometerjs'), {
  ssr: false,
  loading: () => 0,
});

  return (
    <div>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        onFinish={onFinish}
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
          rules={[{ required: true }]}
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
          rules={[{ required: true }]}
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
          rules={[{ required: true }]}
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
      <Odometer
        value={price}
        format="(,ddd).dd "
        duration={1000}
      />
    </div>
  );
}

export default Characteristics;