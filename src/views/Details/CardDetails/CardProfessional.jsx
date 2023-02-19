import React from "react";
import style from "./CardProfessional.module.css";
import { HiOutlineArrowDown } from "react-icons/hi";
import chat from "../../../assets/chat.svg";

export default function CardProfessional(props) {
  return (
    <div className={style.card}>
      <div className={style.detalles}>
        <div className={style.containimage}>
          <img className={style.image} src={props.image} alt={props.name} />
        </div>
        <p className={style.username}>{`${props.name} ${props.lastName}`}</p>
        <div className={style.data}>
          <p>
            <span>Skills:</span> {props.skills || "AMABLE"}
          </p>
          <p>
            <span>Areas:</span> {props.areas}
          </p>
          <p>
            <span>Precio:</span> ${props.precio || 200}
          </p>
        </div>
      </div>
      <div className={style.secondDetalles}>
        <div className={style.descprofile}>
          <p className={style.infprofile}>
            <span>email:</span> {props.email}
          </p>
          <p
            className={style.infprofile}
            onClick={() => {
              window.location.href = props.linkedin;
            }}
          >
            <span>Linkedin:</span> {props.linkedin}
          </p>
          <p className={style.infprofile}>{props.description}</p>
          <p className={style.infprofile}>{props.description}</p>
        </div>
      </div>
      <div className={style.moreInfo}>
        <h2 className={style.chat}>¿Tienes alguna duda?</h2>
        <p className={style.parrafo}>Chateemos antes de la reserva</p>
        <img
          src={chat}
          alt="chat"
          onClick={() => {
            props.startChat();
            props.openModal();
          }}
        />
        <p>Reserva una cita</p>
        <HiOutlineArrowDown
          onClick={props.handleClick}
          className={style.reservacita}
        />
      </div>
    </div>
  );
}
