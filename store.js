const products = [
    {
        name: 'Product 1',
        image: 'https://picsum.photos/200/300',
        price: 100
    },
    {
        name: 'Product 2',
        image: 'https://picsum.photos/200/300',
        price: 200
    },
    {
        name: 'Product 3',
        image: 'https://picsum.photos/200/300',
        price: 300
    },
    {
        name: 'Product 4',
        image: 'https://picsum.photos/200/300',
        price: 400
    },
    {
        name: 'Product 5',
        image: 'https://picsum.photos/200/300',
        price: 500
    }
];

window.onload = function(){
    const productGrid = document.getElementById("product-grid");
    for(let product of products){
        // Vamos a crear un elemento html(div) con la clase card
        const divCard = document.createElement("div");
        divCard.className = "card";

        // al divCard agregarle un h2 que tenga por texto el nombre del producto
        const divName = document.createElement("h2");
        divName.innerHTML = product.name;
        divCard.appendChild(divName);

        // Imagen
        const divImage = document.createElement("img");
        divImage.src = product.image;
        divCard.appendChild(divImage);

        // un boton que diga comprame + el precio
        const divButton = document.createElement("button");

        // interpolar strings Texto con variables
        divButton.innerHTML = `Comprame ${product.price}$`;
        divButton.className = "btn btn-success"
        divCard.appendChild(divButton);

        // Agregar al DOM
        productGrid.appendChild(divCard);
    }
}