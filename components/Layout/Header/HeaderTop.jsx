import './header.module.css';
import { useEffect } from 'react';
import * as actions from '../../../redux/action';
import { Select, Badge } from 'antd';
import { slide as Menu } from 'react-burger-menu';
import { useSelector } from 'react-redux';
import { ShoppingCartOutlined } from '@ant-design/icons';
const { Option } = Select;

const HeaderTop = () => {

  return (
    <div className="TopHeaderBackground">
       <div className="Custom-Burger-Menu">
        <Menu>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
        </Menu>
      </div>
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
              <div
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <div
                  style={{ marginRight: 25 }}
                >
                  <ShoppingCartOutlined
                    style={{
                      fontSize: 36,
                      color: '#fd7e14',
                    }}
                    onClick={() => <Link href="/cart" />}
                  />
                  <Badge
                    count={cart.itemsNumber}
                    showZero
                    style={{ marginTop: -15 }}
                  >
                    <a href="#" className="head-example" />
                  </Badge>
                </div>
                <Select defaultValue="Russian" style={{ width: 120, marginTop: 3 }}>
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

