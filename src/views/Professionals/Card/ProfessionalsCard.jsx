import React from "react";
import style from "./index.module.css";
import {useNavigate} from 'react-router-dom'
export default function ProfessionalsCard({
  id,
  name,
  lastName,
  price,
  avatar,
  skills,
  score,
  areas,
}) {
  if(Array.isArray(areas)){
    areas = areas?.map(el => el.area).join(',')
  }
  if(Array.isArray(skills)){
    skills = skills?.map(el => el.skill).join(',')
  }
  const navigate = useNavigate();
  return (
    <div className={style.card} onClick={()=>navigate(`/Details/${id}`)}>
      <div className={style.blob}></div>
      <span className={style.img}>
        <img src={avatar} alt={"avatar"} />
      </span>
      <h2>
        {name}
        <br />
        <span>{lastName}</span>
      </h2>
      <div className={style.info}>
        <p><span>Skills:</span> <br /> {skills?.split(',')[0]? skills?.split(',')[0] : skills || 'Amable' }</p>
        <p><span>Areas:</span> <br /> {areas?.split(',')[0]|| 'Depresion'}</p>
        <p><span>Precio:</span> <br /> ${price || 15}</p>
        <p><span>Calificación: <br /></span> {score? `${score} /5` : 'Sé el primero en calificar'}</p>
      </div>
    </div>
  );
}
