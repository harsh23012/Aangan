import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from "./assets/ChhathImages/1000255180.jpg";
import img2 from "./assets/ChhathImages/1000255181.jpg";
import img3 from "./assets/ChhathImages/1000255182.jpg";
import img4 from "./assets/ChhathImages/1000255183.jpg";
import img5 from "./assets/ChhathImages/1000255184.jpg";
import img6 from "./assets/ChhathImages/1000255185.jpg";
import img7 from "./assets/ChhathImages/1000255186.jpg";
import img8 from "./assets/ChhathImages/1000255187.jpg";
import img9 from "./assets/ChhathImages/1000255188.jpg";
import img10 from "./assets/ChhathImages/1000255189.jpg";
import img11 from "./assets/ChhathImages/1000255190.jpg";
import img12 from "./assets/ChhathImages/1000255191.jpg";
import img13 from "./assets/ChhathImages/1000255192.jpg";
import img14 from "./assets/ChhathImages/1000255193.jpg";
import img15 from "./assets/ChhathImages/1000255194.jpg";
import img16 from "./assets/ChhathImages/1000255195.jpg";
import img17 from "./assets/ChhathImages/1000255196.jpg";
import img18 from "./assets/ChhathImages/1000255197.jpg";
import img19 from "./assets/ChhathImages/1000255198.jpg";
import img20 from "./assets/ChhathImages/1000255199.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
];

export default function Carousel() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-4xl font-bold text-white">
            📸 Chhath Memories
          </h2>

          <span className="text-gray-300">
            {images.length} Photos
          </span>

        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden rounded-3xl h-[250px] md:h-[320px]">

                <img src={img} className="  w-full  h-full object-cover"/>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </div>
  );
}