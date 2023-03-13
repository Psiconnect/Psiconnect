import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  getProfessionalConsults,
  getProfessionalPayments,
  getResultProfessionalPayments,
} from "../../../features/apiPetitions";
import CardConsult from "./Card/CardConsult";
import style from "./incomes.module.css"; // Importar el archivo de estilos

export default function Incomes() {
  const [consults, setConsults] = useState();
  const [pay, setPay] = useState();

  const professionalId = useSelector((store) => store.user.user.id);

  useEffect(() => {
    getProfessionalConsults(professionalId, setConsults);
    getResultProfessionalPayments(professionalId, setPay);
  }, []);

  return (
    <div className={style.paymentsContainer}>
      <section className={style.mainBox}>
        <section className={style.paymentList}>
          {consults &&
            consults
              .filter((c) => c.status === "COMPLETED")
              .map((c, i) => <CardConsult key={i} consult={c} />)}

          {!consults?.length && (
            <section className={style.infoItem}>
              <p className={style.noPymnt}>
                <b>No tienes citas agendadas</b>
              </p>
            </section>
          )}
        </section>
      </section>

      <section className={style.totalPayment}>
        {pay ? (
          <>
            <p className={style.payTitle}>
              Tus ingresos con psiconnect suman en total:
            </p>
            <p className={style.payAmount}>{pay} usd</p>
          </>
        ) : null}
      </section>
    </div>
  );
}
