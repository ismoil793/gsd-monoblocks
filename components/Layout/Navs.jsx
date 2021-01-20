import { Tabs, Tab } from 'react-bootstrap';
import pic from '../../static/img/a2.jpg';
import { Table } from 'react-bootstrap';

const CustomNavs = () => {
  return (
    <div>
    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
      <Tab eventKey="home" title="Description">
        <div className="tab-content-wrapper">
          <p className="description">Description</p>
          <p>AVTECH X5 All-in-One PC is a long-waited addition to AVTECH products.</p>
          <strong>Simple solution to complex problems</strong>
          <p>
            Get productive with word docuemnts, spreadsheets, power-poing presentation and
            much more without having too much husttle. Equipped with an AMD E2-7110 processor
            and 4GB DDR3 RAM, this All-in-One is suitable for effective daily work.
          </p>
          <strong>Always in touch</strong>
          <p>
            The AVTECH X5 All-in-One with a 2.0-megapixel webcam and microphone will help you to easily
            conduct video conferences and communicate with colleagues, without requiring additional peripherals.
            Communications excells – be present professionally as well as with your loved ones. Reap the seeds with AVTECH X5.
          </p>
        </div>
      </Tab>
      <Tab eventKey="Additional information" title="Additional information">
         <div className="tab-content-wrapper">
           <p className="description">Additional information</p>
           <Table striped bordered>
             <tbody>
                <tr>
                  <th className="custom-td-key">Motherboard</th>
                  <td className="custom-td-value">H310</td>
                </tr>
                <tr>
                  <th className="custom-td-key">Processor</th>
                  <td className="custom-td-value">CPU Intel Celeron/Dual Core/i3/i5/i7- 8th generation</td>
                </tr>
                <tr>
                  <th className="custom-td-key">RAM</th>
                  <td className="custom-td-value">2/4/8/16/32 Gb DDR4</td>
                </tr>
                <tr>
                  <th className="custom-td-key">Slot (M.2 SSD)</th>
                  <td className="custom-td-value">120/240/480/960 Gb, form-factor – M.2</td>
                </tr>
                <tr>
                  <th className="custom-td-key">Graphics</th>
                  <td className="custom-td-value">Integrated Intel HD Graphics</td>
                </tr>
                <tr>
                  <th className="custom-td-key">USB Ports</th>
                  <td className="custom-td-value">USB 2.0×1, USB 3.1×4</td>
                </tr>
                <tr>
                  <th className="custom-td-key">Webcam and Microphone</th>
                  <td className="custom-td-value">Yes</td>
                </tr>
                <tr>
                  <th className="custom-td-key">Touchscreen</th>
                  <td className="custom-td-value">No</td>
                </tr>
                <tr>
                  <th className="custom-td-key">I/O (Input/Output) Ports</th>
                  <td className="custom-td-value">Audio-out, Microphone – in, SD-card reader</td>
                </tr>
                <tr>
                  <th className="custom-td-key">Built in speakers</th>
                  <td className="custom-td-value">2-channel</td>
                </tr>
                <tr>
                  <th className="custom-td-key">Wireless data transmission</th>
                  <td className="custom-td-value">802.11 b/g/n (PCI-E)</td>
                </tr>
                <tr>
                  <th className="custom-td-key">LAN</th>
                  <td className="custom-td-value">10/100/1000 mbps</td>
                </tr>
                <tr>
                  <th className="custom-td-key">Video output</th>
                  <td className="custom-td-value">HDMIx1</td>
                </tr>
                <tr>
                  <th className="custom-td-key">Power Supply</th>
                  <td className="custom-td-value">External</td>
                </tr>
              </tbody>
           </Table>
         </div>
      </Tab>
      <Tab eventKey="test" title="Test" disabled>
        <div className="tab-content-wrapper">test test test</div>
      </Tab>
    </Tabs>
    <div className="related-products">
          <p className="description">Related topics</p>
          <div>
            <ul className="related-products-list">
              <li>
                <div className="related_products_img_title">
                  <img src={pic} alt="pic"/>
                  <p className="related-topics-item-title">Barebone AVTECH PRO G70</p>
                </div>
                <button className="related-topics-button">Add to cart</button>
              </li>
              <li>
                <div className="related_products_img_title">
                  <img src={pic} alt="pic"/>
                  <p className="related-topics-item-title">Barebone AVTECH PRO G70</p>
                </div>
                <button className="related-topics-button">Add to cart</button>
              </li>
              <li>
                <div className="related_products_img_title">
                  <img src={pic} alt="pic"/>
                  <p className="related-topics-item-title">Barebone AVTECH PRO G70</p>
                </div>
                <button className="related-topics-button">Add to cart</button>
              </li>
              <li>
                <div className="related_products_img_title">
                  <img src={pic} alt="pic"/>
                  <p className="related-topics-item-title">Barebone AVTECH PRO G70</p>
                </div>
                <button className="related-topics-button">Add to cart</button>
              </li>
            </ul>
          </div>
        </div>
        </div>
  );
};

export default CustomNavs;