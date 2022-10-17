import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./components.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { Container, Typography } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Banner = () => {

  // banner data

  const banner = [
    {
      "title": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia hic est cupiditate necessitatibus incidunt, minima tempore doloribus! Ducimus, libero sapiente!",
      "image": "https://i.ibb.co/d75pqB1/image2.jpg"
    },
    {
      "title": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia hic est cupiditate necessitatibus incidunt, minima tempore doloribus! Ducimus, libero sapiente!",
      "image": "https://i.ibb.co/XJhhtz6/image3.jpg"
    },
    {
      "title": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia hic est cupiditate necessitatibus incidunt, minima tempore doloribus! Ducimus, libero sapiente!",
      "image": "https://i.ibb.co/CWK0qkP/image1.jpg"
    },
  ]
  return (
    <div className="mx-auto md:mb-0 sm:mb-2">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={2500}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          banner.map((item, index) =>
            <SwiperSlide key={index}>
              <div style={{ width: '100%' }}>
                <div className="md:flex justify-between items-center sm:flex-row-reverse">
                  <img src={item.image} alt="" style={{ width: '100vh', height: '80vh' }} />
                  <Container maxWidth="sm">
                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold', mb: 2, textAlign: 'left' }}>{item.title}</Typography>
                    <div className="flex justify-start">
                      <button className="btn btn-primary rounded-full">
                        Explore More
                        <NavigateNextIcon />
                      </button>
                    </div>
                  </Container>
                </div>
              </div>
            </SwiperSlide>
          )
        }
      </Swiper>
    </div>
  );
};

export default Banner;