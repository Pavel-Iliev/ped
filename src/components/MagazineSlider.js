import MagazineCard from './magazineCard/MagazineCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper';
// import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Pagination]);

function MagazineSlider() {
  return(
    <>
      <Swiper
        spaceBetween={15}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide key={'slide-1'}><MagazineCard /></SwiperSlide>
        <SwiperSlide key={'slide-2'}><MagazineCard /></SwiperSlide>
        <SwiperSlide key={'slide-3'}><MagazineCard /></SwiperSlide>
        <SwiperSlide key={'slide-4'}><MagazineCard /></SwiperSlide>
      </Swiper>
    </>
  ); 
}

export default MagazineSlider;