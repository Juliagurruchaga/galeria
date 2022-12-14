//ejercicio de galería de imágenes
const enlaces = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");
const flechasModal = document.querySelectorAll(".modal button")
let imgActual = 0;

//abrir modal
//hacer click en cualquiera de los enlaces y ponerle la clase visible a la modal
enlaces.forEach(function(enlace,indice){      //el indice nos sirve para saber en que imagen estamos a la hora de hacer útiles las flechas      //esto es lo que hace el bucle
	enlace.addEventListener("click", function(evento){                       
		evento.preventDefault();                                               //esto evita que se produzca lo que lleva por defecto
		imgActual = indice;
		imgModal.setAttribute("src",enlace.getAttribute("href"));              // sirve para agregar un atributo a imgModal y en este caso preguntar por su href
		modal.classList.add("visible");                                      //esto añade la clase visible
	});
});

//esto hace lo mismo que lo de antes pero de otra manera
/* for(let i = 0; i < enlaces.length; i++){
	enlaces[i].addEventListener("click", function(evento){
		evento.preventDefault();
		modal.classList.add("visible")
	});
} */

//cerrar modal, hacer click en cualquier parte de la modal y quitarle la clase visible a la modal

modal.addEventListener("click", function(){
	modal.classList.remove("visible");
});

flechasModal.forEach(function(flecha,indice){
	flecha.addEventListener("click", function(evento){
		evento.stopPropagation();
		if (indice == 0){
			imgActual = imgActual > 0 ? imgActual -1 : enlaces.length -1;    //esto sirve para ir a la imagen anterior; siempre que puede le resta uno, se lee: imagen actual es igual a imagen actual es mayor a cero pues será menos 1, sino será el último valor posible. (para que una vez que esté en cero vuelva a 8 y del 8 pase al 0 para que sea infinito)
		}else{
			imgActual = imgActual < enlaces.length -1 ? imgActual + 1 : 0;  //esto sirve para ir a la imagen siguiente; le suma uno
		}
		imgModal.setAttribute("src",enlaces[imgActual].getAttribute("href"));
	})
});
