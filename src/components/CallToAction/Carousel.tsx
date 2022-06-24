import styled from '@emotion/styled';
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { CarouselItem } from './CarouselItem';

import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const StyleSwiper = styled(Swiper)`
  height: inherit;
  width: inherit;

  .swiper-button-prev,
  .swiper-button-next {
    transform: scale(70%);
    color: var(--chakra-colors-brand-highlight);
  }

  .swiper-button-prev {
    left: 40px;
  }

  .swiper-button-next {
    right: 40px;
  }

  .swiper-pagination-bullet {
    height: 1rem;
    width: 1rem;
    margin-left: 0.75rem;
    margin-right: 0.75rem;
    background: var(--chakra-colors-dark-info50);
    transition: background-color 200ms;

    &:hover {
      background: var(--chakra-colors-dark-info);
    }
  }

  .swiper-pagination-bullet-active {
    background: var(--chakra-colors-brand-highlight);
  }
`;

export interface CarouselProps {}

export function Carousel() {
  return (
    <StyleSwiper
      modules={[A11y, Autoplay, Keyboard, Navigation, Pagination]}
      autoplay={
        process.env.NODE_ENV === 'production' && {
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }
      }
      keyboard
      loop
      navigation
      pagination={{
        clickable: true,
      }}
      spaceBetween={20}
    >
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <SwiperSlide key={index}>
            <CarouselItem />
          </SwiperSlide>
        ))}
    </StyleSwiper>
  );
}
