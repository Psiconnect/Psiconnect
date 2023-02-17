import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Calendary from "../../../components/Calendary/Calendary";
import {
  getProfessionalConsults,
  getUserById,
} from "../../../features/apiPetitions";
import style from "./Arrangements.module.css";
import CardConsult from "./Card/CardConsult";
import {createConsults, createContext, getContextProfessional} from "../../../features/firebase/calendaryFeatures";
//sb-5wib4725027012@personal.example.com
//IR%T%Ms4

export default function Arrangements() {
  const [consults, setConsults] = useState();
  const [contextProfessional, setContextProfessional] = useState();
  const [daysDisabled, setDaysDisabled] = useState();



  const [startHour, setStartHour] = useState()
  const [endHour, setEndHour] = useState()

  const professionalId = useSelector((store) => store.user.user.id);
  const freeDays = ["Sun"];
  const workingHours = [
    "9:00 am",
    "10:00 am",
    "11:00 am",
    "12:00 am",
    "13:00 am",
    "17:00 am",
    "20:00 pm",
  
  ];
  useEffect(() => {
    getProfessionalConsults(professionalId, setConsults);
    getContextProfessional({ professionalId, state: setContextProfessional });
    getConsultsProfessional({professionalId, state:setDaysDisabled});
  }, []);
  useEffect(() => {
    getContextProfessional({professionalId, state:setContextProfessional})
  }, []);
  const createContextProfessional = () => {
    console.log(range)
    createContext({
      professionalId,
      freeDays,
      workingHours,
    });
    createConsults({
      professionalId,
      freeDays,
      workingHours,
    });
  };

  function generateHours(startHour, endHour) {
    const selectedHours = [];
    for (let i = startHour; i <= endHour; i++) {
      const hour = i % 12 || 12; 
      const suffix = i < 12 ? 'am' : 'pm'; 
      const formattedHour = `${hour.toString().padStart(2, '0')}:00 ${suffix}`;
      selectedHours.push(formattedHour);
    }
    return selectedHours;
  }

  const handleChange = (e) => {
    if(e.target.name === 'start'){
      setStartHour(e.target.value)
    }else if (e.target.name === 'end'){
      setEndHour(e.target.value)
    }
  }



  return (
    <div className={style.container}>
      <div className={style.consultsContainer}>
        <h1 className={style.title}>Estas son tus citas agendadas</h1>
      </div>
      <div className={style.box}>
        {consults &&
          consults.map((c, i) => {
            return <CardConsult key={i} consult={c} />;
          })}
        {!consults?.length && <p> No tienes citas agendadas </p>}
      </div>
      <div>
        <h4>Selecciona tu horario de trabajo</h4>
        <label>De {' '}
        <select name='start' defaultValue={hours[0]} onChange={(e) => handleChange(e)}>
          {hours.map((h, i) => {
            return(
              <option key={i} value={`${h.slice(0,2)}`}>{h}</option>
            )
          })}
        </select> hs a </label>
        <label>
        <select name='end' defaultValue={hours[0]} onChange={(e) => handleChange(e)}>
        {hours.map((h, i) => {
            return(
              <option key={i} value={`${h.slice(0,2)}`}>{h}</option>
            )
          })}
        </select> hs</label>
      </div>
      <div className={style.calendary}>
        <Calendary
          workingHours={contextProfessional?.workingHours || [
            "9:00 am",
            "10:00 am",
            "11:00 am",
            "12:00 am",
            "13:00 am",
            "17:00 am",
            "20:00 pm",
          ]}
          freeDays={contextProfessional?.freeDays || []}
          daysDisabled = {daysDisabled || []}
        />
      </div>
      <button onClick={() => createContextProfessional()}>Guardar cambios</button>
    </div>
  );
}
