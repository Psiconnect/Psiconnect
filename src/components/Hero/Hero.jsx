import style from "./Hero.module.css";
import React, { useState } from "react";
import hero from "../../assets/hero.png";
import FormModal from "../modals/Modals";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [modal, setModal] = useState(null);
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const openModal = () => {
    user ?
    navigate("/Asistencia")
    :
    setModal(!modal);
  };
  return (
    //navbar
    <>
      <div className={style.container}>
        <div className={style.heroContainer}>
          <div>
            <img className={style.img} src={'https://w7.pngwing.com/pngs/427/179/png-transparent-brain-character-illustration-brain-learning-cognitive-training-mind-color-creative-mind-thinking-color-splash-orange-people.png'} alt="" />
          </div>
          <div className={style.left}>
            {/* <h2>{!user ? "Registrate!" : "Agenda!"}</h2> */}
            <h2 className={style.h2_1}> Fortificando mentes,</h2> 
            <h2 className={style.h2_2}> transformando vidas.</h2>
            <h4 className={style.heroH4}>
              Recibe la atención que te mereces.
            </h4>
            {!user && 
            <button className={style.button} onClick={openModal}>
              Empieza ahora
            </button>}
            
          </div>
        </div>
      </div>
      {modal && <FormModal name={"User"} />}
    </>
  );
}
