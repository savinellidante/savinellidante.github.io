class Pantalla {
  constructor(numero, textoPantalla, juegoSi, imagen) {
    this.numero = numero;
    this.textoPantalla = textoPantalla;
    this.habilitarJuego = juegoSi;
    this.juego = new Juego();
    this.imagen = imagen;
  }

   mostrar() {
    if (this.habilitarJuego === 1) {
      this.juego.draw();
    } else if (this.habilitarJuego === 0) {
      background(0);
      if (this.imagen) {
        image(this.imagen, 0, 0, 600, 600); //muestra la imagen si está definida
      }
      textSize(25);
      fill(255);
      textAlign(CENTER, CENTER);
      stroke(5);
      text(this.textoPantalla, width / 2, 30); //muestra el texto
    }
  }
}

class GeneradorDePantallas {
  constructor() {
    this.textoReinicio = "Presiona F5 para volver a intentarlo";
    this.textoDerrota = "¡Oh no, el lobo se ha escapado!";
    this.estado = 0;
    this.pantallas = [
      new Pantalla(1, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n Zzzzz \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n Presiona ENTER para continuar", 0, imagenes[0]),
      new Pantalla(2, "Creo que es hora de desayunar", 0, imagenes[1]),
      new Pantalla(3, "\n Bueno .. iré a visitar \n a la abuela", 0, imagenes[2]),
      new Pantalla(4, "¿Que fue eso?", 0, imagenes[3]),
      new Pantalla(5, "¡AAAAAAA SOCORRO!", 0, imagenes[4]),
      new Pantalla(6, "¡¿Que esta pasando por aqui?!", 0, imagenes[5]),
      new Pantalla(7, "", 0, imagenes[6]),
      new Pantalla(8, "¡Necesita ayuda!", 0, imagenes[7]),
      new Pantalla(9, "¡Toma esto lobo!", 0, imagenes[8]),
      new Pantalla(10, "(lanza el hacha)", 0, imagenes[9]), 
      new Pantalla(11, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n No voy a dejar que se escapen... \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n Utiliza asdw para moverte, debes alcanzar 10 lobos.", 0, imagenes[10]),
      new Pantalla(12, this.juego, 1)
    ];
  }



  mostrarPantalla() {
    this.pantallas[this.estado].mostrar();
  }

  cambiarPantalla() {
    if (keyCode === ENTER && this.estado!=11) {
      this.estado++;
      if (this.estado >= this.pantallas.length) {
        this.estado = 0;
      }
    }
  }
}
