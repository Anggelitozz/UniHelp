const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombres: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellidos: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const validarformulario = (e) => {
	switch(e.target.name){
		case "username":
			if(expresiones.usuario.test(e.target.value)==true){
				document.getElementById('usuario').classList.remove('controls_incorrecto');
			}else{
				document.getElementById('usuario').classList.add('controls_incorrecto');

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
