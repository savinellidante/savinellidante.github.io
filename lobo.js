class Lobo { //lobos a capturar
  constructor() {
    this.x = random(width - 10);
    this.y = random(height - 10);
    this.size = 10;
    this.active = true;
    this.img = loadImage("data/lobo.png");
  }

  respawn() { //permite el respawneo aleatorio de los lobos
    this.x = random(width - 10);
    this.y = random(height - 10);
    this.active = true;
  }

  checkCollision(leñador) { //verifica si hubo colision entre el jugador y el lobo
    if (
      this.active &&
      leñador.x + leñador.size > this.x &&
      leñador.x < this.x + this.size &&
      leñador.y + leñador.size > this.y &&
      leñador.y < this.y + this.size
    ) {
      //this.active = false;
      //this.respawn();
      // Incrementa el puntaje cuando hay una colisión
      //juego.puntaje.incrementarPuntaje();
      return true; // Devuelve verdadero si hay una colisión
    }
    return false; // Devuelve falso si no hay colisión
  }

  display() {
    if (this.active) {
      image(this.img, this.x, this.y, 80, 80); //imagen del lobo
    }
  }
}
