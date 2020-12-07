import { useState } from 'react';
/* import Slider from 'react-slick'; */
/* import Carousel, { Dots, arrowsPlugin, autoplayPlugin } from '@brainhubeu/react-carousel'; */
import '@brainhubeu/react-carousel/lib/style.css';
import Characteristics from './Characteristics';
import imageOne from '../../../static/img/a1.jpg';
import imageTwo from '../../../static/img/a2.jpg';
import imageThree from '../../../static/img/a3.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Carousel, Row, Col } from 'react-bootstrap';

const CustomSlider = () => {
  const [images, setSlides] = useState([imageOne, imageTwo, imageThree].map((image) => <img src={image} />));

  const [currImage, setCurrImage] = useState(0);
  /* return (
    <div>
      <div style={{ display: 'flex', border: '1px solid red', justifyContent: 'space-between', flexFlow: 'row', alignContent: 'center', textAlign: 'center' }}>
        <Carousel
        arrows
        infinite
        onChange={setCurrImage}
        value={currImage}
        animationSpeed={1000}
        slides={images}
        style={{ border: '1px solid green' }}
      />
      <Characteristics />
    </div>
    <Dots
        number={images.length}
        thumbnails={images}
        value={currImage}
        onChange={setCurrImage}
        number={images.length}
      />
    </div>
  ); */
  return (
   <Row>
     <Col sm={6}>
        <Carousel
          onSelect={(index) => setCurrImage(index)} activeIndex={currImage}
        >
          <Carousel.Item>
            <img
              className="d-block w-65 Carousel-Image"
              src={imageOne}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-65 Carousel-Image"
              src={imageTwo}
              alt="Third slide"
            />
          </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-65 Carousel-Image"
                src={imageThree}
                alt="Third slide"
              />
            </Carousel.Item>
        </Carousel>
          <div className="Custom-Thumbnail">
            <span><img onClick={() => setCurrImage(0)} className="Custom-Thumbnail-Item" src={imageOne} alt=""/></span>
            <span><img onClick={() => setCurrImage(1)} className="Custom-Thumbnail-Item" src={imageTwo} alt=""/></span>
            <span><img onClick={() => setCurrImage(2)} className="Custom-Thumbnail-Item" src={imageThree} alt=""/></span>
          </div>
      </Col>
     <Col sm={6} style={{ border: '1px solid green' }}>
       <Characteristics />
     </Col>
   </Row>
  );
}

export default CustomSlider;
