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
			if(expresiones.usuario.test(e.target.value)==true){
				document.getElementById('usuario').classList.remove('controls_incorrecto');
				document.getElementById('usuario').classList.add('controls');
				document.getElementById('usuarioError').classList.remove('activarMensaje');
			}else{
				document.getElementById('usuario').classList.add('controls_incorrecto');
				document.getElementById('usuarioError').classList.add('activarMensaje');
				document.getElementById('nombresError').classList.remove('error');

			}
		break;
		case "nombres":
			if(expresiones.nombres.test(e.target.value)==true){
				document.getElementById('nombres').classList.remove('controls_incorrecto');
				document.getElementById('nombres').classList.add('controls');
				document.getElementById('nombresError').classList.remove('activarMensaje');
			}else{
				document.getElementById('nombres').classList.add('controls_incorrecto');
				document.getElementById('nombresError').classList.add('activarMensaje');
				document.getElementById('nombresError').classList.remove('error');
			}
		break;
		case "apellidos":
			if(expresiones.nombres.test(e.target.value)==true){
				document.getElementById('apellidos').classList.remove('controls_incorrecto');
				document.getElementById('apellidos').classList.add('controls');
				document.getElementById('usuarioError').classList.remove('activarMensaje');
			}else{
				document.getElementById('apellidos').classList.add('controls_incorrecto');
				document.getElementById('apellidosError').classList.add('activarMensaje');

			}
		break;
		case "email":
			if(expresiones.correo.test(e.target.value)==true){
				document.getElementById('email').classList.remove('controls_incorrecto');
				document.getElementById('email').classList.add('controls');
				document.getElementById('usuarioError').classList.remove('activarMensaje');
			}else{
				document.getElementById('email').classList.add('controls_incorrecto');
				document.getElementById('emailError').classList.add('activarMensaje');

			}
		break;
		case "contraseña":
			if(expresiones.password.test(e.target.value)==true){
				document.getElementById('contraseña').classList.remove('controls_incorrecto');
				document.getElementById('contraseña').classList.add('controls');
				document.getElementById('usuarioError').classList.remove('activarMensaje');
			}else{
				document.getElementById('contraseña').classList.add('controls_incorrecto');
				document.getElementById('contraseñaError').classList.add('activarMensaje');

			}
		break;
		case "contraseña2":
			if(expresiones.password.test(e.target.value)==true){
				document.getElementById('contraseña2').classList.remove('controls_incorrecto');
				document.getElementById('contraseña2').classList.add('controls');
				document.getElementById('usuarioError').classList.remove('activarMensaje');
			}else{
				document.getElementById('contraseña2').classList.add('controls_incorrecto');
				document.getElementById('contraseña2Error').classList.add('activarMensaje');

			}
		break;
	}

};

inputs.forEach((input) => {
	input.addEventListener('keyup', validarformulario);
	input.addEventListener('blur', validarformulario);
})

formulario.addEventListener('submit',(e) => {
	e.preventDefault();
});
