import React from "react";
import style from "./ReviewProfessionalHome.module.css";
import { getAllReview } from "../../features/apiPetitions";
import { useEffect, useState } from "react";
import CardReviewHome from "./CardReviewHome.jsx";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function ReviewProfessionalHome() {
  const [professionalReview, setProfessionalReview] = useState();
  const orderReview = professionalReview?.sort((a, b) => b.score - a.score);
  const sliceReview = orderReview?.slice(0, 7);
  useEffect(() => {
    getAllReview(setProfessionalReview);
  }, []);

  return (
    <div className={style.container}>
      <p className={style.title}>Reviews Destacadas</p>

      <div className={style.containerswiper}>
        {
          <>
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              pagination={{
                dynamicBullets: true,
              }}
              effect="slide"
              loop={true}
              loopAdditionalSlides={1}
            
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                600: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
                1500: {
                  slidesPerView: 3,
                },
                1700: {
                  slidesPerView: 4,
                },
              }}
            >
              {sliceReview?.map((review) => (
                <SwiperSlide key={review.id} className={style["swiper-slide"]}>
                  <div className={style.card}>
                    <CardReviewHome
                      professionalId={review.professionalId}
                      avatar={review.avatar}
                      name={review.professionalName}
                      lastName={review.professionalLastName}
                      puntualidad={review.puntualidad}
                      trato={review.trato}
                      general={review.general}
                      score={review.score}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          
          </>
        }
      </div>
    </div>
  );
}
