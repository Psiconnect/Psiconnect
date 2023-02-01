import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/LogoCerebro.svg";
import FormModal from "../modals/Modals";
import { useState } from "react";

export default function NavBar() {
  const [modal, setModal] = useState(null);
  const openModal = ()=>{
    setModal(true)
  }
  return (
    <>
      <div className={style.container}>
        <div className={style.nav}>
          <div className={style.logo}>
            <Link to={"/"}>
              <img src={logo} alt="logo" />
              <div>
                <h3>PSICONNECT</h3>
              </div>
            </Link>
          </div>
          <div className={style.nav_list}>
            <div>
              <Link to={"/"}>
                <h3>¿Qué es psiconnect? </h3>
              </Link>
            </div>
            <div>
              <Link to={"/registerProfesional"}>
                {" "}
                <h3>¿Eres medico? </h3>
              </Link>
            </div>
            <div>
              <Link to={"/AreasProfesional"}>
                <h3>Especialidades y servicios</h3>
              </Link>
            </div>
            <div>
              <Link to={"/Asistencia"}>
                <h3>¿Cómo te ayudamos?</h3>
              </Link>
            </div>
            <div onClick={openModal}>
            
                <h3>Iniciar sesion</h3>
          
            </div>
            <div onClick={openModal}>
            
                <h3>Registrate</h3>
          
            </div>
          </div>
        </div>
      </div>
      {modal && ( <FormModal name='User' set={setModal}/>)}
    </>
  );
}
