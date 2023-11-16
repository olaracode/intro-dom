// Javascript un lenguaje multiparadigma
// Javascript lenguaje orientado a eventos

// Que todo en javascript ocurria por un evento

// window.onload -> evento de carga

// Eventos de usuario
// click, presionar una tecla, mover el mouse, dblclick, hover
// change

// un evento desencadena una funcion

// elemento de boton

function greet(){
    console.log("Me ejecuto cuando dan click")
    alert("Bienvenido a nuestra pagina");
}

const btnGreet = document.getElementById("greet");

// addEventListener(tipoEvento, funcion);
btnGreet.addEventListener("click", greet);


const bootstrapBtns = [
    "btn-primary",
    "btn-secondary",
    "btn-success",
    "btn-warning",
    "btn-danger"
]

// Tenemos un boton en el html
// primero hay que agarrarlo
// tenemos que agregarle un evento
// tercero tenemos que crear una funcion que le modifique la clase

// Button
const btnColor = document.getElementById("color-change");

btnColor.addEventListener("click", () => {
    // aqui mismo tenemos nuestra funcion
    const randomIndex = Math.floor(Math.random() * bootstrapBtns.length);
    const newClass = bootstrapBtns[randomIndex];
    btnColor.className = `btn ${newClass}`;
});

const inputNombre = document.getElementById("name");

// el evento keydown se ejecuta cada vez que una tecla es precionada
const inputError = document.getElementById("error-tracker");
// el evento change se registra cuando salimos de foco el input
inputNombre.addEventListener("keydown", (event) => {
    // event.target.value podemos acceder al valor de un input
    console.log(event.target.value);
    if(event.target.value.length < 10){
        inputError.innerText = "El nombre tiene que ser mayor a 10 letras";
    } else if(event.target.value.trim() === ""){
        inputError.innerText = "El nombre no puede estar vacio"
    }
})

