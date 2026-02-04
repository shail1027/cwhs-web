import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { BannerItem } from "../../../types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Mainbanner.css"

const SCHOOL_MOTTO = {
  line1: "달의 영감을 따라 빛나고,",
  line2: "꿈으로 별을 따라가며 만드는 무한한 가능성",
};

const BANNER_ITEMS: BannerItem[] = [
  {
    id: 1,
    image: "/images/banner_cwhs1.jpg",
    alt: "천월고등학교 본관",
  },
  {
    id: 2,
    image: "/images/banner_cwhs2.jpg",
    alt: "천월고등학교 운동장",
  },
  {
    id: 3,
    image: "/images/banner_cwhs3.jpg",
    alt: "천월고등학교 별관",
  },
  {
    id: 4,
    image: "/images/banner_cwhs4.jpg",
    alt: "천월고등학교 별관",
  },
  {
    id: 5,
    image: "/images/banner_cwhs5.jpg",
    alt: "천월고등학교 별관",
  },
  {
    id: 6,
    image: "/images/banner_cwhs6.jpg",
    alt: "천월고등학교 별관",
  },
];

const MainBanner = () => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        loop={true}
        className="bannerSwiper"
      >
        {BANNER_ITEMS.map((item) => (
            <SwiperSlide key={item.id}>
                <div className="slide-content">
                    <img
                    src={item.image}
                    alt={item.alt}
                    />
                </div>
                <div className="says says-anime">
                    <p>{SCHOOL_MOTTO.line1}</p>
                    <p>{SCHOOL_MOTTO.line2}</p>
                </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainBanner;
