import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserConsults } from "../../../features/apiPetitions";
import Card from "./Card/Card.jsx";
import style from "./PaymentHistory.module.css";
export default function PaymentHistory() {
  const [consults, setConsults] = useState();

  const users = useSelector((state) => state.user.user);

  useEffect(() => {
    getUserConsults(users.id, setConsults);
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
          consults
            .filter((c) => c.status === "COMPLETED")
            .map((c, i) => {
              return (
                <div className={style.paymentInfo} key={i}>
                  {c.status === "COMPLETED" && <Card consult={c} />}
                </div>
              );
            })}

        {!consults?.length && (
          <div className={style.noPymnt}>
            <p>
              <b>No tienes pagos realizados</b>
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
