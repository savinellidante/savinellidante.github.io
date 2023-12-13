class Puntaje { //clase de puntaje
  constructor() {
    this.puntos = 0;
  }

  incrementarPuntaje() {
    this.puntos++;
  }

  display() {
    fill(255);
    textSize(24);
    textAlign(RIGHT);
    text("Lobos: " + this.puntos, width - 20, 30);
  }
}
