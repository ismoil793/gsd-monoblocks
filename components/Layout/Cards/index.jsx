import {
  Button,
} from 'react-bootstrap';
import { Card } from 'antd';

const { Meta } = Card;

const CustomCard = () => {
  return (
    <Card
      hoverable
      style={{ width: '32%' }}
      cover={<img alt="example" src="/static/img/1.jpg" />}
    >
      <Meta
        title={<h4 style={{ fontWeight: 400,  textAlign: 'center' }}>AVTECH K40 PRO IPS 23.8</h4>}
        description={<div style={{ textAlign: 'center' }}><Button variant="secondary">Select</Button></div>}
      />
    </Card>
  );
}

export default CustomCard;
