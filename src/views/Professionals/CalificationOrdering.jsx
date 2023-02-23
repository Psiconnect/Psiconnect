import React from "react";
import { useDispatch } from "react-redux";
import { orderProfessionalsByCalification } from "../../features/professionalSlice";
import style from './index.module.css'

export default function CalificationOrdering(props) {
    const dispatch= useDispatch()

    const handleSelectChange=(e)=>{
        e.preventDefault();
        props.setSelect(e.target.value)
        console.log(e.target.value)
        dispatch(orderProfessionalsByCalification(e.target.value))
      }

  return (
   <div className={style.selectContainerTwo}>
      <select
      className={style.select}
        name="order"
        id="order"
        value={props.select}
        onChange={(e) => handleSelectChange(e)}
      >
        <option value="Ordena por calificacion" selected disabled>
          Ordena por Calificación
        </option>
        <option value="asc">Menor a Mayor Calificación</option>
        <option value="desc">Mayor a Menor Calificación</option>
      </select>
   </div>
  );
}
