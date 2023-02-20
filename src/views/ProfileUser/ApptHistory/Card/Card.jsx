import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProfessionalById } from '../../../../features/apiPetitions'
import style from './Card.module.css'

export default function Card({consult, status, link}) {
    const [user, setUser] = useState()

    useEffect(() => {
        getProfessionalById(consult.professionalId, setUser)
    }, [])

  return (
    <div className={style.container}>
        <div className={style.consult}>
            <div className={style.title}>
                <h5>Sobre tu Consulta</h5>
            </div>
            <div>
                <p><b>Fecha: </b>{consult.date}</p>
                <p><b>Precio: </b>{consult.price} usd</p>
            </div>
        </div>
        <div className={style.client}>
            <div className={style.title}>
                <h5>Sobre tu Profesional</h5>
            </div>
            {user &&
            <div>
                <p><b>Nombre: </b>{user?.name}</p>  
                <p><b>Apelido: </b>{user?.lastName}</p>
            </div>   
            }
        </div>
        
        {status=== 'COMPLETED'?
        <div><p>Estado de consulta: <b>ACEPTADA</b></p>
            <Link to = {`/Formreview/${user?.professionalId}`}>
            <p>Calificacion</p>
            </Link>
            </div>
        : <div>
            <p>Estado de consulta: <b>PENDIENTE</b></p>
        <a href={link}> Link de pago</a>
</div>}
    </div>
  )
}