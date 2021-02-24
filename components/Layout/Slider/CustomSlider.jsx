import {useState} from 'react';
import Characteristics from './Characteristics';
import {Carousel} from 'react-bootstrap';

const CustomSlider = ({monoblocks}) => {

   const [currImage, setCurrImage] = useState(0);
   const {monoblock, configuration} = monoblocks;
   return (
       <div className="Slide-Form-Wrapper">
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
                           style={{marginBottom: 25}}
                           alt=""
                       />
                    </Carousel.Item>
                ))}
             </Carousel>
             <div className="Custom-Thumbnail">
                {monoblock.images.map((imageConfig, index) => (
                    <span key={index}><img onClick={() => setCurrImage(index)} className="Custom-Thumbnail-Item"
                                           src={imageConfig.image} alt=""/></span>
                ))}
             </div>
          </div>
          <div className="align-self-center Charac-Respon-Padd">
             <Characteristics monoblocks={monoblocks}/>
          </div>
       </div>
   )
};

export default CustomSlider;
