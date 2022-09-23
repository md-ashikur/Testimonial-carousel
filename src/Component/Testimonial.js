import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Navigation, Autoplay } from "swiper";
import Slide from "./Slide";

const Testimonial = () => {
  const [slides, setSlides] = useState(Slide);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className="px-5 py-5 bg-slate-100">
      <h1 className="text-5xl font-bold uppercase my-5">Testimonial</h1>
      <Swiper
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        breakpoints={{
          390: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {slides.map((elem) => {
          const { id, picture, name, position, logo, description } = elem;

          return (
        //    ==============Slide cards =================
            <SwiperSlide className="flex flex-col items-center" key={id}>
              <img
                className="drop-shadow-lg w-20 relative top-10 rounded-full"
                src={picture}
                alt=""
              />
              <figure className="flex flex-col items-center bg-white h-72 border-4 border-l-transparent border-r-transparent border-b-transparent border-t-indigo-500 py-10 rounded">
                <h5 className="text-[black] text-lg">{name}</h5>
                <p className="text-xl">{position}</p>
                <img className=" w-20 my-3" src={logo} alt="" />
                <p className="mx-5">{description}</p>
              </figure>
            </SwiperSlide>
          );
        })}

        {/* ================
        Navigation buttons
        ============================ */}
        <div className="flex my-5 text-3xl justify-center gap-3">
          <div ref={navigationPrevRef}>
            <BsArrowLeftShort className="w-20 rounded-full bg-white hover:text-indigo-500 hover:pr-3" />
          </div>
          <div ref={navigationNextRef}>
            <BsArrowRightShort className="w-20 rounded-full bg-white hover:text-indigo-500 hover:pl-3" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonial;
