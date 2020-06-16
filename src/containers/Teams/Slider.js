import React, { useState, Fragment } from "react";
import { Team } from './Team'
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";



export const Slider = ({ teams, mousePosition}) => {
  const [swiper, setSwiper] = useState(null);

  const params = {
    slideClass: 'Teams_item',
    containerClass: 'Teams_Slider', // Replace swiper-container with customized-swiper-container
    effect: 'coverflow',
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    lazy: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    navigation: {
      nextEl: '.Teams_box-btn.Teams_box-btn-next',
      prevEl: '.Teams_box-btn.Teams_box-btn-prev'
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
   

  }
  console.log(swiper)
  return (
    <Fragment >
      <Swiper getSwiper={setSwiper} {...params}
        shouldSwiperUpdate={true}
        rebuildOnUpdate={true}
      >

        {teams.map(team => <Team {...team} key={team.name} />)}
      </Swiper>
      {/* <button className='Teams_box-btn Teams_box-btn-prev' onClick={goPrev}></button> */}
      {/* <button className='Teams_box-btn Teams_box-btn-next' onClick={goNext}></button> */}
    </Fragment >
  );
};
