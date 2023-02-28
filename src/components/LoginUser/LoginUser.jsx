import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import jwtDecode from "jwt-decode";
import {
  getUserByJWT,
  userLogin,
  userLoginByGoogle,
} from "../../features/apiPetitions.js";
import { validationsForm } from "./validate.js";
import { spanError, inputError, linkToForgetPass } from "./LoginUser.module.css";
import style from "./LoginUser.module.css";
import swal from "sweetalert";
import { useDispatch } from "react-redux";
import { submitHandler, submitHandlerProf } from "./submits.js";
import InputEmail from "./InputEmail/InputEmail.jsx";
import FormForgotPass from "./FormForgotPass/FormForgotPass.jsx";

export default function LoginUser({
  closeModal,
  loginProf,
  setloginProf,
  setSwitcherResponsive,
}) {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({
    hola: "rellene todos los campos",
  });
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [ switchForgotPass, SetSwitchForgotPass ] = useState(false)
 


  async function handleCredentialResponse(response) {
    const dataUser = jwtDecode(response.credential);
    const body = {
      name: dataUser.given_name,
      lastName: dataUser.family_name ? dataUser.family_name : "    ",
      email: dataUser.email,
      password: `TestPS1234`,
      avatar: dataUser.picture,
    };
    userLoginByGoogle(body)
      .then(async (e) => {
        await getUserByJWT({
          state: dispatch,
          type: "global",
        });
      })
      .then(() =>
        swal({
          title: "Se inició sesión correctamente!",
          text: `Bienvenido`,
          icon: "success",
        })
      )
      .then(() => closeModal(null))
      .catch((e) => console.log("error"));
  }
  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "299389682703-0bh5pf7g1r7c21169huc3s75rfdqr0cu.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(document.getElementById("SignInDiv"), {
      thema: "inline",
      size: "large",
    });
  }, [loginProf,switchForgotPass]);

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors(
      validationsForm[e.target.name]({
        ...errors,
        [e.target.name]: e.target.value,
      })
    );
  };
  return (
    switchForgotPass?
    <FormForgotPass 
    setloginProf={setloginProf}
    SetSwitchForgotPass={SetSwitchForgotPass}
    />
    :
    <form
      onSubmit={
        loginProf
          ? (e) => submitHandlerProf(e, errors, form, dispatch, closeModal)
          : (e) => submitHandler(e, errors, form, dispatch, closeModal)
      }
    >
      <h1>Iniciar sesión</h1>
      <p>Use su cuenta {loginProf ? "de profesional" : "de usuario"}</p>
      <label className={style.switch}>
        <input type="checkbox" onClick={() => setloginProf(!loginProf)} />
        <span className={style.slider}></span>
      </label>
      
      <InputEmail 
      form={form} 
      changeHandler={changeHandler} 
      errors={errors}/>

      <input
        type="password"
        value={form.password}
        name="password"
        placeholder="Contraseña"
        onChange={changeHandler}
        className={errors.password ? inputError : null}
      />
      <input type="submit" value="Iniciar sesion" />
      {!loginProf && <div id="SignInDiv" style={{ paddingTop: "10px" }} />}
      <span className={style.hidden}>or</span>
      <div
        className={style.switchResponsive}
        onClick={() => setSwitcherResponsive(true)}
      >
        registrarse
      </div>
        <h5 className={style.h5} onClick={SetSwitchForgotPass}>Olvidé mi contraseña</h5>
    </form>
  );
}
