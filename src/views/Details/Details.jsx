import style from "./Details.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProfessionalById } from "../../features/apiPetitions";
import { BsCalendar2Date } from 'react-icons/bs'
import { AiOutlineStar } from 'react-icons/ai'
import Calendary from "../../components/Calendary/Calendary";


export default function Details() {
  const [profesional, setProfessional] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getProfessionalById(id, setProfessional);
  }, []);

  return (
    <div className={style.container}>
      <div className={style.detailproffesional}>
        <div className={style.imgageandtitle}>
          <div>
            <img
              className={style.imageDetails}
              src={profesional.avatar}
              alt=""
            />
          </div>

            <div className = {style.name}>
              <h1>{profesional.name}{` ${profesional.lastName}`}</h1>
          <div>
            <h1>
              {profesional.name}
              {` ${profesional.lastName}`}
            </h1>
          </div>

          <div className={style.subtitulo}>
            <h3>Perfil profesional:</h3>
          </div>

          <div className={style.description}>
            <div>
              <p className={style.paragraph}>
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                in enim fringilla, auctor velit in, tempus massa. Aliquam id
                arcu ut est ullamcorper dapibus quis et felis. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Proin dapibus erat malesuada tincidunt
                ultricies. Integer id leo at odio egestas blandit. Integer
                posuere consequat dapibus. Sed facilisis justo diam. Aliquam id
                arcu ut est ullamcorper dapibus quis et felis. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Aliquam id arcu ut est ullamcorper dapibus quis
                et felis. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas.'
              </p>
            </div>

            <div className={style.moreInfo}>
              <button>Leer+</button>
            </div>

            <div className={style.description}>
              <div>
              <p className={style.paragraph}>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in enim fringilla, auctor velit in, tempus massa. Aliquam id arcu ut est ullamcorper dapibus quis et felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin dapibus erat malesuada tincidunt ultricies. Integer id leo at odio egestas blandit. Integer posuere consequat dapibus. Sed facilisis justo diam. Aliquam id arcu ut est ullamcorper dapibus quis et felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam id arcu ut est ullamcorper dapibus quis et felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'</p>
              </div>
            </div>
      </div>

 

    </div>
    <div className = {style.agendacita}>
          <h1 className = {style.citas}>Agenda tu cita</h1>
          <div className = {style.calendario}>
            <button className={style.reservahoy}>Reserva hoy</button>
            <BsCalendar2Date className = {style.iconocalendary}></BsCalendar2Date>

          </div>

          <div className = {style.reviews}>
            <div className = {style.comentary}>
              <h1>Puntualidad</h1>
              <h1>Buen trato</h1>
              <h1>Recomendacion</h1>
            </div>

            <div className = {style.calification}>
              <div className = {style.starline1}>
              <AiOutlineStar className={style.stars}></AiOutlineStar>
              <AiOutlineStar className={style.stars}></AiOutlineStar>
             <AiOutlineStar className={style.stars}></AiOutlineStar>
              <AiOutlineStar className={style.stars}></AiOutlineStar>
              <AiOutlineStar className={style.stars}></AiOutlineStar>

              </div>
              <div className = {style.starline2}>
              <AiOutlineStar className={style.stars}></AiOutlineStar>
              <AiOutlineStar className={style.stars}></AiOutlineStar>
             <AiOutlineStar className={style.stars}></AiOutlineStar>
              <AiOutlineStar className={style.stars}></AiOutlineStar>
              <AiOutlineStar className={style.stars}></AiOutlineStar>

              </div>
              <div className = {style.starline3}>
              <AiOutlineStar className={style.stars}></AiOutlineStar>
              <AiOutlineStar className={style.stars}></AiOutlineStar>
             <AiOutlineStar className={style.stars}></AiOutlineStar>
              <AiOutlineStar className={style.stars}></AiOutlineStar>
              <AiOutlineStar className={style.stars}></AiOutlineStar>

              </div>

            </div>
          
          </div>


          </div>
        </div>
      </div>
      <div>
        <Calendary />
      </div>
    </div>
  );
}

