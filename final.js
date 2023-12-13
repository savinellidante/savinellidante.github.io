class Final { //clase de pantalla del final, es decir, victoria
  constructor() {
    this.ganaste = false;
    this.puntaje = 0;
  }

  verificarGanador(puntaje) { //se encarga de verificar si ganaste viendo la cantidad de lobos que capturaste
    if (puntaje.puntos >= 10) {
      return true;
    }
  }
}
