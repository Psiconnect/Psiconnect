import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putUserData } from "../../../features/apiPetitions.js";
import swal from "sweetalert";
import style from "./UsersForm.module.css";
import Loading from "../../../components/Loading/Loading.jsx";

export default function UsersForm() {
  const users = useSelector((state) => state.user.user);
  const [selectedFile, setSelectedFile] = useState();
  const [fileInputState, setFileInputState] = useState();
  const [previewSource, setPreviewSource] = useState(users?.avatar);
  const [loading, setLoading]= useState(false)

  const dispatch = useDispatch();

  const [error, setError] = useState({});

  const [input, setInput] = useState({
    name: users?.name,
    lastName: users?.lastName,
    phone: users?.phone,
    avatar: users?.avatar,
  });

  const handleInputChanges = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(validation[e.target.name]({
      ...input,
      [e.target.name]:e.target.value
    }))
    console.log(error)
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);

    setInput({
      ...input,
      avatar: previewFile,
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

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    setLoading(true)
    if(!Object.keys(error).at(0)){
     if (selectedFile) {
      
      const newImage = await uploadImage(selectedFile);
     await putUserData({
        state: dispatch,
        type: "global",
        body: {
                ...input,
                avatar: newImage,
              }
      }).then(() =>{
      setLoading(false);
          swal({
            title: "Cambios guardados!",
            text: `Sus datos fueron actualizados correctamente`,
            icon: "success",
          })}
        )
        .catch((err) => console.log(err));
      }
      else{
        //setLoading(true)
        await putUserData({
          state: dispatch,
          type: "global",
          body: input                
        }).then(() =>{
        setLoading(false)
          swal({
          title: "Cambios guardados!",
          text: `Sus datos fueron actualizados correctamente`,
          icon: "success",
        })}
      )
      .catch((err) => console.log(err));
      } 
    }else{
      setLoading(false)
      swal({
        title: "Error!",
        text: Object.values(error)[0],
        icon: "error",
      })
    }
    
        
  };
  return (
    <div className={style.profileContainer}>
      <section className={style.profileTitle}>
        <p className={style.p}>
          Estos son tus datos de usuario
          <br />
          (puedes modificarlos si lo necesitas)
        </p>
      </section>

      <form
        className={style.profileForm}
        onSubmit={(e) => handleSubmitUpdate(e)}
      >
        
        <div>
        <div className={style.changesField}>
          <section className={style.imageChange}>
            <label className={style.avatarTitle}>Tu foto de perfil</label>
            <div className={style.imageContainer}>
              <img
                className={style.sourceImage}
                src={previewSource || input.avatar}
                alt="imageAvatar"
              />
            </div>

            <input
              className={style.imageInput}
              type="file"
              name="avatar"
              id="imageProfile"
              onChange={handleChangeFile}
            />
          </section>

          <section className={style.dataChange}>
            <input
              className={error.name? style.dataInputError : style.dataInput}
              type="text"
              placeholder="Nombres"
              name="name"
              value={input.name}
              onChange={(e) => handleInputChanges(e)}
            />
{error.name && <p className={style.pError}>{error.name}</p>}
            <input
              className={error.lastName? style.dataInputError : style.dataInput}
              type="text"
              placeholder="Apellidos"
              name="lastName"
              value={input.lastName}
              onChange={handleInputChanges}
            />
{error.lastName && <p className={style.pError}>{error.lastName}</p>}
            <input
              className={style.dataInput}
              type="text"
              placeholder="Telefono"
              name="phone"
              value={input.phone || ""}
              onChange={handleInputChanges}
            />
          </section>
        </div>

        <button
          className={style.dataButton}
          type="submit"
          onSubmit={(e) => handleSubmitUpdate(e)}
        >{loading?
          'CARGANDO...' :
          'Actualiza tus datos'}
        </button>
        </div>
      </form>
    </div>
  );
}

const onlyLetter = new RegExp (/^[a-zA-ZáéíóúñÁÉÍÓÚÑ\s]+$/) //le agregué tildes y ñ  
  const rgOnlyNumbers = new RegExp(/^\d+$/);

  const validation =  {
  error : {},
  name: (input)=>{
     if (!input.name) validation.error.name = 'El nombre es requerido'
  else if(!onlyLetter.test(input.name)) validation.error.name = "Solo letras"
  else delete validation.error.name
  return validation.error
  },
  lastName: (input)=>{
    if (!input.lastName) validation.error.lastName = 'El apellido es requerido'
  else if(!onlyLetter.test(input.lastName)) validation.error.lastName = "Solo letras"
 else delete validation.error.lastName
 return validation.error
 }

  // if (!input.phone) error.phone = "Nro telefónico es requerido";
  // else if (!rgOnlyNumbers.test(input.phone)) error.phone = "Solo numeros";


};
