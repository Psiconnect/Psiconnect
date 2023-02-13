import React from 'react'
import style from './ApptHistory.module.css'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'



export default function ApptHistory () {
    const users = useSelector((state) => state.user.user)
    console.log(users, 'aqui')

   


  return (
    <div className = {style.container}>
        <div className = {style.sidebarcontainer}>
            <div className={style.sidebar}>
                <div className = {style.avatar}>
                    <img src={users?.avatar} alt = '' className={style.userAvatar}/>
                </div>
                <h1 className = {style.username}>{`${users?.name} ${users?.lastName}`}</h1>
                <div className={style.menusideBar}>
                    <div className={style.itemssidebar}>
                        <NavLink to='/userProfile/profile/:id'>
                            <button className={style.buttonitems}>Perfil</button>
                        </NavLink>             
                    </div>
                    <div className={style.itemssidebar}>
                        <button className={style.buttonitems}>Historial de consultas</button>
                    </div>
                    <div className={style.itemssidebar}>
                        <NavLink to='/userProfile/profile/pagos'>
                            <button className={style.buttonitems}>Historial de pagos</button>
                        </NavLink>              
                    </div>
                    <div className={style.itemssidebar}>
                        <NavLink to='/userProfile/profile/seguridad'>
                            <button className={style.buttonitems}>Seguridad</button>
                        </NavLink>              
                    </div>
                </div>
            </div>
        </div>

        <div className={style.message}>
            Aqui va el historial de consultas del paciente
        </div>
    </div>
  )
}