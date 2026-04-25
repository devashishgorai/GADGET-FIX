import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Testimonials() {
  return (
    <div className="py-16">
      <Swiper slidesPerView={1} autoplay>
        <SwiperSlide>
          <div className="glass p-10 text-center max-w-xl mx-auto">
            ⭐⭐⭐⭐⭐
            <p className="mt-4 text-gray-300">
              "Super fast service, my phone works like new!"
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="glass p-10 text-center max-w-xl mx-auto">
            ⭐⭐⭐⭐⭐
            <p className="mt-4 text-gray-300">
              "Best repair shop experience!"
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}