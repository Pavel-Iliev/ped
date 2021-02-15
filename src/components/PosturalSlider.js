import PosturalCard from './posturalCard/PosturalCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper';
// import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Pagination]);

function PosturalSlider() {
  return(
    <>
      <Swiper
        spaceBetween={200}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide key={'slide-1'}><PosturalCard /></SwiperSlide>
        <SwiperSlide key={'slide-2'}><PosturalCard /></SwiperSlide>
        <SwiperSlide key={'slide-3'}><PosturalCard /></SwiperSlide>
        <SwiperSlide key={'slide-4'}><PosturalCard /></SwiperSlide>
      </Swiper>
    </>
  ); 
}

export default PosturalSlider;