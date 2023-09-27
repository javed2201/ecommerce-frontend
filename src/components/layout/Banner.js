import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from './Image';

const Banner = () => {
    let [dotActive, setDotActive] = useState(0)

    const settings = {
        dots: true,
        beforeChange: (prev, next) => {
          setDotActive(next);
        },
        arrows:false,
        speed: 400,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,

        appendDots: dots => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "7%",
                transform: "translateY(-50%)"
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
            style={
                i === dotActive  
                ? {
                    width: "30px",
                    color: "#262626",
                    borderRight: "3px #262626 solid",
                    padding: "10px 0"
                  }
                 :{
                    width: "30px",
                    color: "transparent",
                    borderRight: "3px white solid",
                    padding: "10px 0"
                  } 
              }
            >
              0{i + 1}
            </div>
          ),
        
          responsive: [
            {
              breakpoint: 576,
              settings: {
                dots: true,

                appendDots: dots => (
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "2%",
                      transform: "translateY(-50%)"
                    }}
                  >
                    <ul style={{ margin: "0px" }}> {dots} </ul>
                  </div>
                ),
                customPaging: i => (
                  <div
                  style={
                      i === dotActive  
                      ? {
                          width: "23px",
                          padding: "0 3px",
                          color: "#262626",
                          borderRight: "3px #262626 solid",
                          fontSize: "12px",
                        }
                       :{
                          width: "20px",
                          padding: "0 3px",
                          color: "transparent",
                          borderRight: "3px white solid",
                          fontSize: "12px",
                        } 
                    }
                  >
                    0{i + 1}
                  </div>
                ),
              }
            },
          ]
      };

      
  
  return (
        <Slider {...settings}>
          <Link to="#">
            <div>
                <Image className="block" imgsrc="assets/banner.png" />
            </div>
          </Link>
          <Link to="#">
            <div>
                <Image className="block" imgsrc="assets/banner.png" />
            </div>
          </Link>
          <Link to="#">
            <div>
                <Image className="block" imgsrc="assets/banner.png" />
            </div>
          </Link>
        </Slider>
  )
}

export default Banner