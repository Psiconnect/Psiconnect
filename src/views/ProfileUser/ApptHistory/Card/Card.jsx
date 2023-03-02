import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  deletePendingConsult,
  getProfessionalById,
} from "../../../../features/apiPetitions";
import style from "./Card.module.css";
import Swal from "sweetalert";
import { cancelConsultation } from "../../../../features/firebase/calendaryFeatures";

export default function Card({ consult, status, link }) {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    status === "COMPLETED"
      ? navigate(`/Formreview/${consult.professionalId}`)
      : (window.location.href = link);
  };

  const handleCancel = () => {
    Swal({
      title: "¿Estás seguro de que quieres cancelar esta consulta?",
      text: "La cancelación es irreversible.",
      icon: "warning",
      buttons: ["No", "Sí"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        cancelConsultation(consult.professionalId,consult.date)
        deletePendingConsult(consult.id);
        console.log("Consulta cancelada");
      } else {
        console.log("Cancelación cancelada");
      }
    });
  };

  useEffect(() => {
    getProfessionalById(consult.professionalId, setUser);
  }, []);

  return (
    <div className={style.cardContainer}>
      <section className={style.dataContainer}>
        <div>
          <p>
            <b>Sobre tu Consulta</b>
          </p>
          <p>
            <b>Fecha: </b>
            {consult.date}
          </p>
          <p>
            <b>Precio: </b>
            {consult.price} usd
          </p>
        </div>

        {user && (
          <div>
            <p>
              <b>Sobre tu Profesional</b>
            </p>

            <p>
              <b>Nombre: </b>
              {user?.name}
            </p>

            <p>
              <b>Apelido: </b>
              {user?.lastName}
            </p>
          </div>
        )}
      </section>

      {status === "COMPLETED" ? (
        <section className={style.statusContainer}>
          <p>
            Estado de consulta: <b>{status}</b>
          </p>

          <button className={style.navigateButton} onClick={handleNavigate}>
            Califica tu experiencia
          </button>
        </section>
      ) : (
        <section className={style.statusContainer}>
          <p>
            Estado de consulta: <b>{status}</b>
          </p>
          {status !== "CANCELADO" && (
            <button className={style.navigateButton} onClick={handleNavigate}>
              Link de Pago
            </button>
          )}
          {status !== "CANCELADO" && (
            <button className={style.cancelButton} onClick={handleCancel}>
              Cancelar Consulta
            </button>
          )}
        </section>
      )}
    </div>
  );
}
