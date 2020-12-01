import { Breadcrumb } from 'antd';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

const CustomBreadCrumb = () => {
  return (
    <div style={{
      borderBottom: '3px double #ddd',
      borderTop: '1px solid #ddd'
    }}>
      <Container>
      <Row>
        <Col>
          <Breadcrumb style={{ paddingTop: 20, paddingBottom: 20 }}>
            <Breadcrumb.Item style={{ fontSize: 18 }}>Home</Breadcrumb.Item>
            <Breadcrumb.Item style={{ color: '#ff7d06', fontSize: 18 }}>
              All-in-one configure
          </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default CustomBreadCrumb;
