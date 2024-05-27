import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules

// slide from lib Swiper

import "./Slide.scss";

const Slide = (props: any) => {
  return <div className="w-full h-full my-2">{props.children}</div>;
};

interface SlideCollectionProps {
  images?: Array<any>;
}
/**
 *
 * @param props images type Array[]
 * @returns
 */
const SlideColection: React.FC<SlideCollectionProps> = (
  props: SlideCollectionProps
) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }}
      loop={true}
      className="swiper-collection">
      {props.images?.map((item, index) => (
        <SwiperSlide key={index}>
          <img
            src={item}
            alt="slide"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const SlidePackage = (props: any) => {
  return (
    <Swiper
      loop={true}
      slidesPerView={1}
      spaceBetween={5}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 1.2,
          spaceBetween: -10
        }
      }}
      className="swiper-package">
      {props.children}
    </Swiper>
  );
};

Slide.Collection = SlideColection;
Slide.Package = SlidePackage;

export default Slide;
