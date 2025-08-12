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
  height: string;
}

export default function ImageCarousel({
  images,
  title,
  subtitle,
  height
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
              className={`w-full h-[${height}] object-cover`}
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
            <h2 className="text-4xl font-semibold mb-5 drop-shadow-sm drop-shadow-black/50" dangerouslySetInnerHTML={{ __html: title }}>
            </h2>
          )}
          {subtitle && <p className="text-2xl drop-shadow-lg mb-4">{subtitle}</p>}
        </div>
      )}
    </div>
  );
}
