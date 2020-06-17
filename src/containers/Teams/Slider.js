import React, { useState, Fragment } from "react";
import Team from './Team'
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";



export const Slider = ({ teams, handleOpenInfoTeam }) => {
  // eslint-disable-next-line 
  const [swiper, setSwiper] = useState(null);

  const params = {
    slideClass: 'Teams_item',
    containerClass: 'Teams_Slider',
    effect: 'coverflow',
    slidesPerView: 3,
    spaceBetween: 200,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    lazy: true,
    freeMode: true,
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
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: true
    // },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },


  }
  return (
    <Fragment >
      <Swiper getSwiper={setSwiper} {...params}
        shouldSwiperUpdate={true}
        rebuildOnUpdate={true}
      >
        {teams.map(team => <Team {...team} key={team.name} handleOpenInfoTeam={handleOpenInfoTeam} />)}
      </Swiper>
    </Fragment >
  );
};
