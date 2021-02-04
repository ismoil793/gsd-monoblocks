import { useState } from 'react';
/* import Slider from 'react-slick'; */
/* import Carousel, { Dots, arrowsPlugin, autoplayPlugin } from '@brainhubeu/react-carousel'; */
/* import '@brainhubeu/react-carousel/lib/style.css'; */
import Characteristics from './Characteristics';
/* import imageOne from '../../../static/img/a1.jpg';
import imageTwo from '../../../static/img/a2.jpg';
import imageThree from '../../../static/img/a3.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; */
import { Carousel } from 'react-bootstrap';
import Navs from '../Navs';

const CustomSlider = ({ monoblocks }) => {
   console.log('Customslider: ', monoblocks);
  const [currImage, setCurrImage] = useState(0);
  const { monoblock, configuration } = monoblocks;
  return (
   <div className="Container Slide-Form-Wrapper">
     <div className="align-self-center Slide">
        <Carousel
          onSelect={(index) => setCurrImage(index)} activeIndex={currImage}
          fade={true}
        >
          {monoblock.images.map((imageConfig, index) => (
            <Carousel.Item
              key={index}
            >
              <img
                className="d-block Carousel-Image"
                src={imageConfig.image}
                style={{ marginBottom: 25 }}
                alt=""
              />
            </Carousel.Item>
          ))}
        </Carousel>
          <div className="Custom-Thumbnail">
            {monoblock.images.map((imageConfig, index) => (
              <span key={index}><img onClick={() => setCurrImage(index)} className="Custom-Thumbnail-Item" src={imageConfig.image} alt=""/></span>
            ))}
          </div>
      </div>
     <div className="align-self-center Charac-Respon-Padd">
        <Characteristics monoblocks={monoblocks} />
     </div>
   </div>
  );
}

export default CustomSlider;
