import React from "react";
import { useDispatch } from "react-redux";
import { getProfessionalsFilters } from '../../features/apiPetitions.js';
import { orderProfessionalsByPrice } from "../../features/professionalSlice";
import style from './index.module.css';

export default function PriceOrdering(props) {
    const dispatch= useDispatch()

    const handleSelectChange=(e)=>{
        e.preventDefault();
        props.setSelect({...props.select,selectOne : e.target.value});
        if(e.target.value === "default") 
          return getProfessionalsFilters({ state: dispatch, area: null, type: "global"});
        else
          return  dispatch(orderProfessionalsByPrice(e.target.value));
      }
  return (
   <div className={style.selectContainer}>
      <select
      className={style.select}
        name="order"
        id="order"
        value={props.select.selectOne}
        onChange={(e) => handleSelectChange(e)}
      >
        <option value="Ordena por precio" selected disabled>
          Ordena por precio
        </option>
        <option value="default">Sin orden de precio</option>
        <option value="asc">Menor a Mayor precio</option>
        <option value="desc">Mayor a Menor precio</option>
      </select>
   </div>
  );
}
