import {
  Col,
  Row,
  Container
} from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-Menu-Container">
      <Container>
      <Row>
        <Col>
          <h3 className="Footer-Menu-Header">
            Main
          </h3>
          <div>
            <ul className="Footer-Menu-List">
              <li>Main</li>
              <li>Company Profile</li>
              <li>Services</li>
              <li>Solutions</li>
              <li>Career</li>
              <li>Newsroom</li>
              <li>Contacts</li>
            </ul>
          </div>
        </Col>
        <Col>
          <h3 className="Footer-Menu-Header">
            For Partners
          </h3>
          <div>
            <ul className="Footer-Menu-List">
              <li>Become a Partner</li>
              <li>Consumer distribution</li>
              <li>Enterprise distribution</li>
              <li>Logistics</li>
              <li>Warranty</li>
            </ul>
          </div>
        </Col>
        <Col>
        </Col>
        <Col>
          <h3 className="Footer-Menu-Header">
            Contacs
          </h3>
          <div>
            <ul className="Footer-Menu-List">
              <p>
                <span className="Prefix">+371</span>
                <span className="Number-Ph">678-852-51</span>
              </p>
              <p>
                info@gsdas.eu
              </p>
              <p>
		            Rīga, Ernesta Birznieka-Upīša iela 20A - 4
              </p>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
    <footer className="Footer-Bottom">
      <Container>
        <div className="Footer-Bottom-Inner">
          <p>Global Smart Distribution© All rights reserved.</p>
          <p>Powered by GSD</p>
        </div>
      </Container>
    </footer>
    </div>
  );
}

export default Footer;
