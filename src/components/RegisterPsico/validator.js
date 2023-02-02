const validationsForm = {
    errors:{},
    name:(form) => {
        if(form.name.length<2){
            validationsForm.errors.name = 'El nombre debe ser mas largo que 2 letras'
        }else if(form.name.length>20){
            validationsForm.errors.name = 'El nombre debe tener menos de 20 letras de largo'
        }else if(!form.name){
            validationsForm.errors.name = 'El nombre no puede estar vacio'
        }else if(!form.name.match(/^(?=.{2,20}$)[a-z]+(?:['_.\s][a-z]+)*$/i)){
            validationsForm.errors.name = "El nombre no puede tener caracteres especiales o espacios antes y después del nombre"
        }else{
            delete validationsForm.errors.name
        }
        return validationsForm.errors
    },
    lastName: (form) => {
        if(form.lastName.length<4){
            validationsForm.errors.lastName = 'El apellido debe ser mas largo que 4 letras'
        }else if(form.lastName.length>20){
            validationsForm.errors.lastName = 'El apellido debe tener menos de 20 letras de largo'
        }else if(!form.lastName){
            validationsForm.errors.lastName = 'El apellido no puede estar vacio'
        }else if(!form.lastName.match(/^(?=.{4,20}$)[a-z]+(?:['_.\s][a-z]+)*$/i)){
            validationsForm.errors.lastName = "El nombre no puede tener caracteres especiales o espacios antes y después del nombre"
        }else{
            delete validationsForm.errors.lastName
        }
        return validationsForm.errors
    },
    email:  (form) => {
        if(!form.email){
            validationsForm.errors.email = 'El email no puede estar vacio'
        }else if(!form.email.match(/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/)){
            validationsForm.errors.email = "Debe introducir un formato de e-mail válido"
        }else{
            delete validationsForm.errors.email
        }
        return validationsForm.errors
    },
    DNI:(form)=>{
        if(!form.DNI){
            validationsForm.errors.DNI = 'El DNI no puede estar vacio'
        }if(form.DNI.length<8){
            validationsForm.errors.DNI = 'El DNI debe tener al menos un largo de 8 caracteres'
        }else if(form.DNI.length>10){
            validationsForm.errors.DNI  ='La DNI debe tener un largo menor a 10 caracteres'
        }else{
            delete validationsForm.errors.DNI
        }
        return validationsForm.errors
    },
    password: (form) => {
        if(!form.password){
            validationsForm.errors.password = 'La contraseña no puede estar vacio'
        }if(form.password.length<10){
            validationsForm.errors.password = 'La contraseña debe tener al menos un largo de 10 caracteres'
        }else if(form.password.length>25){
            validationsForm.errors.password = 'La contraseña debe tener un largo menor a 25 caracteres'
        }else if(!/^(?=.*[0-9])(?=.*[!@#$%^&*_.-])(?=.*[A-Z]+)[a-zA-Z0-9!@#$%^&*]/.test(form.password)){
            validationsForm.errors.password = `El repetir contraseña debe tener al menos 1 de los siguientes caracteres especiales ( !@#$%^&*_.- ), 1 numero y 1 letra Mayúscula`
        }else{
            delete validationsForm.errors.password
        }
        return validationsForm.errors
    },
    repeatPassword: (form) => {
        console.log(form)
        if(!form.repeatPassword){
            validationsForm.errors.repeatPassword = 'El repetir contraseña no debe estar vacio'
        }else if(form.repeatPassword.length<10){
            validationsForm.errors.repeatPassword = 'El repetir contraseña debe tener al menos un largo de 10 caracteres'
        }else if(form.repeatPassword.length>25){
            validationsForm.errors.repeatPassword = 'El repetir contraseña debe tener un largo menor a 25 caracteres'
        }else if(!form.repeatPassword.match(/^(?=.*[0-9])(?=.*[!@#$%^&*_.-])(?=.*[A-Z]+)[a-zA-Z0-9!@#$%^&*]/)){
            validationsForm.errors.repeatPassword = `El repetir contraseña debe tener al menos 1 de los siguientes caracteres especiales ( !@#$%^&*_.- ), 1 numero y 1 letra Mayúscula`
        }else{
            delete validationsForm.errors.repeatPassword
        }
        return validationsForm.errors
    },
    confirmPassword: (form) => {
        if(form.repeatPassword !== form.password){
            validationsForm.errors.repeatPassword = 'La contraseña y el repetir contraseña no son las mismas'
        }else{
            delete validationsForm.errors.repeatPassword
        }
        return validationsForm.errors
    }
};

  export default validationsForm;