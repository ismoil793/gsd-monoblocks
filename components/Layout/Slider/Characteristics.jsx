import { useState } from 'react';
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
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="CPU" rules={[{ required: true }]}>
          <Select>
            <Select.Option value="demo">Intel Pentium DualCore G5420 - 3.8 GHz, 4M</Select.Option>
            <Select.Option value="demo1">1</Select.Option>
            <Select.Option value="demo2">2</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="RAM" rules={[{ required: true }]}>
          <Select>
            <Select.Option value="demo3">3</Select.Option>
            <Select.Option value="demo4">4</Select.Option>
            <Select.Option value="demo5">5</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="HDD/SDD" rules={[{ required: true }]}>
          <Select>
            <Select.Option value="demo6">HDD 1000GB 2,5"</Select.Option>
            <Select.Option value="demo7">7"</Select.Option>
            <Select.Option value="demo8">8</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Graphic card">
          <Select rules={[{ required: true }]}>
            <Select.Option value="demo9">PH-GT 1030-02G</Select.Option>
            <Select.Option value="demo10">10</Select.Option>
            <Select.Option value="demo11">11</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Keyboard and Mouse" rules={[{ required: true }]}>
          <Select>
            <Select.Option value="demo">AVT KBM301M101</Select.Option>
            <Select.Option value="demo12">12</Select.Option>
            <Select.Option value="demo13">13</Select.Option>
          </Select>
        </Form.Item>
      </Form>
  );
}

export default Characteristics;