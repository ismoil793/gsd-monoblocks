import './header.module.css';
import { Container, Row, Col } from 'react-bootstrap';

const HeaderTop = ({ children }) => {
  return (
    <div className="TopHeaderBackground">
      <Container>
        <Row>
          <Col>
            <div className="TopHeaderContext">
             {children}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
);
}

export default HeaderTop;

