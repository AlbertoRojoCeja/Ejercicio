const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    telefono: /^\d{10}$/ ,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,	
}

const campos = {
	
	nombre: false,
    telefono: false,
	correo: false

}

const validarFormulario = (e) => {

	switch (e.target.name) {
		
		case "nombre":
      
		 validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
         
		break;
		
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
			
		break;
		
		
	}
  
}

const validarCampo = (expresiones, input, campo) => {

    if(expresiones.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto')
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto')
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    }else{
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto')
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto')
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
     
            campos[campo] = false
    }

}
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {



    const noticias = document.getElementById('noticias');

    if(campos.nombre && campos.correo ){
        //formulario.reset();
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo')

        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 3000);
        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
             
        });
        formulario.submit()

    } else {
        e.preventDefault();

        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
        }, 3000);
    }

});
