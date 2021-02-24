import {Tabs, Tab} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {useSelector} from "react-redux";

const CustomNavs = ({monoblock}) => {

   const product = monoblock.monoblock;

   const configurator = useSelector(state => state.configurator);

   const renderPricePlans = () => (
       configurator.payments.length ?
           configurator.payments.map((item, i) => (
               <div className="col-lg-2 col-md-4 col-sm-6" key={i}>
                  <div className="price-plan">
                     <span className="gsd-orange">{item} <sup>€</sup></span>
                     <p>{i + 1} {i === 0 ? 'month' : 'months'}</p>
                  </div>
               </div>
           ))
           : null
   );

   const renderFeatures = (features) => (
       features.length ?
           features.map((item, i) => (
               <tr key={i}>
                  <th className="custom-td-key">{item.feature.name}</th>
                  <td className="custom-td-value">{item.value}</td>
               </tr>
           ))
           : null
   );

   return (
       <div>
          <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
             <Tab eventKey="home" title="Calculation">
                <div className="tab-content-wrapper">
                   <div className="container">
                      <div className="row">
                         {renderPricePlans()}
                      </div>
                   </div>
                </div>
             </Tab>

             <Tab eventKey="Additional information" title="Description">
                <div className="tab-content-wrapper">
                   <div className="container">
                      <div className="row">
                         <div className="col-12">
                            {
                               product && product.description ?
                                   <div dangerouslySetInnerHTML={{__html: product.description}}>
                                   </div>
                                   : null
                            }
                         </div>
                      </div>
                   </div>
                </div>
             </Tab>

             <Tab eventKey="info" title="Additional information">
                <div className="tab-content-wrapper">
                   <p className="description">Additional information</p>
                   <Table striped bordered>
                      <tbody>
                      {
                         product.features ?
                             renderFeatures(product.features)
                             : null
                      }
                      {/*<tr>*/}
                      {/*   <th className="custom-td-key">Motherboard</th>*/}
                      {/*   <td className="custom-td-value">H310</td>*/}
                      {/*</tr>*/}
                      {/*<tr>*/}
                      {/*   <th className="custom-td-key">Processor</th>*/}
                      {/*   <td className="custom-td-value">CPU Intel Celeron/Dual Core/i3/i5/i7- 8th generation</td>*/}
                      {/*</tr>*/}
                      {/*<tr>*/}
                      {/*   <th className="custom-td-key">RAM</th>*/}
                      {/*   <td className="custom-td-value">2/4/8/16/32 Gb DDR4</td>*/}
                      {/*</tr>*/}
                      {/*<tr>*/}
                      {/*   <th className="custom-td-key">Slot (M.2 SSD)</th>*/}
                      {/*   <td className="custom-td-value">120/240/480/960 Gb, form-factor – M.2</td>*/}
                      {/*</tr>*/}
                      {/*<tr>*/}
                      {/*   <th className="custom-td-key">Graphics</th>*/}
                      {/*   <td className="custom-td-value">Integrated Intel HD Graphics</td>*/}
                      {/*</tr>*/}
                      {/*<tr>*/}
                      {/*   <th className="custom-td-key">USB Ports</th>*/}
                      {/*   <td className="custom-td-value">USB 2.0×1, USB 3.1×4</td>*/}
                      {/*</tr>*/}
                      {/*<tr>*/}
                      {/*   <th className="custom-td-key">Webcam and Microphone</th>*/}
                      {/*   <td className="custom-td-value">Yes</td>*/}
                      {/*</tr>*/}
                      {/*<tr>*/}
                      {/*   <th className="custom-td-key">Touchscreen</th>*/}
                      {/*   <td className="custom-td-value">No</td>*/}
                      {/*</tr>*/}
                      {/*<tr>*/}
                      {/*   <th className="custom-td-key">I/O (Input/Output) Ports</th>*/}
                      {/*   <td className="custom-td-value">Audio-out, Microphone – in, SD-card reader</td>*/}
                      {/*</tr>*/}
                      {/*<tr>*/}
                      {/*   <th className="custom-td-key">Built in speakers</th>*/}
                      {/*   <td className="custom-td-value">2-channel</td>*/}
                      {/*</tr>*/}
                      {/*<tr>*/}
                      {/*   <th className="custom-td-key">Wireless data transmission</th>*/}
                      {/*   <td className="custom-td-value">802.11 b/g/n (PCI-E)</td>*/}
                      {/*</tr>*/}
                      {/*<tr>*/}
                      {/*   <th className="custom-td-key">LAN</th>*/}
                      {/*   <td className="custom-td-value">10/100/1000 mbps</td>*/}
                      {/*</tr>*/}
                      {/*<tr>*/}
                      {/*   <th className="custom-td-key">Video output</th>*/}
                      {/*   <td className="custom-td-value">HDMIx1</td>*/}
                      {/*</tr>*/}
                      {/*<tr>*/}
                      {/*   <th className="custom-td-key">Power Supply</th>*/}
                      {/*   <td className="custom-td-value">External</td>*/}
                      {/*</tr>*/}
                      </tbody>
                   </Table>
                </div>

             </Tab>
          </Tabs>


          {/*   <div className="related-products">*/}
          {/*      <p className="description">Related topics</p>*/}
          {/*      <div>*/}
          {/*         <ul className="related-products-list">*/}
          {/*            <li>*/}
          {/*               <div className="related_products_img_title">*/}
          {/*                  <img src={pic} alt="pic"/>*/}
          {/*                  <p className="related-topics-item-title">Barebone AVTECH PRO G70</p>*/}
          {/*               </div>*/}
          {/*               <button className="related-topics-button">Add to cart</button>*/}
          {/*            </li>*/}
          {/*            <li>*/}
          {/*               <div className="related_products_img_title">*/}
          {/*                  <img src={pic} alt="pic"/>*/}
          {/*                  <p className="related-topics-item-title">Barebone AVTECH PRO G70</p>*/}
          {/*               </div>*/}
          {/*               <button className="related-topics-button">Add to cart</button>*/}
          {/*            </li>*/}
          {/*            <li>*/}
          {/*               <div className="related_products_img_title">*/}
          {/*                  <img src={pic} alt="pic"/>*/}
          {/*                  <p className="related-topics-item-title">Barebone AVTECH PRO G70</p>*/}
          {/*               </div>*/}
          {/*               <button className="related-topics-button">Add to cart</button>*/}
          {/*            </li>*/}
          {/*            <li>*/}
          {/*               <div className="related_products_img_title">*/}
          {/*                  <img src={pic} alt="pic"/>*/}
          {/*                  <p className="related-topics-item-title">Barebone AVTECH PRO G70</p>*/}
          {/*               </div>*/}
          {/*               <button className="related-topics-button">Add to cart</button>*/}
          {/*            </li>*/}
          {/*         </ul>*/}
          {/*      </div>*/}
          {/*   </div>*/}
       </div>
   );
};

export default CustomNavs;