import { useState } from 'react';
import Carousel, { Dots, arrowsPlugin, autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import imageOne from '../../../static/img/a1.jpg';
import imageTwo from '../../../static/img/a2.jpg';
import imageThree from '../../../static/img/a3.png';

const CustomSlider = () => {
  const [images, setSlides] = useState([
    <img src={imageOne} />,
    <img src={imageTwo} />,
    <img src={imageThree} />,
  ]);

  const [currImage, setCurrImage] = useState(0);

  return (
    <div>
      <Carousel
        value={currImage}
        slides={images}
        onChange={setCurrImage}
        animationSpeed={1000}
        plugins={[
            'infinite',
           {
             resolve: autoplayPlugin,
             options: {
               interval: 2000,
             }
           }, 
          // {
          //   resolve: arrowsPlugin,
          //   options: {
          //     arrowLeft: <button>hello</button>,
          //     arrowLeftDisabled:<button>hello</button>,
          //     arrowRight: <button>hello</button>,
          //     arrowRightDisabled: <button>hello</button>,
          //     addArrowClickHandler: true,
          //   }
          // }
        ]}
      />
      <Dots
        number={images.length}
        thumbnails={images}
        value={currImage}
        onChange={setCurrImage}
        number={images.length}
      />
    </div>
  );
}

export default CustomSlider;
