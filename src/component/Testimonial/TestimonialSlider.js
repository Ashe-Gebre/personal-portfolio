import React, {Component} from 'react';
import Slider from 'react-slick';

 class TestimonialSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        pauseOnHover:true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div>
          <Slider {...settings} className="testimonial_slider">
                <div className="item">
                    <div className="author_img">
                        <img src={require('../../image/miu.png')} alt=""/>
                    </div>
                    <h6>Maharashi International University</h6>
                    <span>Feb 2021. Fairfield, IA, United States</span>
                       <p> Masters in Software Development </p>
                </div>
               
                <div className="item">
                    <div className="author_img">
                        <img src={require('../../image/aa.png')} alt=""/>
                    </div>
                    <h6>Addis Ababa University</h6>
                    <span> August 2004 . Addis Ababa, Ethiopia </span>
                       <p> Bachelors in Accounting and Finance </p>
                </div>
          </Slider>
        </div>
      );
    }
  }
  export default TestimonialSlider;