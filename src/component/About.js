import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Fade, Reveal } from "react-reveal/";
import Slider from "react-slick";

class About extends Component {
  render() {
    let jhonData = this.props.jhonData;
    var { aClass } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      autoplay: true,
      pauseOnHover: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <section className={`${aClass}`} id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 d-flex align-items-center">
              <Fade bottom cascade duration={1000}>
                <div className="about_content">
                  <h2 className="t_color">{jhonData.aboutme}</h2>
                  <h6>{jhonData.role}</h6>
                  <p>{jhonData.aboutdetails}</p>
                  <Link to="/" className="theme_btn active">
                    Hire Me
                  </Link>
                  <Link to="/" className="theme_btn">
                    Download CV
                  </Link>
                </div>
              </Fade>
            </div>

            <div className="col-lg-5" style = {{backgroundColor:"black", borderRadius: "30px"}}>
              <Slider {...settings} className="testimonial_slider" >
                <div className="about_img">
                  <Reveal effect="fadeInRight" duration={1500}>
                    <img
                      src={require("../image/apporoach_man_img.jpg")}
                      alt=""
                    />
                  </Reveal>
                </div>

                <div className="about_img">
                  <Reveal effect="fadeInRight" duration={1500}>
                    <img
                      src={require("../image/apporoach_man_img4.jpg")}
                      alt=""
                    />
                  </Reveal>
                </div>

                <div className="about_img" >
                  <Reveal effect="fadeInRight" duration={1500}>
                    <img src={require("../image/app1.jpg")} alt="" />
                  </Reveal>
                </div>
                <div className="about_img">
                  <Reveal effect="fadeInRight" duration={1500}>
                    <img src={require("../image/app2.jpg")} alt="" />
                  </Reveal>
                </div>
                <div className="about_img">
                  <Reveal effect="fadeInRight" duration={1500}>
                    <img src={require("../image/app3.jpg")} alt="" />
                  </Reveal>
                </div>
                <div className="about_img">
                  <Reveal effect="fadeInRight" duration={1500}>
                    <img src={require("../image/app7.jpeg")} alt="" />
                  </Reveal>
                </div>
                <div className="about_img">
                  <Reveal effect="fadeInRight" duration={1500}>
                    <img src={require("../image/app6.jpeg")} alt="" />
                  </Reveal>
                </div>
                <div className="about_img">
                  <Reveal effect="fadeInRight" duration={1500}>
                    <img src={require("../image/app8.jpeg")} alt="" />
                  </Reveal>
                </div>
                <div className="about_img">
                  <Reveal effect="fadeInRight" duration={1500}>
                    <img src={require("../image/app4.jpg")} alt="" />
                  </Reveal>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default About;
