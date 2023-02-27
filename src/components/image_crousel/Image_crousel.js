import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
import React from 'react'
import Image3 from '../../images/Image1.jpeg'
import Image2 from '../../images/Image2.jpeg'
import Image1 from '../../images/Image3.jpeg'
import Image4 from '../../images/Image4.jpeg'
const ImageSlider = () => {
//   console.log(Images)
  let Images = [Image1,Image2,Image3,Image4]
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
  autoplaySpeed: 5000,
   
  };
  return (
    <>
      <div className="imgslider">
        <Slider {...settings}>
          {Images.map((item,index) => (
            <div key={index}>
              {/* <img src={item.src}  alt={item.alt} /> */}
              <img src={item} alt="" />
            </div>
          ))}
        </Slider>
      </div>
          </>
  )
}
export default ImageSlider;