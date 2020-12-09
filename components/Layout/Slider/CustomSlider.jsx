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
  /* const [images, setSlides] = useState([imageOne, imageTwo, imageThree].map((image) => <img src={image} />)); */

  const [currImage, setCurrImage] = useState(0);
  return (
   <div className="Container Slide-Form-Wrapper">
     <div className="align-self-center Slide">
        <Carousel
          onSelect={(index) => setCurrImage(index)} activeIndex={currImage}
          fade={true}
        >
          <Carousel.Item>
            <img
              className="d-block Carousel-Image"
              src={imageOne}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block Carousel-Image"
              src={imageTwo}
              alt="Third slide"
            />
          </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block Carousel-Image"
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
      </div>
     <div className="align-self-center Charac-Respon-Padd">
         <Characteristics />
     </div>
   </div>
  );
}

export default CustomSlider;
