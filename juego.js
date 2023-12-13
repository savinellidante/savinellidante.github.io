class Juego {
  constructor() {
    this.puntaje = new Puntaje();
    this.fin = new Final();
    this.lobos = [];
    this.leñador = new Leñador();
    this.img = loadImage("data/bosque.png");
    this.juegoGanado = false;
    this.limiteLobos = 10;
    this.spawnLobo();
    this.isGameOver = false;
    this.timeRemaining = 20;
    this.mostrandoPantallaPerder = false;
    this.timer = null;
  }
  
  iniciarTimer() {
    if (this.timer === null) {
      this.timeRemaining = 20; // Configura el tiempo inicial
      this.timer = setInterval(this.updateTimer.bind(this), 1000);
    }
  }

  updateTimer() {
    if (this.timeRemaining > 0) {
      this.timeRemaining--;
    } else {
      this.isGameOver = true;
      clearInterval(this.timer);
      this.mostrandoPantallaPerder = true;
    }
  }

  setup() {
    createCanvas(600, 600); //tamaño de pantalla
    this.spawnLobo(); //spawnea un lobo al iniciar el juego
  }

  draw() {
    
    if (!this.isGameOver && !this.mostrandoPantallaPerder) {
      this.iniciarTimer(); // Inicia el temporizador solo si el juego está en curso
    }
    
    if (this.isGameOver && this.mostrandoPantallaPerder) {
      this.PantallaPerder();
      return;
    }

    image(this.img, 0, 0, 600, 600); // Fondo
    this.leñador.move();

    // Itera a través de todos los lobos en el array y verifica colisiones.
    for (let i = this.lobos.length - 1; i >= 0; i--) {
      if (this.lobos[i].checkCollision(this.leñador)) {
        this.lobos[i].active = false;
        this.lobos[i].respawn();
        // Incrementa el puntaje cuando hay una colisión
        this.puntaje.incrementarPuntaje();
      }
      this.lobos[i].display();
    }

    // Elimina los lobos inactivos después de completar el ciclo draw
    for (let i = this.lobos.length - 1; i >= 0; i--) {
      if (!this.lobos[i].active) {
        this.lobos.splice(i, 1);
      }
    }

    this.leñador.display();
    this.puntaje.display();
    if (this.fin.verificarGanador(this.puntaje)) {
      this.juegoGanado = true;
      this.pantallaGanar();
      this.juego.updateTimer = false;
      return;
    } 
  }

  spawnLobo() {
    let lobo = new Lobo();
    lobo.x = random(width);
    lobo.y = random(height);

    this.lobos.push(lobo);
  }

  PantallaPerder() {
    image(imagenes[12], 0, 0, 600, 600);
    textSize(25);
    fill(255);
    textAlign(CENTER, CENTER);
    stroke(5);
    text("Oh no, el lobo se ha escapado", width / 2, 30);
    textSize(20);
    text("Presiona F5 para volver a intentarlo", width / 2, 565);
  }
  
  pantallaGanar() {
    image(imagenes[11], 0, 0, 600, 600);
    textSize(25);
    fill(255);
    textAlign(CENTER, CENTER);
    stroke(5);
    text("¡El lobo ha sido atrapado!", width / 2, 30);
    textSize(20);
    text("¡Felicitaciones! ¡Lo conseguiste!", width / 2, 565);
  }
}
