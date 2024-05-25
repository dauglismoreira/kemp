import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useState } from 'react';

export const ProgressSwiperGallery = ({data}:any) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.realIndex)
  }

  return(
    <div className="enterprise-progress-gallery">
      <div className="block pl-4 lg:pl-0">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={10}
          centeredSlides={false}
          loop={true}
          modules={[Navigation]}
          className="enterpriseSwiper"
          onSlideChange={(swiper) => handleSlideChange(swiper)}
          breakpoints={{
            768: {
              slidesPerView: 5,
              spaceBetween: 10,
              centeredSlides: true
            },
          }}
          navigation={{
            nextEl: '.pro-button-next',
            prevEl: '.pro-button-prev',
        }}
        >
          {data.progress_galery.map((item:any, index:number) => (
            <SwiperSlide key={index}>
              <img src={item.src}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="enterprise-progress-navigation bg-white">
        <div className="enterprise-navigation-container px-4 lg:px-0">
          <div className="arrows">
            <button className="pro-button-prev"><BsArrowLeft /></button>
            <button className="pro-button-next"><BsArrowRight /></button>
          </div>
          <div className="index">
            <span>{activeIndex + 1} — {data.progress_galery.length}</span>
          </div>
        </div>
      </div>
    </div>
  )
}