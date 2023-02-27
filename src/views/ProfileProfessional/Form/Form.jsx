import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import validationsForm from "./validate.js";
import {
  getAreas,
  getSkills,
  profUpdate,
  getProfByJWT,
} from "../../../features/apiPetitions.js";
import style from "./Form.module.css";
import swal from "sweetalert";
import{
    inputs,
    inputsErrors
} from '../../../components/postRegisterPsico/Linkedin/Linkedin.module.css'

const ProfileForm = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [areas, setAreas] = useState();
  const [skills, setSkills] = useState();
  const [price, setPrice] = useState("");
  const [imageDisabled, setImageDisabled] = useState(false);
  const [form, setForm] = useState({
    name: user?.name,
    price: user?.price,
    lastName: user?.lastName,
    linkedin: user?.linkedin,
    description: user?.description,
    areas: user?.areas?.map((a) => a.area),
    avatar: user?.avatar,
    avatarIMG: user?.avatar,
    skills: user?.skills?.map((s) => s.skill),
  });

  useEffect(() => {
    let img = document.querySelector("#deleteImageAvatar");

    if (form.avatar === "" && !imageDisabled) {
      img.disabled = true;
      setImageDisabled(true);
    } else {
      img.disabled = false;
      setImageDisabled(false);
    }
  }, [form.avatar]);

  useEffect(() => {
    getAreas(setAreas);
    getSkills({
      state: setSkills,
      type: "local",
    });
  }, []);

  const handleInputDeletedAvatar = () => {
    if (!form.avatar) return;
    setForm({
      ...form,
      avatar: "",
      avatarIMG: "",
    });

    let img = document.querySelector("#imageAvatar");
    img.value = "";
  };
  const handleInputChangeAvatar = async (e) => {
    if (!e.target.files[0]) return;
    setForm({
      ...form,
      [e.target.name]: e.target.files[0],
      avatarIMG: URL.createObjectURL(e.target.files[0]),
    });
  };
  const uploadImage = async (file) => {
    let formData = new FormData();
    formData?.append("file", file);
    formData?.append("upload_preset", "psiconnectpreset");
    formData.append("api_key", 652951616386787);

    const xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "https://api.cloudinary.com/v1_1/dcdywqotf/image/upload",
      false
    );

    xhr.send(formData);
    const imageResponse = JSON.parse(xhr.responseText);

    return imageResponse.secure_url;
  };

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validationsForm[e.target.name]({
        ...errors,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSelectChange = (e) => {
    let options = document.querySelector(`#${e.target.value}`);

    if (!form[e.target.name].some((el) => el === e.target.value)) {
      setForm({
        ...form,
        [e.target.name]: form[e.target.name].concat(e.target.value),
      });
      setErrors(
        validationsForm[e.target.name]({
          ...errors,
          [e.target.name]: form[e.target.name].concat(e.target.value),
        })
      );
      options.disabled = true;
    } else {
      setForm({
        ...form,
        [e.target.name]: form[e.target.name].filter(
          (el) => el !== e.target.value
        ),
      });
      setErrors(
        validationsForm[e.target.name]({
          ...errors,
          [e.target.name]: form[e.target.name].filter(
            (el) => el !== e.target.value
          ),
        })
      );
      options.disabled = false;
    }
  };

const inputErrorChecker = () => {
  return  Object.values(form).some(el=> (el === '' || el.length === 0 )) &&
              Object.keys(errors).at(0) || Object.keys(errors).at(0)? 
                  true : false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    setErrors(validationsForm.avatar(form));
    const newImage = await uploadImage(form.avatar);
    if (!Object.keys(errors).at(0)) {
=======
    setErrors(validationsForm.avatar(form))
    const newImage= await uploadImage(form.avatar)
    if (!inputErrorChecker()) {
>>>>>>> 27304245852b3c040a315d44c28e1f72d06ebdf6
      profUpdate({
        state: dispatch,
        type: "global",
        payload: {
          ...form,
          avatar: newImage,
        },
      }).then((e) => {
        swal({
          title: "Cambios guardados!",
          text: `Sus datos fueron actualizados correctamente`,
          icon: "success",
        });
      });
    } else {
      swal({
        title: "Error!",
        text: Object.values(errors)[0],
        icon: "error",
      });
    }
  };

  return (
    <div className={style.divContainer}>
      <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
        <label className={style.labelInicio}>
          {user.name} {user.lastName}
<<<<<<< HEAD
        </label>{" "}
        <br />
        <label className={style.label}>Avatar</label>
=======
        </label> <br />
        <label className={style.labelAvatar}>Avatar</label>
>>>>>>> 27304245852b3c040a315d44c28e1f72d06ebdf6
        <p className={style.p}>*selecciona un imagen para tu foto de perfil</p>
        <div className={style.divContainerImg}>
          <div className={style.divAvatar}>
            <img
              className={style.avatar}
              src={form.avatarIMG}
              alt="imgAvatar"
            />
          </div>
          <div className={style.divInputsImage}>
            <input
              className={errors.avatar? style.inputAvatarError : style.inputImage}
              id="imageAvatar"
              type="file"
              accept="image/*"
              name="avatar"
              onChange={(e) => handleInputChangeAvatar(e)}
            />
            <input
              className={
                imageDisabled ? style.inputImageDisabled : style.inputImage
              }
              id="deleteImageAvatar"
              type="button"
              name="avatar"
              value="Borrar imagen"
              onClick={() => handleInputDeletedAvatar()}
            />
          </div>
        </div>
        <label className={style.label}>Descripción</label>
        <p className={style.p}>
          *escribe una breve descripción de tu perfil como profesional si aún no
          la tienes
          <br />
          *CONSEJO* trata de añadir datos que creas importantes y relevantes de
          tu perfil
        </p>
        <span className={style.errorsDescription}>{errors.description}</span>
        <div className={errors.description? style.errorsDescriptionContainer : style.containerDescription}>
          <textarea
            name="description"
            value={form.description || ""}
            placeholder="Descripcion"
            className={style.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <label className={style.label}>Areas</label>
        <p className={style.p}>*selecciona las areas en las que trabajas</p>
        <span className={style.errorsText}>{errors.areas}</span>
        <select
          className={errors.areas? style.errorsSelect : style.select}
          name="areas"
          onChange={(e) => handleSelectChange(e)}
          required
          key="areas"
        >
          <option key="defaultSelect" value="defaultSelect" selected disabled>
            Areas
          </option>
          {areas?.map((el) => {
            return (
              <option key={el.area} value={el.area} id={el.area}>
                {el.area}
              </option>
            );
          })}
        </select>
        <div className={style.divContainerMapCards}>
          {form.areas?.map((el) => {
            return (
              <div key={el} className={style.divContainerCard}>
                <span id="areaid" value={el}>
                  {el}
                </span>
                <span
                  className={style.xSpanCard}
                  onClick={() =>
                    handleSelectChange({ target: { value: el, name: "areas" } })
                  }
                >
                  x
                </span>
              </div>
            );
          })}
        </div>
        <label className={style.label}>Habilidades</label>
        <p className={style.p}>
          *selecciona las habilidades que consideras tener
        </p>
        <span className={style.errorsText}>{errors.skills}</span>
        <select
          className={errors.skills? style.errorsSelect : style.select}
          name="skills"
          onChange={(e) => handleSelectChange(e)}
          required
          key="skills"
        >
          <option key="defaultSelect" value="defaultSelect" selected disabled>
            Habilidades
          </option>
          {skills?.map((el) => {
            return (
              <option key={el.skill} id={el.skill} value={el.skill}>
                {el.skill}
              </option>
            );
          })}
        </select>
        <div className={style.divContainerMapCards}>
          {form.skills?.map((el) => {
            return (
              <div className={style.divContainerCard}>
                <span>{el}</span>
                <span
                  className={style.xSpanCard}
                  onClick={() =>
                    handleSelectChange({
                      target: { value: el, name: "skills" },
                    })
                  }
                >
                  x
                </span>
              </div>
            );
          })}
        </div>
        <label className={style.label}>Linkedin</label>
        <p className={style.p}>
          *copie y pega el link de tu perfil de Linkedin
        </p>
        <input
          className={errors.linkedin ? style.inputsErrors : style.inputs}
          type="text"
          name="linkedin"
          value={form.linkedin}
          placeholder="https://www.linkedin.com/in/..."
          onChange={handleInputChange}
        />
        
        <label className={style.label}> Precio  </label>
            <p className={style.p}>
                *Selecciona el precio en USD (dólares estadounidenses) por hora de tus consultas
            </p>
            <span className={style.errorsText}>
                {errors.price}
            </span>
            <input
            className={errors.price? inputsErrors : inputs}
            type="number" 
            name='price'
            value={form.price}
            placeholder='$15'
            onChange={handleInputChange}
            />
<<<<<<< HEAD
        <input className={style.inputSubmit} type="submit" value="Actualizar" />
=======
        <input 
        disabled={inputErrorChecker()}
        className={inputErrorChecker()? style.inputSubmitDisabled : style.inputSubmit }
        type="submit" 
        value="Actualizar" />
>>>>>>> 27304245852b3c040a315d44c28e1f72d06ebdf6
      </form>
    </div>
  );
};
export default ProfileForm;
