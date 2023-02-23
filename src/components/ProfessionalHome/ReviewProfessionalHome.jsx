import React, { useRef } from "react";
import style from "./ReviewProfessionalHome.module.css";
import { useNavigate } from "react-router-dom";
import { getAllReview } from "../../features/apiPetitions";
import { useEffect, useState } from "react";
import CardReviewHome from "./CardReviewHome.jsx";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const cardWidth = 300;

export default function ReviewProfessionalHome() {
  const navigate = useNavigate();
  const [professionalReview, setProfessionalReview] = useState();
  const orderReview = professionalReview?.sort((a, b) => b.score - a.score);
  const sliceReview = orderReview?.slice(0, 7);
  useEffect(() => {
    getAllReview(setProfessionalReview);
  }, []);
  const containerRef = useRef(null); // referencia al contenedor que envuelve las tarjetas

  const calculateSlidesPerView = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      return Math.floor(containerWidth / cardWidth);
    } else {
      return 1;
    }
  };

  return (
    <div className={style.container}>
      <p className={style.title}>Reviews Destacadas</p>

      <div className={style.containerswiper}>
        {
          <>
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              pagination={{
                dynamicBullets: true,
              }}
              loop={true}
              slidesPerView={calculateSlidesPerView()}
              onResize={() => containerRef.current.update()}
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
            <div className={style["pagination"]}>
              <div className={style["swiper-button-next"]} />
              <div className={style["swiper-button-prev"]} />
            </div>
          </>
        }
      </div>
    </div>
  );
}
