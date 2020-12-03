import './header.module.css';
import { Row, Col } from 'react-bootstrap';

const HeaderTop = ({ children }) => {
  return (
    <div className="TopHeaderBackground">
      <div className="Container">
        <Row>
          <Col>
            <div className="TopHeaderContext">
             {children}
            </div>
          </Col>
        </Row>
      </div>
    </div>
);
}

export default HeaderTop;

