import './header.module.css';
import { Select } from 'antd';
const { Option } = Select;

const HeaderTop = () => {
  return (
    <div className="TopHeaderBackground">
      <div className="Container">
            <div className="TopHeaderContext">
             <div>
                <ul className="Call-msg">
                  <li className="call-msg-item">
                    <i className="fas fa-phone-alt"></i>
                    <a href="(+371) 67885251">(+371) 67885251</a>
                  </li>
                  <li className="call-msg-item" style={{ marginLeft: 10 }}>
                    <i className="fas fa-envelope"></i>
                    <a href="info@gsdas.eu"> info@gsdas.eu</a>
                  </li>
                </ul>
               </div>
              <div>
                <Select defaultValue="Russian" style={{ width: 120 }}>
                  <Option value="ru">Russian</Option>
                  <Option value="uz">Uzbek</Option>
                  <Option value="la">Latvia</Option>
                </Select>
              </div>
            </div>
      </div>
    </div>
);
}

export default HeaderTop;

