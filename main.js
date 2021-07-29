//Base de datos de objetos creados a partir del constructor del archivo constructor.js
//prueba
$(document).ready(function () {
  //array de stock original

  data = [];
  // GET

  $.get("./db/stockPerros.json", function (datos) {
    console.log(datos);
    data = datos;
    //VUELVE EL GET CON LOS DATOS

    stockOriginal = [
      `${data[0].stock}`,
      `${data[1].stock}`,
      `${data[2].stock}`,
      `${data[3].stock}`,
      `${data[4].stock}`,
      `${data[5].stock}`,
    ];

    //JQUERY elementos escondidos

    pintar();

    $("h6").hide();
    $("#boton-comprar").hide();
    //Animaciones Jquery - al cargar la pagina primero aparecen las cards y despues el carrito.
    $(".CarritoDeCompra").hide().delay(1000).fadeIn(800);

    botones();

    //Esta funcion controla el funcionamiento del carrito.
    agregarCarrito();
  });
});
