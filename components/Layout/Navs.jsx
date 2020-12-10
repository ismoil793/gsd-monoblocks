import { Navs } from 'react-bootstrap';

const CustomNavs = () => {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/description">Description</Nav.Link>
          Description
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/additional">Additional information</Nav.Link>
        Additional information
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" href="/Loading">Loading</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default CustomNavs;