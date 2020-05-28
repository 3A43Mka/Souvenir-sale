import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slider1 from "../../data/img/slider-1.jpg";
import slider2 from "../../data/img/slider-2.jpg";
import slider3 from "../../data/img/slider-3.jpg";

const Slider = () => {
    return (
        <Carousel className="mb-100" showStatus={false} autoPlay={1} interval={5000} infiniteLoop={1} thumbWidth={40} showIndicators={false} showThumbs={false} stopOnHover={false}>
            <div>
                <img src={slider1} alt="slider1" />
                <p className="legend">Самые невероятные сувениры ждут вас!</p>
            </div>
            <div>
                <img src={slider2} alt="slider2" />
                <p className="legend">Великолепная коллекция 2020 года!</p>
            </div>
            <div>
                <img src={slider3} alt="slider3" />
                <p className="legend">Свиньи популярны в этом году!</p>
            </div>
        </Carousel>
    );
};

export default Slider;
