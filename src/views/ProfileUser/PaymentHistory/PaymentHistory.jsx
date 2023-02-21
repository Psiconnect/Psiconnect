import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {  getUserPayments, getResultUserPayments } from "../../../features/apiPetitions";
import Card from "./Card/Card.jsx";
import style from "./PaymentHistory.module.css";


export default function PaymentHistory () {
  const [consults, setConsults] = useState()
  const userId = useSelector((state) => state.user.user.id)

  useEffect(() => {
    getUserPayments(userId, setConsults);
    // getResultUserPayments(userId, setPay)
  }, []);


  return (
    <div className={style.paymentsContainer}> 
      <section className={style.paymentTitle}>
        <p className={style.title}>
          <b>Historial de pagos</b>
        </p> 
      </section>

      <section className={style.paymentList}>
        {consults &&
          consults.map((c, i) => {
            return (
              <div className={style.paymentInfo}>
                <Card key={i} consult={c} />
              </div>
            );
        })}

        {!consults?.length && <div className={style.noPymnt}>
          <p>
            <b>No tienes pagos realizados</b>
          </p>
        </div>}
      </section>
    </div>
  );
}