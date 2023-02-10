import {  useState } from 'react';
import { professionalRegister } from '../../features/apiPetitions';
import  validationsForm  from './validator.js';
import { classPsicoRegister,spanError, inputError} from './RegisterPsico.module.css'

export default function RegisterPsico() {
  
const [ register, setRegister ] = useState({
    name:'',
    lastName:'',
    email:'',
    DNI:'',
    password:'',
    repeatPassword:''
})
const [errors, setErrors ] = useState({})

const verifyRepeatPassword = () => {
    let repeatPassword = validationsForm.confirmPassword(register)
    setErrors({
        ...errors, 
        ...repeatPassword
    })
}

const handleOnSubmit = async (e) => {
    e.preventDefault()
    verifyRepeatPassword()
    if(!Object.keys(errors).at(0)){
        const registerProfessional = await professionalRegister(register)
        if(registerProfessional.data.errors || registerProfessional.status === 400){
            alert(registerProfessional.data.errors?registerProfessional.data.errors : registerProfessional.data)
        }else{
          setRegister({
              name:'',
              lastName:'',
              email:'',
              DNI:'',
              password:'',
              repeatPassword:''
          })
          alert('El formulario fue enviado')
        }
    }else alert('quedan errores')
}

const handleInputChange = (e) => {
    setErrors(
        validationsForm[e.target.name](
            {   ...errors,
                [e.target.name] : e.target.value,
            }
    ))
    setRegister({
        ...register,
        [e.target.name] : e.target.value,
    })
}

return (
    <div >
    <form onSubmit={(e)=>handleOnSubmit(e)} className={classPsicoRegister}>
        <br/>
            <span className={spanError}>{errors.name}</span>
            <input
            className={errors.name? inputError:null} 
            type="text"
            name="name" 
            placeholder='Nombres' 
            value={register.name}
            onChange={(e)=>handleInputChange(e)} 
            required/>
        <br/>
            <span 
            className={spanError}>{errors.lastName}</span>
            <input 
            className={errors.lastName? inputError:null} 
            type="text"
            name="lastName" 
            placeholder='Apellidos' 
            value={register.lastName}
            onChange={(e)=>handleInputChange(e)} 
            required/>
        <br/>
            <span className={spanError}>{errors.email}</span>
            <input 
            className={errors.email? inputError:null} 
            type="email" 
            name="email"
            placeholder='Correo@email.com' 
            value={register.email}
            onChange={(e)=>handleInputChange(e)} 
            required/>
        <br/>
            <span className={spanError}>{errors.DNI}</span>
            <input 
            className={errors.DNI? inputError:null} 
            type="text"
            name="DNI" 
            placeholder="numero de DNI/Pasaporte" 
            value={register.DNI}
            onChange={(e)=>handleInputChange(e)}  
            required />
        <br/>
            <span className={spanError}>{errors.password}</span>  
            <input
            className={errors.repeatPassword? inputError:null} 
            type="password"
            name="password"
            value={register.password}
            placeholder='Repetir contraseña'
            onChange={(e)=>handleInputChange(e)}
            required />
        <br/>
            <span className={spanError} >{errors.repeatPassword}</span>    
            <span className={spanError} >{errors.confirmPassword}</span>
            <input 
            className={errors.password? inputError:null} 
            type="password"
            name="repeatPassword"
            value={register.repeatPassword}
            placeholder='Repetir contraseña'
            onChange={(e)=>handleInputChange(e)} 
            required/>
        <br/>    
            <input
            id='idSubmitRegister' 
            type="submit" 
            value="Enviar"
            disabled={Object.keys(errors).at(0)? true: false}
            />
    </form>
    </div>
  )
}
