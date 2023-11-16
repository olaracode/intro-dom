console.log("Hola mundo")

// Son los datos de la compañia
const companyDetails = {
    title: "4geeks Academy",
    description: "Enseñamos a programar :)",
    benefits: [
        "Excelentes profesores",
        "Muy buen pensum/syllabus",
        "estudiantes muy cracks :)",
        "Excelentes profesores",
        "Muy buen pensum/syllabus",
        "estudiantes muy cracks :)",
        "Excelentes profesores",
        "Muy buen pensum/syllabus",
        "estudiantes muy cracks :)",
        "Excelentes profesores",
        "Muy buen pensum/syllabus",
        "Otro beneficio"
    ]
}

// Acceder a elementos
const titleH1 = document.getElementById("title");
const companyDescription = document.querySelector(".company-description");
const multiClases = document.querySelector(".card.bg-primary");

const benefitList = document.querySelector("ul");
// Ejecuta la funcion cada vez que la ventana cargue
window.onload = function (){
    // Editar valores
    titleH1.innerText = companyDetails.title; 
    companyDescription.innerText = companyDetails.description;
    
    multiClases.innerHTML = "<span>Hola</span>";

    // element.style.[propiedad]
    titleH1.style.color = "red";
    titleH1.style.textDecoration = "underline"; 

    // element.className nos permite reemplazar la clase
    titleH1.className = "rounded";

    // element.classList nos permite ver una 
    // lista de todas las clases del elemento
    console.log(multiClases.classList);




    // agregar elemento al dom

    // 1. Crear el elemento
    // const newListItem = document.createElement("li");
    
    // 2. Agregamos el contenido
    // newListItem.innerText = "Primer elemento";

    // 3. Agregarlo al DOM
    // elementoPadre.appendChild(elementoHijo);
    // benefitList.appendChild(newListItem);

    // agregar todos los elementos de un arreglo
    // al dom
    // companyDetails.benefits
    // for of
    for(let benefit of companyDetails.benefits){
        const newListItem = document.createElement("li");
        newListItem.innerText = benefit;
        benefitList.appendChild(newListItem);
    }
}