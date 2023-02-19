import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {  getUserPayments, getResultUserPayments } from "../../../features/apiPetitions";
import Card from "./Card/Card.jsx";
import style from "./PaymentHistory.module.css"; // Importar el archivo de estilos

export default function Incomes() {
  const [consults, setConsults] = useState();
  const [pay, setPay] = useState();

  const userId = useSelector((store) => store.user.user.id);

  useEffect(() => {
    getUserPayments(userId, setConsults);
    getResultUserPayments(userId, setPay)
  }, []);

  return (
    <div className={style.paymentsContainer}> {/* Aplicar la clase CSS en el contenedor principal */}
      <div className={style.paymentsTitle}>Historial de pagos</div>
      <div className={style.paymentsListContainer}> {/* Agregar un contenedor para la lista de consultas */}
        {consults &&
          consults.map((c, i) => {
            return (
              <div>
                <Card key={i} consult={c} />
              </div>
            );
          })}
      </div>
      {/* <div className={style.paymentsPayContainer}>  Agregar un contenedor para el monto total 
        {pay ? (
          <>
            <p className={style.paymentsPayTitle}>En total tus pagos suman</p>
            <p className={style.paymentsPayAmount}>{pay}</p>
          </>
        ) : null}
      </div> */}
    </div>
  );
}