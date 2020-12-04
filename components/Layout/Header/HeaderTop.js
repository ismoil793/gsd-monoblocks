import './header.module.css';
import { Row, Col } from 'react-bootstrap';

const HeaderTop = ({ children }) => {
  return (
    <div className="TopHeaderBackground">
      <div className="Container">
            <div className="TopHeaderContext">
             {children}
            </div>
      </div>
    </div>
);
}

export default HeaderTop;

