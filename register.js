const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombres: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const validarformulario = (e) => {
	switch(e.target.name){
		case "username":
			validar(expresiones.usuario, e.target, e.target.name);
		break;
		case "nombres":
			validar(expresiones.nombres, e.target, e.target.name);
		break;
		case "apellidos":
			validar(expresiones.nombres, e.target, e.target.name);
		break;
		case "email":
			validar(expresiones.correo, e.target, e.target.name);
		break;
		case "contraseña":
			validar(expresiones.password, e.target, e.target.name);
		break;
		case "contraseña2":
			validar(expresiones.usuario, e.target, e.target.name);
		break;
	}

};
const validar = (exp,input,id) =>{
	if(exp.test(input.value)==true){
		document.getElementById(`${id}`).classList.remove('controls_incorrecto');
		document.getElementById(`${id}Error`).classList.remove('activarMensaje');
	}else{
		document.getElementById(`${id}`).classList.add('controls_incorrecto');
		document.getElementById(`${id}Error`).classList.add('activarMensaje');
		document.getElementById(`${id}Error`).classList.remove('error');
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarformulario);
	input.addEventListener('blur', validarformulario);
})

formulario.addEventListener('submit',(e) => {
	e.preventDefault();
});
