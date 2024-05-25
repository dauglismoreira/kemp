'use client';

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './styles.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimateArrow } from '../animateArrow';

export const PrimarySlider = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animateArrow, setAnimateArrow] = useState(false)
  const [animateArrowNext, setAnimateArrowNext] = useState(false)
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>()

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.realIndex)
  }

  useEffect(() => {
    if (thumbsSwiper) {
        thumbsSwiper.slideToLoop(activeIndex)
    }
  }, [activeIndex, thumbsSwiper])

  const data = [
    {
      id:1,
      src:'#',
      alt:'Teste',
      category:'Empreendimento',
      title:'Seu caminho para viver perto do mar.'
    },
    {
      id:2,
      src:'#',
      alt:'Teste',
      category:'Empreendimento',
      title:'Seu caminho para viver perto do mar.'
    },
    {
      id:3,
      src:'#',
      alt:'Teste',
      category:'Empreendimento',
      title:'Seu caminho para viver perto do mar.'
    },
    {
      id:4,
      src:'#',
      alt:'Teste',
      category:'Empreendimento',
      title:'Seu caminho para viver perto do mar.'
    },
  ]

  return(
    <div className="slider-container">
       <Swiper
          modules={[Navigation, Thumbs]}
          className="primarySlider"
          loop={true}
          thumbs={{ swiper: thumbsSwiper }}
          navigation={{
              nextEl: '.button-next',
              prevEl: '.button-prev',
          }}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
      >
          {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="primary-slide-item" style={{backgroundImage:`url('${item.src}')`}}>
                  <div className="slide-item-container">
                    <h3>{item.category}</h3>
                    <h1>{item.title}</h1>
                    <Link
                      href="#"
                      onMouseOver={() => setAnimateArrow(true)}
                      onMouseLeave={() => setAnimateArrow(false)}
                    >Saiba mais <AnimateArrow active={animateArrow}/></Link>
                  </div>
                </div>  
              </SwiperSlide>
          ))}
      </Swiper>
      <div className="slider-navigation">
        <div className="active-slide">
          {activeIndex + 1}/{data.length}
        </div>
        <div className="navigation">
          <Swiper
            watchSlidesProgress
            onSwiper={setThumbsSwiper}
            modules={[Navigation, Thumbs]}
            loop={true}
            spaceBetween={30}
            slidesPerView={5}
            freeMode={true}
            className="mySwiper"
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <span className="dot"></span> 
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="arrow">
         <button
          className="button-next"
          onMouseOver={() => setAnimateArrowNext(true)}
          onMouseLeave={() => setAnimateArrowNext(false)}
         ><AnimateArrow color="bg-darkBlue" active={animateArrowNext}/></button>
        </div>
      </div>
    </div>
  )
}