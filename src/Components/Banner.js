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
import slider1 from '../assets/images/slider1.jpg'
import slider2 from '../assets/images/slider_2.jpg'



const Banner = () => {

  // banner data
  // Supporting you through continued change
  // However you're navigating the impacts of COVID, we're here to help

  const banner = [
    {
      "message": "Start Your Company With Us!",
      'title': '  Supporting you through continued change',
      'subtitle': 'Start Your Company With Us!',
      "description": "However you're navigating the impacts of COVID, we're here to help",
      "image": `${slider1}`
    },
    {
      "message": "Business & Finance Consultancy",
      'title': '  Supporting you through continued change',
      'subtitle': 'Business & Finance Consultancy',
      "description": "However you're navigating the impacts of COVID, we're here to help",
      "image": `${slider2}`
    },
    {
      "message": "Start Your Company With Us!",
      'title': '  Supporting you through continued change',
      'subtitle': 'Start Your Company With Us!',
      "description": "However you're navigating the impacts of COVID, we're here to help",
      "image": `${slider1}`
    },
  ]
  return (
    <div className="mx-auto md:mb-0 sm:mb-2">
      <Swiper
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

                <div className="  relative w-full h-screen ">

                  <div className="relative bg-gray-700/.09 w-full h-full ">
                    <img className="w-full  mix-blend-multiply bg-base-200  h-full opacity-95 " src={item.image} alt="" />
                  </div>

                  <div className=" absolute backdrop-blur-[3px] px-2 md:px-24 lg:px-24 w-full -mt-10 flex justify-center items-center h-full justify-items-start text-start  text-white z-10 top-0 left-0 ">
                    <div className="align-middle	">
                      <p className="text-lg lg:text-[24px] tracking-wider my-5 lg:w-3/4 font-semibold md:text-left lg:text-left text-center">{item.message}</p>
                      <h2 className="text-3xl lg:text-6xl md:text-5xl lg:w-3/4 align-middle  md:text-left lg:text-left text-center font-bold ">{item.title}</h2>
                      <p className="text-sm lg:text-md my-5 lg:w-3/4 font-semibold md:text-left lg:text-left text-center">{item.description}</p>
                      <p className="text-sm lg:text-md      lg:w-3/4 font-semibold md:text-left lg:text-left text-center">To serve you better, we will partner you with one of our committed and highly vetted professionals</p>
                      <p className="text-sm lg:text-md my-5 lg:w-3/4 font-semibold md:text-left lg:text-left text-center">Success banking that begins with YOU!</p>


                      {/* <div className="flex justify-start">
                        <a href="#_" class="relative inline-block text-sm lg:text-lg group mx-auto md:m-0 lg:m-0">
                          <span class="relative z-10 block px-5 py-3 md:py-3 lg:py-4 overflow-hidden font-medium leading-tight text-red-800 transition-colors duration-300 ease-out  rounded-full group-hover:text-white">
                            <span class="absolute inset-0 w-full h-full px-7 py-3 md:py-3 lg:py-4 rounded-full bg-primary"></span>
                            <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                            <span class="relative text-white font-semibold">Get Started Now</span>
                          </span>
                          <span class="absolute bottom-0 right-0 w-full h-25 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-full group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </a>

                      </div> */}
                    </div>
                  </div>

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