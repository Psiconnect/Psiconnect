import React from "react";
import { useDispatch } from "react-redux";
import { getProfessionalsFilters } from '../../features/apiPetitions.js';
import { orderProfessionalsByCalification } from "../../features/professionalSlice";
import style from './index.module.css'

export default function CalificationOrdering(props) {
    const dispatch= useDispatch()

    const handleSelectChange=(e)=>{
        e.preventDefault();
        props.setSelect({...props.select,selectTwo : e.target.value});
        if(e.target.value === "default") 
          return getProfessionalsFilters({ state: dispatch, area: null, type: "global" });
        else 
          return dispatch(orderProfessionalsByCalification(e.target.value));     
      }

  return (
   <div className={style.selectContainerTwo}>
      <select
      className={style.select}
        name="order"
        id="order"
        value={props.select.selectTwo}
        onChange={(e) => handleSelectChange(e)}
      >
        <option value="Ordena por calificacion" selected disabled>
          Ordena por Calificación
        </option>
        <option value="default">Sin orden de calificacion</option>
        <option value="asc">Menor a Mayor Calificación</option>
        <option value="desc">Mayor a Menor Calificación</option>
      </select>
   </div>
  );
}
