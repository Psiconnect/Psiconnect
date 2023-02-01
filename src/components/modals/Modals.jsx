import React from "react";
import LoginUser from "../LoginUser/LoginUser";
import User from "./User";
import "./modal.css";
import { useState } from "react";
import { useEffect } from "react";

export default function FormModal({ name, set }) {
  const [value, setValue] = useState(name);
  useEffect(()=> setValue(name),[])
  const click = (e) => {
    if (e.target.id === "modal-container"){ 
      setValue("")
      set(null)
    };
  };
  switch (value) {
    case "User":
      return (
        <div onClick={click} className={`modal-container`} id="modal-container">
          <User />
        </div>
      );
    case "Professional":
      return <LoginUser />;
  }
}
