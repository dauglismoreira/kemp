'use client';

import { useState } from 'react';
import './styles.css';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import Fancybox from './../../utils/fancybox';

export const EnterprisePhotosGallery = ({data}:any) => {
  const [typeSelected, setTypeSelected] = useState('gallery_primary')
  const [activeIndex, setActiveIndex] = useState(0)

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.realIndex)
  }

  const galleries = [
    {
      label:'Perspectivas',
      target:'gallery_primary'
    },
    {
      label:'Decorados',
      target:'gallery_secondary'
    },
  ]
  
  return(
    <div className="enterprise-gallery">
      <h3>Galeria</h3>
      <ul className="enterprise-menu mobile">
        {galleries.map((item:any, index:number) => (
          <li
            key={index}
            className={`${typeSelected === item.target ? 'active' : ''}`}
            onClick={() => setTypeSelected(item.target)}
          >{item.label}</li>
        ))}
      </ul>
      <select onChange={(e) => setTypeSelected(e.target.value)} className="select-menu desktop">
        {galleries.map((item:any, index:number) => (
          <option
            key={index}
            value={item.target}
          >{item.label}</option>
        ))}
      </select>
      <div className="enterprise-gallery-content">
        <div className="swipper-container">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            modules={[Navigation]}
            className="enterprisePhotosSwiper"
            onSlideChange={(swiper) => handleSlideChange(swiper)}
            breakpoints={{
              768: {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
            }}
            navigation={{
              nextEl: '.ent-button-next',
              prevEl: '.ent-button-prev',
          }}
          >
            {data.progress_galery.map((item:any, index:number) => (
              <SwiperSlide key={index}>
                <Fancybox
                    key={index}
                    options={{ infinite: false }}
                    href={item.src}
                    delegate="[data-fancybox='gallery']"
                >
                    {/*eslint-disable-next-line @next/next/no-img-element*/}
                    <img
                      src={item.src}
                      data-fancybox="gallery"
                      data-src={item.src}
                    />
                    <p className="text-regularGray text-xs font-secondary font-semibold mt-2">Legenda</p>
                </Fancybox>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="enterprise-gallery-navigation">
        <div className="arrows">
          <button className="ent-button-prev"><BsArrowLeft /></button>
          <button className="ent-button-next"><BsArrowRight /></button>
        </div>
        <div className="index">
          <span>{activeIndex + 1} — {data.progress_galery.length}</span>
        </div>
      </div>
    </div>
  )
}