"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ImageCarouselProps {
  images: string[];
  title?: string;
  subtitle?: string;
  textWidth?: string;
}

export default function ImageCarousel({
  images,
  title,
  subtitle,
}: ImageCarouselProps) {
  return (
    <div className="w-full mx-auto relative">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="rounded-b-2xl overflow-hidden"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[600px] object-cover"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {(title || subtitle) && (
        <div
          className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[800px] z-10 text-white text-center px-4`}
        >
          {title && (
            <h2 className="text-5xl font-barlow-condensed font-bold mb-2 drop-shadow-lg">
              {title}
            </h2>
          )}
          {subtitle && <p className="text-lg drop-shadow-lg">{subtitle}</p>}
        </div>
      )}
    </div>
  );
}
